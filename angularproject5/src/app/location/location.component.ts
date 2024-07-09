import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocationserviceService } from './locationservice.service';

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

}
