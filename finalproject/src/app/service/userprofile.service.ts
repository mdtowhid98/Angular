import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserModule } from '../module/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  baseurl="http://localhost:3000/user";

  constructor(private authService:AuthService,
    private http:HttpClient
  ) { }

  getUserProfile(): Observable<UserModule | null> {
    return of(this.authService.getProfileFromStorage());
  }

  updateUserProfile(user: UserModule): Observable<UserModule> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<UserModule>(`${this.baseurl}/${user.id}`, user);
  }
}