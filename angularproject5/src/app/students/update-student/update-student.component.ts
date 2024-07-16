import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '../../location/location.model';
import { StudentModel } from '../student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationserviceService } from '../../location/locationservice.service';
import { StudentService } from '../student.service';
import { error } from 'console';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit {

  studentForm!: FormGroup;
  locations: Location[] = [];
  studentId: string = "";
  student: StudentModel = new StudentModel();

  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationserviceService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
   

    this.studentId= this.route.snapshot.params['id'];


   console.log(this.studentId);

   this.studentForm = this.formBuilder.group({
     name: [''],
     email: [''],
     cellNo: [''],
     location: this.formBuilder.group({
       id: [undefined],
       name: [undefined],
       city: [undefined],
       state: [undefined],
       photo: [undefined],
       availableUnits: [undefined],
       wifi: [undefined],
       laundry: [undefined]
     })
   });

   this.loadLocation();
   this.loadStudentDetails();
 }

  loadLocation(): void {

    this.locationService.getAllLocationforStudent()
      .subscribe({

        next: (res: Location[]) => {
          this.locations = res;
        },
        error: error => {

          console.log(error);
        }
      });
  }

  loadStudentDetails(): void {

    this.studentService.getStudentById(this.studentId)
      .subscribe({
        next: (student: StudentModel) => {
          this.student = student;
          this.studentForm.patchValue({

            name: student.name,
            email: student.email,
            cellNo: student.cellNo,
            location: student.location

          });


        },

        error: error => {
          console.log(error);
        }

      });




  }

  updateStudent():void{

    const updatedStudent:StudentModel={

      ...this.student,
      ...this.  studentForm.value

    };

    this.studentService.updateStudent(updatedStudent)
    .subscribe({
      next:res=>{
        console.log('Student updated successfully:', res);
        this.router.navigate(['students']);
      },
      error:error=>{

        console.log('Error updating student:', error);

      }

    })

  }

}
