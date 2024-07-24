import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getAllProductForSales():Observable<ProductModel[]>{

    return this.httpClient.get<ProductModel[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )

  }

  private handleError(error:any){
console.error('An error occurred:',error);
return throwError(()=>new Error('test'));

  }

  createProduct(product: ProductModel): Observable<any> {

    return this.httpClient.post(this.baseUrl, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  updateProduct(id: string, product: ProductModel): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/' + id, product);

  }

  getById(id: string): Observable<any> {

    return this.httpClient.get(this.baseUrl + "/" + id);
  }
}
