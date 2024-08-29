import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location/location.service';
import { Router } from '@angular/router';
import { Location } from '../location/location.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrl: './create-location.component.css'
})
export class CreateLocationComponent implements OnInit{

  location:Location=new Location();

  formValue !:FormGroup;
  locationData:any;

  constructor(private httpClient:HttpClient,
    private locationService:LocationService,
    private router:Router,
    private formBuilder:FormBuilder
    
    ){}
  ngOnInit(): void {
    
    this.formValue=this.formBuilder.group({

      name:[''],
      city:[''],
      state:[''],
      photo:[''],
      availableUnits:[''],
      wifi:[''],
      laundry:[''],

    });
  }

    createLocation(){
this.location.name=this.formValue.value.name;
this.location.city=this.formValue.value.city;
this.location.state=this.formValue.value.state;
this.location.photo=this.formValue.value.photo;
this.location.availableUnits=this.formValue.value.availableUnits;
this.location.wifi=this.formValue.value.wifi;
this.location.laundry=this.formValue.value.laundry;


this.locationService.createLocation(this.location)
.subscribe({
next:res=>{

  console.log(res);
  this.formValue.reset();
  this.router.navigate(['/location']);


},
error:error=>{

  console.log(error);
}

})

    }

}
