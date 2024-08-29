import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '../../location/location.model';
import { studentModel } from '../student.model';
import { LocationService } from '../../location.service';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit {

  studentForm!: FormGroup;
  studentId: string = "";
  locations: Location[] = [];
  student: studentModel = new studentModel();

  constructor(private locationService: LocationService,
    private studentService: StudentService,
    private fromBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    console.log(this.studentId);

    this.studentForm = this.fromBuilder.group({

      name: [''],
      email: [''],
      cellNo: [''],
      location: this.fromBuilder.group({
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

    this.loadStudentDetails();
    this.loadLocation();
  }

  loadLocation(): void {

    this.locationService.getAllLocationForStudent()
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
        next: (student: studentModel) => {
          this.student=student;
          this.studentForm.patchValue({

            name:student.name,
            email:student.email,
            cellNo:student.cellNo,
            location:student.location
            
          });
        },
        error:error=>{
          console.log(error);
        }

      });
  }

  updateStudent():void{
    const updateStudent:studentModel={

      ...this.student,
      ...this.studentForm.value
    };

    this.studentService.updateStudent(updateStudent)
    .subscribe({
      next:res=>{

        console.log('student update successfully:',res);
        this.router.navigate(['student']);
      },
      error:error=>{

        console.log('Error updating student:',error);
      }

    });

  }

}
