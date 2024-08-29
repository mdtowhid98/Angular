import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoryModule } from '../module/category/category.module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string="http://localhost:3000/category/"

  constructor(private httpClient:HttpClient) { }

  getAllCategory(): Observable<CategoryModule[]> {
    return this.httpClient.get<CategoryModule[]>(this.baseUrl);
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

    return this.httpClient.post(this.baseUrl,category);
   }

   
}
