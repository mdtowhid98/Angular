import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8081/api/v1/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl + 'products')
      .pipe(tap((products) => console.log('Products::: ', products)));
  }

  getProduct(id: number): Observable<Product> {
    let header = new HttpHeaders();
    return this.http.get<Product>(this.apiUrl + 'products/' + id, {
      headers: header,
    });
  }

  addProduct(product: Product): Observable<Product> {
    http: return this.http.post<Product>(this.apiUrl + 'products/', product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(
      this.apiUrl + 'products/' + id + '/',
      product
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.apiUrl + 'products/' + id);
  }
}
