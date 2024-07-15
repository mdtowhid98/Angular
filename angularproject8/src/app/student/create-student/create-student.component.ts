import { Component, OnInit } from '@angular/core';
import { studentModel } from '../student.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../location.service';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Location } from '../../location/location.model';
import { error } from 'console';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit {


  locations: Location[] = [];
  students: studentModel[] = [];
  studentForm!: FormGroup;
  student: studentModel = new studentModel();

  constructor(private locationService: LocationService,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadLocation();

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

    this.studentForm.get('location')?.get('name')?.valueChanges
      .subscribe(name => {

        const selectedLocation = this.locations.find(loc => loc.name === name);

        if (selectedLocation) {
          this.studentForm.patchValue({ location: selectedLocation });

        }

      });


  }

  loadLocation() {
    this.locationService.getAllLocationForStudent()
      .subscribe({
        next: res => {
          this.locations = res;
        },
        error: error => {
          console.log(error);

        }
      })

  }



  createStudent() {

    this.student.name = this.studentForm.value.name;
    this.student.email = this.studentForm.value.email;
    this.student.cellNo = this.studentForm.value.cellNo;
    this.student.location = this.studentForm.value.location;

    this.studentService.createStudent(this.student)
      .subscribe({

        next: res => {
          this.loadLocation();
          this.studentForm.reset();
          this.router.navigate(['student']);
        },
        error: error => {
          console.log(error);
        }

      });
  }

}
