import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentModel } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string="http://localhost:3000/students/";
  constructor(private httpClient:HttpClient) { }

viewAllStudent():Observable<any>{
  return this.httpClient.get(this.baseUrl);
}

createStudent(students:studentModel):Observable<studentModel>{

  return this.httpClient.post<studentModel>(this.baseUrl,students);
}

deleteStudent(id:string):Observable<any>{

  return this.httpClient.delete(this.baseUrl+id);
}

updateStudent(student: studentModel): Observable<studentModel> {
  return this.httpClient.put<studentModel>(`${this.baseUrl}${student.id}`, student);
}

getStudentById(studentId: string): Observable<studentModel> {
  // const url = `${this.baseUrl}/${studentId}`;
  return this.httpClient.get<studentModel>(`${this.baseUrl}${studentId}`);
}

}
