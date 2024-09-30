import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ProductModule } from '../module/product/product.module';
import { CategoryModule } from '../module/category/category.module';
import { ApiResponse } from '../guard/api.response.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'http://localhost:8087/api/product/';

 

  constructor(private httpClient: HttpClient,
    private authService: AuthService 
  ) { }

    // Get Bearer token
    private getAuthHeaders(): HttpHeaders {
      const token = this.authService.getToken();
      console.log(token);
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
    }

  // getProduct(): Observable<ProductModule[]> {
  //   return this.httpClient.get<ProductModule[]>(this.baseUrl+"h/searchproduct").pipe(
  //     map(products => 
  //       products.map(product => ({
  //         ...product,
  //         category: Array.isArray(product.categories) ? product.categories : [product.categories]
  //       }))
  //     )
  //   );
  // }


  findProductByCategoryName(categoryName: string): Observable<ProductModule[]> {
    const params = new HttpParams().set('categoryName', categoryName);
    return this.httpClient.get<ProductModule[]>(`${this.baseUrl}h/searchproduct`, { params });
  }

  findProductByName(name: string): Observable<ProductModule[]> {
    const params = new HttpParams().set('name', name);
    return this.httpClient.get<ProductModule[]>(`${this.baseUrl}h/searchproductname`, { params });
  }

  findProductByBranchName(branchName: string): Observable<ProductModule[]> {
    const params = new HttpParams().set('branchName', branchName);
    return this.httpClient.get<ProductModule[]>(`${this.baseUrl}h/searchbranchname`, { params });
  }

  getAllProducts(): Observable<ProductModule[]> {
    return this.httpClient.get<ProductModule[]>(this.baseUrl);
  }

  getAllDhanmondiBrancesProduct(): Observable<ProductModule[]> {
    return this.httpClient.get<ProductModule[]>(this.baseUrl+"dhanmondi");
  }


  getAllBonaniBrancesProduct(): Observable<ProductModule[]> {
    return this.httpClient.get<ProductModule[]>(this.baseUrl+"banani");
  }

  getAllGulshanBrancesProduct(): Observable<ProductModule[]> {
    return this.httpClient.get<ProductModule[]>(this.baseUrl+"gulshan");
  }

  getAllProductForSales():Observable<ProductModule[]>{

    return this.httpClient.get<ProductModule[]>(this.baseUrl);
   
  
  }
 
  private handleError(error:any){
  console.error('An error occurred:',error);
  return throwError(()=>new Error('test'));
  
  }
  
  createProduct(product: ProductModule, image: File): Observable<ProductModule> {
    const formData = new FormData();
    formData.append('product', new Blob([JSON.stringify(product)], { type: 'application/json' }));
    formData.append('image', image);

    const token = this.authService.getToken();
    console.log('Token:', token); // Verify token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
      // 'Content-Type' is not needed here
    });

console.log(headers);
    return this.httpClient.post<ProductModule>(`${this.baseUrl}save`, formData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProductStock(productName: string, updatedStock: number): Observable<any> {
    return this.httpClient.patch(`${this.baseUrl}${productName}/stock/+id`, { stock: updatedStock });
  }
  
  
  updateProducts(product: ProductModule): Observable<ProductModule> {
    return this.httpClient.put<ProductModule>(`${this.baseUrl}"update/"${product.id}`, product);
  }
  
  deleteProduct(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.delete(this.baseUrl+ "delete/"+ id,{ headers });
  }
  
  // updateProduct(id: number, formData: FormData): Observable<ProductModule> {
  //   return this.httpClient.put<ProductModule>(`${this.baseUrl}update/${id}`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });
  // }

 updateProduct(id: number, product: ProductModule, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('product', new Blob([JSON.stringify(product)], { type: 'application/json' }));
    formData.append('image', image);
    console.log('FormData:', formData); // Debug line to inspect FormData
    return this.httpClient.put<any>(`${this.baseUrl}update/${id}`, formData);
}

  
  getById(id: number): Observable<ProductModule> {
    return this.httpClient.get<ProductModule>(`${this.baseUrl}${id}`);
  }

  // getProductById(productId: number): Observable<any> {
  //   const headers = this.getAuthHeaders();
  //   return this.httpClient.get<any>(`${this.baseUrl}${productId}`, { headers })
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }


  
  }
  
