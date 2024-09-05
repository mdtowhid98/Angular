import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationModel } from '../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string = "http://localhost:8088/api/location/"

  constructor(private httpClient: HttpClient) { }


  getAllLocation(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }

  createLocation(location:LocationModel):Observable<LocationModel>{

    return this.httpClient.post<LocationModel>(this.baseUrl+"save",location);
   }

}
