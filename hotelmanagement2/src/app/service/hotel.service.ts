import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseUrl:string="http://localhost:8088/api/hotel/"

  constructor(private httpClient:HttpClient) { }


  getAllHotel():Observable<any>{

    return this.httpClient.get(this.baseUrl)

  }

  getHotelById(hotelId: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+hotelId);
  }




}
