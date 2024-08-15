import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Client } from '../interface/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://localhost:8081/api/v1/';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http
      .get<Client[]>(this.apiUrl + 'clients')
      .pipe(tap((clients) => console.log('Clients::: ', clients)));
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(this.apiUrl + 'clients/' + id);
  }

  addClient(client: Client): Observable<Client> {
    http: return this.http.post<Client>(this.apiUrl + 'clients/', client);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(this.apiUrl + 'clients/' + id + '/', client);
  }

  deleteClient(id: number): Observable<Client> {
    return this.http.delete<Client>(this.apiUrl + 'clients/' + id);
  }
}
