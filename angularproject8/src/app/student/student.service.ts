import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  baseUrl:string="http://localhost:3000/students/";

  constructor(private http:HttpClient) { }

  viewAllStudent():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  createStudent(students:studentModel):Observable<studentModel>{

    return this.http.post<studentModel>(this.baseUrl,students);
  }

  deleteStudent(id:string):Observable<any>{

    return this.http.delete(this.baseUrl+id);
  }

  updateStudent(student:studentModel):Observable<studentModel>{
    return this.http.post<studentModel>(this.baseUrl,student);

  }

  getStudentById(studentId:string):Observable<studentModel>{
    return this.http.get<studentModel>('${this.baseUrl}${studentId}');
  }

}
