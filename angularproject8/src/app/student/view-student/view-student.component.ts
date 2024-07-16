import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../location.service';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { error } from 'console';
import { studentModel } from '../student.model';

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
        this.router.navigate(['/student'])
      },
      error:error=>{
        console.log(error);
      }

    });
  }

  editStudent(student: studentModel): void {
    
    this.router.navigate(['/updatestudent', student.id]);
  }

}
