import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BranchModule } from '../module/branch/branch.module';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  baseUrl:string="http://localhost:8087/api/branch/"

  constructor(private httpClient:HttpClient) { }

  getAllBranch(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }
 

  // getAllCategoryForProduct():Observable<CategoryModule[]>{
  //   return this.httpClient.get<CategoryModule[]>(this.baseUrl)
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  
  // }
 
  // private handleError(error:any){
  // console.error('An error occurred:',error);
  // return throwError(()=>new Error('test'));
  
  // }

  createBranch(branch:BranchModule):Observable<any>{

    return this.httpClient.post(this.baseUrl+"save",branch);
   }


   deleteBranch(id: number): Observable<any> {

    return this.httpClient.delete(this.baseUrl+ "delete/"+ id);
  }

  updateBranches(id: number, branch: BranchModule): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + "update/" + id, branch); 
  }



  getById(id: number): Observable<any> {

    return this.httpClient.get(this.baseUrl + id);
  }
  
}
