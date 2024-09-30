




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SalesModule } from '../module/sales/sales.module';
import { ProductModule } from '../module/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl: string = "http://localhost:8087/api/sales/";

  constructor(private httpClient: HttpClient) { }

  getAllSales(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
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

    return this.httpClient.post<SalesModule>(this.baseUrl+"dhanmondi", sales);
  }

  createSalesBonaniBranch(sales: SalesModule): Observable<SalesModule> {

    return this.httpClient.post<SalesModule>(this.baseUrl+"banani", sales);
  }

  createSalesGulshanBranch(sales: SalesModule): Observable<SalesModule> {

    return this.httpClient.post<SalesModule>(this.baseUrl+"gulshan", sales);
  }


  deleteSales(id: number): Observable<any> {

    return this.httpClient.delete(this.baseUrl+ "delete/"+ id);
  }

 
  updateProductStock(productId: number, quantity: number): Observable<ProductModule> {
    return this.httpClient.patch<ProductModule>(`${this.baseUrl}/products/${productId}/reduceStock`, { quantity });
  }

  updateSales(id: number, sale: SalesModule): Observable<SalesModule> {
    return this.httpClient.put<SalesModule>(this.baseUrl+id, sale);
  }

  getSalesById(saleId: number): Observable<SalesModule> {
    
    return this.httpClient.get<SalesModule>(`${this.baseUrl}${saleId}`);
  }


}

