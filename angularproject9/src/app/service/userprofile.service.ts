import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { userModel } from '../model/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
baseUrl:string="http://localhost:3000/user";
  constructor(private authService:AuthService,
    private http:HttpClient
  ) { }

  getUserProfile(): Observable<userModel | null> {
    return of(this.authService.getProfileFromStorage());
  }

  updateUserProfile(user: userModel): Observable<userModel> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<userModel>(`${this.baseUrl}/${user.id}`, user);
  }
}
