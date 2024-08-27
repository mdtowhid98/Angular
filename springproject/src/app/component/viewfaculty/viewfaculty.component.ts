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

  deleteFaculty(id:number){
    this.facultyService.deleteFaculty(id)
    .subscribe({
    next:res=>{
      this.faculties=this.facultyService.getAllFaculty();
      this.router.navigate(['viewFaculty']);
    },
    error:error=>{
    
      console.log(error);
    }
    
    });
    
      }
    
      updateFaculty(id:number){
    
        this.router.navigate(['/updateFaculty',id]);
      }
}
