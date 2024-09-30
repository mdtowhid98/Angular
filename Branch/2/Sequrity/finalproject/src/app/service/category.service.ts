import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoryModule } from '../module/category/category.module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string="http://localhost:8087/api/category/"

  constructor(private httpClient:HttpClient) { }

  getAllCategory(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }
 

  getAllCategoryForProduct():Observable<CategoryModule[]>{
    return this.httpClient.get<CategoryModule[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )
  
  }
 
  private handleError(error:any){
  console.error('An error occurred:',error);
  return throwError(()=>new Error('test'));
  
  }

  createCategory(category:CategoryModule):Observable<any>{

    return this.httpClient.post(this.baseUrl+"save",category);
   }


   deleteCategory(id: number): Observable<any> {

    return this.httpClient.delete(this.baseUrl+ "delete/"+ id);
  }

  updateCategories(id: number, category: CategoryModule): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + "update/" + id, category); 
  }



  getById(id: number): Observable<any> {

    return this.httpClient.get(this.baseUrl + id);
  }
   
}
