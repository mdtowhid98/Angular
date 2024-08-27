import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ProductModule } from '../module/product/product.module';
import { CategoryModule } from '../module/category/category.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3000/products";

  categoriesUrl: string = "http://localhost:3000/category"; 

  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<ProductModule[]> {
    return this.httpClient.get<ProductModule[]>(this.baseUrl).pipe(
      map(products => 
        products.map(product => ({
          ...product,
          category: Array.isArray(product.categories) ? product.categories : [product.categories]
        }))
      )
    );
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
  
  
  
  updateProducts(product: ProductModule): Observable<ProductModule> {
    return this.httpClient.put<ProductModule>(`${this.baseUrl}/${product.id}`, product);
  }
  
  deleteProduct(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }
  
  updateProduct(id: string, product: ProductModule): Observable<any> {
    return this.httpClient.put(this.baseUrl + '/' + id, product);
  
  }
  
  
  getById(id: string): Observable<any> {
  
    return this.httpClient.get(this.baseUrl + "/" + id);
  }

 getCategories(): Observable<CategoryModule[]> {
  return this.httpClient.get<CategoryModule[]>(this.categoriesUrl);
}
  
  
  }
  
