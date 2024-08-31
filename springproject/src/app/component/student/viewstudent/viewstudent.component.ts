import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../service/student.service';
import { DepartmentService } from '../../../service/department.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit {

  students: any;

  constructor(private studentService: StudentService,
    private departmentService: DepartmentService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.loadAllStudent();
  }

  loadAllStudent() {

    this.studentService.getAllStudent().subscribe({

      next: res => {
        this.students = res;

      },
      error: error => {
        console.log(error);
      }


    });

  }



}
