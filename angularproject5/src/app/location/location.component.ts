import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocationserviceService } from './locationservice.service';
import { error } from 'console';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit{

  locations:any;

  constructor(private locationService:LocationserviceService,
    private router:Router,private httpClient:HttpClient){



  }
  ngOnInit(): void {
   this.locations=this.locationService.getAllLocation();
  }

deleteLocation(id:string){

  this.locationService.deleteLocation(id)
  .subscribe({
next:res=>{

  this.locations=this.locationService.getAllLocation();
  this.router.navigate(['/location']);
},
error:error=>{

  console.log(error);
}

  })
}

updateLocation(id:string){

this.router.navigate(['updateLocation',id]);
}

}
