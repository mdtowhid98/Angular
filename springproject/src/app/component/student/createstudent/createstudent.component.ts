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
export class CreatestudentComponent implements OnInit{

  departments: departmentModel[] = [];
  students: StudentModel=new StudentModel();
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
      department: this.formBuilder.group({

        id: [''],
        name: [''],
        

      })


    });

    this.studentForm.get('department')?.get('name')?.valueChanges
      .subscribe(name => {

        const selectedDepartment = this.departments.find(loc => loc.name === name);

        if (selectedDepartment) {
          this.studentForm.patchValue({ department: selectedDepartment });

        }

      });


  }


createStudent(){
  const studentData:StudentModel={
    ...this.studentForm.value,
    department:{id:this.studentForm.value.depaerment}
  };

  console.log(studentData);

  this.studentService.createStudent(studentData)
  .subscribe({
    next:res=>{
      this.students=res;
      this.studentForm.reset();
      this.router.navigate(['viewstudent']);
    },
    error:error=>{
      console.log("Student not created");
      console.log(error);
    }
  })


}
  

  loadDepartment() {
    // this.departmentService.getAllDepartmentForStudent()
    //   .subscribe({
    //     next: res => {
    //       this.departments = res;
    //     },
    //     error: error => {
    //       console.log(error);

    //     }
    //   })

    dpartments:this.departmentService.getAllDepartment().subscribe({
      next:(data)=>{
        this.departments=data;
      },
      error:(error)=>console.error('Erroe Loding data',error)
        
      
    });

  }



  // createStudent() {

  //   this.student.name = this.studentForm.value.name;
  //   this.student.email = this.studentForm.value.email;
  //   this.student.cell = this.studentForm.value.cell;
  //   this.student.gender = this.studentForm.value.gender;
  //   this.student.dob = this.studentForm.value.dob;
  //   this.student.department = this.studentForm.value.department;

  //   this.studentService.createStudent(this.student)
  //     .subscribe({

  //       next: res => {
  //         this.loadDepartment();
  //         this.studentForm.reset();
  //         this.router.navigate(['viewStudent']);
  //       },
  //       error: error => {
  //         console.log(error);
  //       }

  //     });
  // }

}
