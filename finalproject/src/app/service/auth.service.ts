import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModule } from '../module/user/user.module';
import { catchError, map, Observable } from 'rxjs';
import { Authresponse } from '../module/authresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="http://localhost:3000/user";

  constructor(private http:HttpClient) { }

  registration(user: UserModule): Observable<Authresponse> {

    return this.http.post<UserModule>(this.baseUrl, user).pipe(

      map(
        (newUser: UserModule) => {
          const token = btoa(`${newUser.email}${newUser.password}`);
          return { token, user: newUser } as Authresponse;

        })
    )
  }



  login(credentials: { email: string; password: string }): Observable<Authresponse> {
    let params = new HttpParams();
    params = params.append('email', credentials.email);

    return this.http.get<UserModule[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            this.storeUserProfile(user)
            return { token, user } as Authresponse;
          } 
          
          else {
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
  storeUserProfile(user:UserModule):void{

    localStorage.setItem('userProfile',JSON.stringify(user));
      }

  getProfileFromStorage():UserModule | null{

    const userProfile=localStorage.getItem('userProfile');
    return userProfile ? JSON.parse(userProfile):null;
  }

  removeUserDetails(){

    localStorage.clear();
  }


}