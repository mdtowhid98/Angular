import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesProductModel } from '../model/salesproduct.model';

@Injectable({
  providedIn: 'root'
})
export class SalesproductService {

  baseUrl: string = "http://localhost:3000/salesproducts/";
  constructor(private httpClient: HttpClient) { }


  viewAllSalesProduct(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createSalesProduct(salesProduct: SalesProductModel): Observable<SalesProductModel> {
    return this.httpClient.post<SalesProductModel>(this.baseUrl, salesProduct);
  }


}
