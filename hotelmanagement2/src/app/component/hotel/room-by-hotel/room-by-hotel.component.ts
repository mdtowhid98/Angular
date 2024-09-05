import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../../service/room.service';
import { HotelService } from '../../../service/hotel.service';

@Component({
  selector: 'app-room-by-hotel',
  templateUrl: './room-by-hotel.component.html',
  styleUrl: './room-by-hotel.component.css'
})
export class RoomByHotelComponent implements OnInit{

  hotelId: string;
  hotel: any;   
  rooms: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private hotelService: HotelService
  ) {
    this.hotelId = this.route.snapshot.paramMap.get('hotelId') || '';  // Get hotel ID from route parameters
  }


  ngOnInit(): void {
    if (this.hotelId) {
      this.getHotelDetails(this.hotelId);
      this.getRoomsByHotel(this.hotelId);
    }
  }

   // Fetch hotel details using HotelService
   getHotelDetails(hotelId: string): void {
    this.hotelService.getHotelById(hotelId).subscribe({
      next: res => {
        this.hotel = res;
        console.log('Hotel details loaded:', this.hotel);
      },
      error: err => {
        console.error('Error loading hotel details', err);
      }
    });
  }

   // Fetch rooms by hotel ID using RoomService
   getRoomsByHotel(hotelId: string): void {
    this.roomService.getRoomByHotel(hotelId).subscribe({
      next: res => {
        this.rooms = res;
        console.log('Rooms loaded:', this.rooms);
      },
      error: err => {
        console.error('Error loading rooms', err);
      }
    });
  }



}
