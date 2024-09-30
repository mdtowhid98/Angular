import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../guard/api.response.model';
import { CustomerModule } from '../module/customer/customer.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "http://localhost:8087/api/customer/"


  constructor(private httpClient: HttpClient) { }

  getAllCustomer(): Observable<CustomerModule[]> {
    return this.httpClient.get<CustomerModule[]>(this.baseUrl);
  }

 

  createCustomer(customerData: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+"save", customerData);
  }

  deleteCustomer(id: number): Observable<any> {

    return this.httpClient.delete(this.baseUrl+ "delete/"+ id);
  }

  updateCustomers(id: number, customer: CustomerModule): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + "update/" + id, customer); 
  }



  getById(id: number): Observable<any> {

    return this.httpClient.get(this.baseUrl + id);
  }


}