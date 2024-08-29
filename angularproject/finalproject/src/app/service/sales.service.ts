




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SalesModule } from '../module/sales/sales.module';
import { ProductModule } from '../module/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl: string = "http://localhost:3000/sales/";

  constructor(private httpClient: HttpClient) { }

  getAllsales(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getAllSalesForSalesProduct(): Observable<SalesModule[]> {

    return this.httpClient.get<SalesModule[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      )

  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));

  }

  createSales(sales: SalesModule): Observable<SalesModule> {

    return this.httpClient.post<SalesModule>(this.baseUrl, sales);
  }

  deleteSales(id: string): Observable<any> {

    return this.httpClient.delete(this.baseUrl + id);
  }

  // updateSales(sale: SalesModule): Observable<SalesModule> {
  //   return this.httpClient.put<SalesModule>(`${this.baseUrl}${sale.id}`, sale);
  // }

  updateProductStock(productId: string, quantity: number): Observable<ProductModule> {
    return this.httpClient.patch<ProductModule>(`${this.baseUrl}/products/${productId}/reduceStock`, { quantity });
  }

  updateSales(id: string, sale: SalesModule): Observable<SalesModule> {
    return this.httpClient.put<SalesModule>(this.baseUrl+id, sale);
  }

  getSalesById(saleId: string): Observable<SalesModule> {
    
    return this.httpClient.get<SalesModule>(`${this.baseUrl}${saleId}`);
  }


}

