import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { LocationService } from '../../../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrl: './viewhotel.component.css'
})
export class ViewhotelComponent implements OnInit{

  locations: any;
  hotels: any;
  rooms:any;

  constructor(
    private hotelService: HotelService,
    private locationService: LocationService,
   
    private router: Router

  ) { }

  ngOnInit(): void {

    this.loadLocations();
  }


  loadLocations() {

    this.locations = this.locationService.getAllLocation();
    this.hotelService.getAllHotel().subscribe({

      next: res => {
        this.hotels = res;
      },

      error: err => {
        console.log(err)

      }

    });


  }

 


  viewRooms(hotelId: string): void {
    // Navigate to the RoomListComponent with the hotel ID
    this.router.navigate(['/room', hotelId]);
  }



}
