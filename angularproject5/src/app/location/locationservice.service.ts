import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationserviceService {

  baseUrl:string="http://localhost:3000/locations";

  constructor(private httpClient:HttpClient) { }

getAllLocation():Observable<any>{

return this.httpClient.get(this.baseUrl);

}


}
