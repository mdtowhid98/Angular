import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesDetailsModule } from '../module/sales-details/sales-details.module';

@Injectable({
  providedIn: 'root'
})
export class SalesDetailsService {

  baseUrl: string = "http://localhost:8087/api/salesdetails/";

  constructor(private httpClient: HttpClient) { }

  getAllSalesDetails(): Observable<SalesDetailsModule[]> {
    return this.httpClient.get<SalesDetailsModule[]>(`${this.baseUrl}`);
  }

  // Fetch grouped sales details
  getGroupedSalesDetails(): Observable<Map<number, SalesDetailsModule[]>> {
    return this.httpClient.get<Map<number, SalesDetailsModule[]>>(`${this.baseUrl}grouped`);
  }


  searchByCustomerNameAndId(sales: SalesDetailsModule[], searchTerm: string): SalesDetailsModule[] {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return sales.filter(item =>
    (item.sale.customername?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.sale.id?.toString().includes(lowerCaseSearchTerm)
    )
    );
  }


}
