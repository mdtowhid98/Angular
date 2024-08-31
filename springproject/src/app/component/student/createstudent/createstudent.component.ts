// import { Component, OnInit } from '@angular/core';
// import { departmentModel } from '../../../model/departmentModel';
// import { StudentModel } from '../../../model/studentModel';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { StudentService } from '../../../service/student.service';
// import { DepartmentService } from '../../../service/department.service';
// import { Router } from '@angular/router';
// import { error } from 'console';

// @Component({
//   selector: 'app-createstudent',
//   templateUrl: './createstudent.component.html',
//   styleUrl: './createstudent.component.css'
// })
// export class CreatestudentComponent implements OnInit{

// departments:departmentModel[]=[];
// students:StudentModel=new StudentModel();

// formGroup!:FormGroup;


// constructor(
//   private studentService: StudentService,
//     private departmentService: DepartmentService,
//     private router: Router,
//     private formBuilder:FormBuilder
// ){}

//   ngOnInit(): void {
//     this.loadDepartments();
//   }




//   loadDepartments(){
//     departments:this.departmentService.getAllDepartment().subscribe({

//       next:(data)=>{
//         this.departments=data.departments;
//       },
//       error:(error)=>console.error('Error',error)



//     });
//   }


//   createStudent(){
//    const studentData:StudentModel={
//       ...this.formGroup.value,
//       department:{id:this.formGroup.value.depaerment}
//     };


// console.log(studentData);

// this.studentService.cr


//   }





// }
