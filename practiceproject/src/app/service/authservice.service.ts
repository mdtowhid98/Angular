import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../model/user.model';
import { Authresponse } from '../model/authresponse';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private baseUrl:string="http://localhost:3000/user";

  constructor(private http:HttpClient) { }

  registration(user: userModel): Observable<Authresponse> {

    return this.http.post<userModel>(this.baseUrl, user).pipe(

      map(
        (newUser: userModel) => {
          const token = btoa(`${newUser.email}${newUser.password}`);
          return { token, user: newUser } as Authresponse;

        })
    )
  }



  login(credentials: { email: string; password: string }): Observable<Authresponse> {
    let params = new HttpParams();
    params = params.append('email', credentials.email);

    return this.http.get<userModel[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            return { token, user } as Authresponse;
          } else {
            throw new Error('Invalid password');
          }
        } else {
          throw new Error('User not found');
        }
      }),
      catchError(err => {
        console.error('Login error', err);
        throw err;
      })
    );
  }



  logout(): void {
    localStorage.removeItem('token');
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }




}
