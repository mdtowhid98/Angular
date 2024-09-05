import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../../model/location.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../../service/location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrl: './createlocation.component.css'
})
export class CreatelocationComponent implements OnInit{

  location: LocationModel = new LocationModel();
  formValue!: FormGroup;
  locationData: any;



  constructor(
    private locationService: LocationService,
    private router: Router,
    
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      image: [''],
    });
  }

  createlocation() {
    this.location.name = this.formValue.value.name;
    this.location.image = this.formValue.value.image;  // Add this line
  
    this.locationService.createLocation(this.location)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewlocation']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
}
