import { Component } from '@angular/core';
import { FacultyService } from '../../../service/faculty.service';
import { DepartmentService } from '../../../service/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrl: './viewdepartment.component.css'
})
export class ViewdepartmentComponent {

  departments:any;
  faculties:any;
  
  
  
  constructor(private facultyService:FacultyService,
    private departmentService:DepartmentService,
    private router:Router
  ){}
  
    ngOnInit(): void {
      this.faculties=this.facultyService.getFacultyForDepartment();
      this.departments=this.departmentService.getAllDepartment();
    }


}
