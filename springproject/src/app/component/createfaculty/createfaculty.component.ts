import { Component, OnInit } from '@angular/core';
import { facultyModel } from '../../model/facultyModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacultyService } from '../../service/faculty.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createfaculty',
  templateUrl: './createfaculty.component.html',
  styleUrl: './createfaculty.component.css'
})
export class CreatefacultyComponent implements OnInit{

  faculty: facultyModel = new facultyModel();
  formValue!: FormGroup;
  facultyData: any;

  constructor(
    private facultyService: FacultyService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      totalSeat: [''],
    });
  }

  createFaculty() {
    this.faculty.name = this.formValue.value.name;
    this.faculty.totalSeat = this.formValue.value.totalSeat;  // Add this line
  
    this.facultyService.createFaculty(this.faculty)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewFaculty']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
}