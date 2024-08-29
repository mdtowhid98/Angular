import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LocationserviceService } from '../../location/locationservice.service';
import { Router } from '@angular/router';
import { StudentModel } from '../student.model';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit {
  students: any;
  locations: any;
  constructor(private Studentservice: StudentService,
    private locationService: LocationserviceService,
    private router: Router

  ) {


  }


  ngOnInit(): void {

    this.locations = this.locationService.getAllLocationforStudent();

    this.students = this.Studentservice.viewAllStudent();
  }

  deleteStudents(id: string) {
    this.Studentservice.deleteStudents(id)
      .subscribe({

        next: rs => {
          this.students = this.Studentservice.viewAllStudent();
          this.router.navigate(['/students']);
        },
        error: error => {

          console.log(error);
        }

      });

  }
  editStudent(student: StudentModel): void {
    // Navigate to the edit student component with the student's ID
    this.router.navigate(['/updatestudent', student.id]);
  }

}
