import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesOrderModule } from '../module/sales-order/sales-order.module';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {

  private baseUrl: string = 'http://localhost:8087/api/salesorder/';

  constructor(
    private httpClient:HttpClient
    ) { }

  getAllSalesOrder(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  createSalesOrder(order: SalesOrderModule): Observable<SalesOrderModule> {

    return this.httpClient.post<SalesOrderModule>(this.baseUrl+"save", order);
  }


}
