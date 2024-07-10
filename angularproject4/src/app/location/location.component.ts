import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit{

  loacations:any;


constructor(private locationservice:LocationService,private router:Router,
  private httpClient:HttpClient
){



}
  ngOnInit(): void {
    
    this.loacations=this.locationservice.getAllLocation();

  }

  deleteLocation(id:string){
this.locationservice.deleteLocation(id)
.subscribe({

  next: res=>{
this.loacations=this.locationservice.getAllLocation();
this.router.navigate(['/location']);

  },
  error:error=>{
console.log(error);

  }

});

  }



}
