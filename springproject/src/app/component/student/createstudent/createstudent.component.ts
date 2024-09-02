import { Component, OnInit } from '@angular/core';
import { departmentModel } from '../../../model/departmentModel';
import { StudentModel } from '../../../model/studentModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { StudentService } from '../../../service/student.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrl: './createstudent.component.css'
})
export class CreatestudentComponent implements OnInit {

  departments: departmentModel[] = [];
  students: StudentModel = new StudentModel();
  studentForm!: FormGroup;
  // student: StudentModel = new StudentModel();

  constructor(private departmentService: DepartmentService,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loadDepartment();

    this.studentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      cell: [''],
      gender: [''],
      dob: [''],
      department: [null, '']
    });


  }


  createStudent() {
    const studentData: StudentModel = {
      ...this.studentForm.value,
      department: { id: this.studentForm.value.department }
      
    };

    console.log(studentData);

    this.studentService.createStudent(studentData)
      .subscribe({

        next: res => {

          this.students = res;
          this.loadDepartment();

          this.studentForm.reset();
          this.router.navigate(['/student']);

        },

        error: err => {
          console.log("Student  not Created");
          console.log(err);

        }

      });


  }


  loadDepartment() {


    dpartments: this.departmentService.getAllDepartment().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (error) => console.error('Erroe Loding data', error)


    });

  }





}
