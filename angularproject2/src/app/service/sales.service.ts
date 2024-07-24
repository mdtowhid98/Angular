import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesModel } from '../model/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl: string = "http://localhost:3000/sales/";
  constructor(private httpClient: HttpClient) { }

  viewAllsales(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createSales(sales: SalesModel): Observable<SalesModel> {

    return this.httpClient.post<SalesModel>(this.baseUrl, sales);
  }

  deleteSales(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + id);
  }

  updateSales(sales: SalesModel): Observable<SalesModel> {
    return this.httpClient.put<SalesModel>(this.baseUrl + sales.id, sales);
  }

  getSalesById(saleId: string): Observable<SalesModel> {
    return this.httpClient.get<SalesModel>(this.baseUrl + saleId);
  }

}
