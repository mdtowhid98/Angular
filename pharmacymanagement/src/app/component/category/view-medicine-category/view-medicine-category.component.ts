import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-view-medicine-category',
  templateUrl: './view-medicine-category.component.html',
  styleUrl: './view-medicine-category.component.css'
})
export class ViewMedicineCategoryComponent implements OnInit{

categories:any;

constructor(
  private categoryService:CategoryService
){}

  ngOnInit(): void {
    this.categories=this.categoryService.getAllMedicineCategory();
  }

}
