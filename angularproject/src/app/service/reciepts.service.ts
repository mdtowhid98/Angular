import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecieptsModule } from '../module/reciepts/reciepts.module';

@Injectable({
  providedIn: 'root'
})
export class RecieptsService {

  baseUrl: string = "http://localhost:3000/reciepts/";


  constructor(private httpClient: HttpClient) { }

  getAllReciepts(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }

  createReciepts(reciept:RecieptsModule):Observable<RecieptsModule>{
    return this.httpClient.post<RecieptsModule>(this.baseUrl, reciept);
  }


}
