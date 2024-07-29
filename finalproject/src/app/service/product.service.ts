import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProductModule } from '../module/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3000/products";
  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<any> {

    return this.httpClient.get(this.baseUrl);
  }

  getAllProductForSales():Observable<ProductModule[]>{

    return this.httpClient.get<ProductModule[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )
  
  }
 
  private handleError(error:any){
  console.error('An error occurred:',error);
  return throwError(()=>new Error('test'));
  
  }
  
  createProduct(product: ProductModule): Observable<any> {
  
    return this.httpClient.post(this.baseUrl, product);
  }
  
  // updateProductStock(product: ProductModule): Observable<any> {
  //   return this.httpClient.put(`${this.baseUrl}/update/${product.id}`, product);
  // }
  
  // getProductByName(name: string): Observable<ProductModule> {
  //   return this.httpClient.get<ProductModule>(`${this.baseUrl}/name/${name}`);
  // }
  
  updateProducts(product: ProductModule): Observable<ProductModule> {
    return this.httpClient.put<ProductModule>(`${this.baseUrl}/${product.id}`, product);
  }
  
  deleteProduct(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }
  
  updateProduct(id: string, product: ProductModule): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/' + id, product);
  
  }
  
  getById(id: string): Observable<any> {
  
    return this.httpClient.get(this.baseUrl + "/" + id);
  }
  
  }
  
