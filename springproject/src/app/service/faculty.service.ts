import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { facultyModel } from '../model/facultyModel';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  baseUrl:string="http://localhost:8087/api/faculty/"

  constructor(private httpClient:HttpClient) { }

  getAllFaculty():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  
  getFacultyForDepartment():Observable<facultyModel[]>{

    return this.httpClient.get<facultyModel[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )

  }

  private handleError(error:any){
console.error('An error occurred:',error);
return throwError(()=>new Error('test'));

  }

  createFaculty(faculty:facultyModel):Observable<facultyModel>{

    return this.httpClient.post<facultyModel>(this.baseUrl+"save",faculty);
   }

  //  deleteFaculty(id:number):Observable<any>{

  //   return this.httpClient.delete(this.baseUrl+"delete"+id);
  // }

  // updateFaculty(id:number,faculty:facultyModel):Observable<any>{

  //   return this.httpClient.put(this.baseUrl+"update"+id,faculty);
  // }

  // getFacultyById(id:number):Observable<any>{

  //   return this.httpClient.get(this.baseUrl+id);
  // }
}
