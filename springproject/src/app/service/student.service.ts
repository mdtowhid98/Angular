import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { StudentModel } from '../model/studentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "localhost:8087/api/student/"


  constructor(private httpClient: HttpClient) { }


  getAllStudent(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createStudent(student:StudentModel):Observable<StudentModel>{
    return this.httpClient.post<StudentModel>(this.baseUrl+"save",student);
  }

  private handleError(erorr:any){
    console.log(erorr);
    return throwError(()=>new Error('test'));
  }


  

}
