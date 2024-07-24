import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';
import { studentModel } from '../../model/student.model';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit{

  students:any;
locations:any;



constructor(private locationService:LocationService,
  private studentService:StudentService,
  private router:Router
){}

  ngOnInit(): void {
    this.locations=this.locationService.getAllLocationForStudent();
    this.students=this.studentService.viewAllStudent();
  }

  deleteStudent(id:string){

    this.studentService.deleteStudent(id)
    .subscribe({
      next:res=>{
        this.students=this.studentService.viewAllStudent();
        this.router.navigate(['/viewstudent'])
      },
      error:error=>{
        console.log(error);
      }

    });
  }

  editStudent(student: studentModel): void {
    
    this.router.navigate(['/updateStudent', student.id]);
  }

}
