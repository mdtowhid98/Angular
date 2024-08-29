import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SalesModel } from '../model/sales.model';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl: string = "http://localhost:3000/sales/"
  constructor(private httpClient: HttpClient) { }


  viewAllSales(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getAllSalesForSalesProduct(): Observable<SalesModel[]> {

    return this.httpClient.get<SalesModel[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      )

  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));

  }

  createSales(sales: SalesModel): Observable<SalesModel> {

    return this.httpClient.post<SalesModel>(this.baseUrl, sales);
  }

  deleteSales(id: string): Observable<any> {

    return this.httpClient.delete(this.baseUrl + id);
  }

  updateSales(sale: SalesModel): Observable<SalesModel> {
    return this.httpClient.put<SalesModel>(`${this.baseUrl}${sale.id}`, sale);
  }

  getSalesById(saleId: string): Observable<SalesModel> {
    // const url = `${this.baseUrl}/${studentId}`;
    return this.httpClient.get<SalesModel>(`${this.baseUrl}${saleId}`);
  }


}
