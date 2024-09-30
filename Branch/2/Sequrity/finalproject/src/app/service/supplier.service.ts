import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { SupplierModule } from '../module/supplier/supplier.module';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl:string="http://localhost:8087/api/supplier/"

  constructor(private httpClient:HttpClient) { }

  getAllSupplier(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }
 

  getAllSupplierForProduct():Observable<SupplierModule[]>{
    return this.httpClient.get<SupplierModule[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )
  
  }
 
  private handleError(error:any){
  console.error('An error occurred:',error);
  return throwError(()=>new Error('test'));
  
  }

  createSupplier(supplier:SupplierModule):Observable<any>{

    return this.httpClient.post(this.baseUrl+"save",supplier);
   }


   deleteSupplier(id: number): Observable<any> {

    return this.httpClient.delete(this.baseUrl+ "delete/"+ id);
  }

  updateSupplier(id: number, supplier: SupplierModule): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + "update/" + id, supplier); 
  }



  getById(id: number): Observable<any> {

    return this.httpClient.get(this.baseUrl + id);
  }
   
}

