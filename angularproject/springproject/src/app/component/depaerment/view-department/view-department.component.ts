import { Component, OnInit } from '@angular/core';
import { facultyModel } from '../../../model/facultyModel';
import { departmentModel } from '../../../model/departmentModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacultyService } from '../../../service/faculty.service';
import { DepartmentService } from '../../../service/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrl: './view-department.component.css'
})
export class ViewDepartmentComponent implements OnInit{

  departments:any;
faculties:any;



constructor(private facultiesService:FacultyService,
  private departmentsService:DepartmentService,
  private router:Router
){}

  ngOnInit(): void {
    this.faculties=this.facultiesService.getFacultyForDepartment();
    this.departments=this.departmentsService.getAllDepartment();
  }
}