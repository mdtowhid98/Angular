import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LocationserviceService } from '../../location/locationservice.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit{
students:any;
locations:any
constructor(private service:StudentService
  
  ){


}


  ngOnInit(): void {
    // this.locations=LocationserviceService
    
    this.students=this.service.viewAllStudent();
  }

}
