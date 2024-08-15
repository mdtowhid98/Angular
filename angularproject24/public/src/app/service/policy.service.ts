import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Policy } from '../interface/policy';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  private apiUrl = 'http://localhost:8081/api/v1/';

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policy[]> {
    return this.http
      .get<Policy[]>(this.apiUrl + 'policies')
      .pipe(tap((policies) => console.log('Policies', policies)));
  }

  getPolicy(id: number): Observable<Policy> {
    return this.http.get<Policy>(this.apiUrl + 'policies/' + id);
  }

  deletePolicy(id: number): Observable<Policy> {
    return this.http.delete<Policy>(this.apiUrl + 'policies/' + id);
  }

  addPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(this.apiUrl + 'policies/', policy);
  }

  updatePolicy(id: number, policy: Policy): Observable<Policy> {
    return this.http.put<Policy>(this.apiUrl + 'policies/' + id + '/', policy);
  }
}
