import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../service/faculty.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrl: './viewfaculty.component.css'
})
export class ViewfacultyComponent implements OnInit{


  faculties:any;

constructor(private facultyService:FacultyService,
  private router:Router,
  private httpClient:HttpClient
){}




  ngOnInit(): void {
    this.faculties=this.facultyService.getAllFaculty();
  }

 
}
