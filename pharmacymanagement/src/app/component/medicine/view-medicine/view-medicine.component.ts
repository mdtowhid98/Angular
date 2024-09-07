import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../../service/medicine.service';
import { CategoryService } from '../../../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrl: './view-medicine.component.css'
})
export class ViewMedicineComponent implements OnInit{




  categories: any;
  medicine: any;
  rooms:any;

  constructor(
    private medicineService: MedicineService,
    private categoryService: CategoryService,
   
    private router: Router

  ) { }

  ngOnInit(): void {

    this.loadMedicine();
  }


  loadMedicine() {

    this.categories = this.categoryService.getAllMedicineCategory();
    this.medicineService.getAllMedicine().subscribe({

      next: res => {
        this.medicine = res;
      },

      error: err => {
        console.log(err)

      }

    });


  }

 


  // viewRooms(hotelId: string): void {
  //   // Navigate to the RoomListComponent with the hotel ID
  //   this.router.navigate(['/room', hotelId]);
  // }

}
