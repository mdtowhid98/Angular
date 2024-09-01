import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../service/student.service';
import { DepartmentService } from '../../../service/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit{

  // students: any;

  // constructor(private studentService: StudentService,
  //   private departmentService: DepartmentService,
  //   private router: Router
  // ) { }



  // ngOnInit(): void {
  //   this.loadAllStudent();
  // }

  // loadAllStudent() {

  //   this.studentService.getAllStudent().subscribe({

  //     next: res => {
  //       this.students = res;

  //     },
  //     error: error => {
  //       console.log(error);
  //     }


  //   });

  // }


  students:any;
departments:any;



constructor(private departmentService:DepartmentService,
  private studentService:StudentService,
  private router:Router
){}

ngOnInit(): void {
  this.departments = this.departmentService.getAllDepartmentForStudent();
  this.students = this.studentService.getAllStudent();
}




}
