import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { userModel } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  baseurl="http://localhost:3000/user";

  constructor(private authService:AuthserviceService,
    private http:HttpClient
  ) { }

  getUserProfile(): Observable<userModel | null> {
    return of(this.authService.getProfileFromStorage());
  }

  updateUserProfile(user: userModel): Observable<userModel> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<userModel>(`${this.baseurl}/${user.id}`, user);
  }
}
