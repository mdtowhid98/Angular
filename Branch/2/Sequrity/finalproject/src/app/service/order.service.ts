import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModule } from '../module/order/order.module';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

baseUrl:string="http://localhost:8087/api/orderproduct/"

  constructor(private httpClient: HttpClient) { }

  getAllOrder(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  createOrder(order: OrderModule): Observable<OrderModule> {

    return this.httpClient.post<OrderModule>(this.baseUrl+"save", order);
  }

}
