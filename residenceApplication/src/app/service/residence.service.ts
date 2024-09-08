import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResicendenceModel } from '../model/residence.model';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  baseUrl: string = "http://localhost:8087/api/recidence/"

  constructor(private httpClient: HttpClient) { }

  getAllResidence(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createResidence(residence: ResicendenceModel, image: File): Observable<ResicendenceModel> {

    const formData = new FormData();

    formData.append('residence', new Blob([JSON.stringify(residence)], { type: 'application/json' }));

    // Append image file
    formData.append('image', image);

    return this.httpClient.post<ResicendenceModel>(this.baseUrl + "save", formData);

  }
}
