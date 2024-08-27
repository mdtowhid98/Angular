import { Component, OnInit } from '@angular/core';
import { facultyModel } from '../../../model/facultyModel';
import { departmentModel } from '../../../model/departmentModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacultyService } from '../../../service/faculty.service';
import { DepartmentService } from '../../../service/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrl: './createdepartment.component.css'
})
export class CreatedepartmentComponent implements OnInit{

  faculties: facultyModel[] = [];
  departments: departmentModel[] = [];
  departmentForm!: FormGroup;
  department: departmentModel = new departmentModel();

  constructor(private facultyService: FacultyService,
    private departmentService: DepartmentService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadFaculty();

    this.departmentForm = this.formBuilder.group({

      name: [''],
      
      faculty: this.formBuilder.group({

        id: [undefined],
        name: [undefined],
        totalSeat: [undefined],
       

      })


    });

    this.departmentForm.get('faculty')?.get('name')?.valueChanges
      .subscribe(name => {

        const selectedLocation = this.faculties.find(loc => loc.name === name);

        if (selectedLocation) {
          this.departmentForm.patchValue({ location: selectedLocation });

        }

      });


  }

  loadFaculty() {
    this.facultyService.getAllLocationForStudent()
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
