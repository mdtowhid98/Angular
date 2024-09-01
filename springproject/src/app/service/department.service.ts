import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { departmentModel } from '../model/departmentModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseUrl: string = "http://localhost:8087/api/department/"

  constructor(private httpClient: HttpClient) { }

  getAllDepartment(): Observable<any> {

    return this.httpClient.get(this.baseUrl);

  }

  getAllDepartmentForStudent():Observable<departmentModel[]>{

    return this.httpClient.get<departmentModel[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )

  }

  private handleError(error:any){
console.error('An error occurred:',error);
return throwError(()=>new Error('test'));

  }

  createDepartment(department:departmentModel):Observable<departmentModel>{

    return this.httpClient.post<departmentModel>(this.baseUrl+"save",department);
  }

}
