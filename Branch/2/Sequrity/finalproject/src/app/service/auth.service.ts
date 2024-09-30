import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { UserModule } from '../module/user/user.module';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AuthResponse } from '../guard/authresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8087'; // Your backend API URL
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private userRoleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public userRole$: Observable<string | null> = this.userRoleSubject.asObservable();

  private currentUserSubject: BehaviorSubject<UserModule | null> = new BehaviorSubject<UserModule | null>(null);
  public currentUser$: Observable<UserModule | null> = this.currentUserSubject.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize the role from localStorage only if it's a browser
    if (this.isBrowser()) {
      const storedRole = localStorage.getItem('userRole');
      this.userRoleSubject.next(storedRole);
    }
  }

  // New methods to handle localStorage
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private setItem(key: string, value: string): void {
    if (this.isBrowser()) {
      localStorage.setItem(key, value);
    }
  }

  private getItem(key: string): string | null {
    return this.isBrowser() ? localStorage.getItem(key) : null;
  }

  private removeItem(key: string): void {
    if (this.isBrowser()) {
      localStorage.removeItem(key);
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/login`, { email, password }, { headers: this.headers })
      .pipe(
        map((response: AuthResponse) => {
          if (this.isBrowser() && response.token) {
            this.setItem('authToken', response.token);
            const decodedToken = this.decodeToken(response.token);
            this.setItem('userRole', decodedToken.role);
            this.userRoleSubject.next(decodedToken.role); // Update role in BehaviorSubject
            this.currentUserSubject.next(decodedToken.user); // Set current user
          }
          return response;
        })
      );
  }

  register(user: { name: string; email: string; password: string; cell: string; address: string; dob: Date; gender: string; image: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`,
      user, { headers: this.headers }).pipe(
        map((response: AuthResponse) => {
          if (this.isBrowser() && response.token) {
            this.setItem('authToken', response.token); // Store JWT token
          }
          return response;
        })
      );
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('Token decoding failed:', e);
      return null; // Return null if decoding fails
    }
  }

  getUserRole(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('userRole');
    }
    return null;
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  isAdminOrPharmacist(): boolean {
    const role = this.getUserRole();
    return role === 'ADMIN' || role === 'PHARMACIST';
  }

  isPharmacist(): boolean {
    return this.getUserRole() === 'PHARMACIST';
  }

  isUser(): boolean {
    return this.getUserRole() === 'USER';
  }

  isTokenExpired(token: string): boolean {
    const decodedToken = this.decodeToken(token);
    const expiry = decodedToken.exp * 1000; // Convert expiry to milliseconds
    return Date.now() > expiry;
  }

  getUserProfileFromStorage(): UserModule | null {
    const userProfileJson = this.getItem('userProfile');
    return userProfileJson ? JSON.parse(userProfileJson) : null;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      return true;
    }
    this.logout(); // Automatically log out if token is expired
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.removeItem('authToken');
      this.removeItem('userRole');
      this.userRoleSubject.next(null); // Clear role in BehaviorSubject
    }
    this.router.navigate(['/login']);
  }

  hasRole(roles: string[]): boolean {
    const userRole = this.getUserRole();
    return userRole ? roles.includes(userRole) : false;
  }

 
}