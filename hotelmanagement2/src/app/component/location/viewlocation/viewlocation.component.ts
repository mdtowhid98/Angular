import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../service/location.service';

@Component({
  selector: 'app-viewlocation',
  templateUrl: './viewlocation.component.html',
  styleUrl: './viewlocation.component.css'
})
export class ViewlocationComponent implements OnInit{

locations:any;

constructor(private locationService:LocationService){}





  ngOnInit(): void {
    this.locations=this.locationService.getAllLocation();
  }

}
