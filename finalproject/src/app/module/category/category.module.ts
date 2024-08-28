import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategoryModule {
  id!:string;
  categoryname!:string;
  // products!: ProductModule[]; // Add this line if each category has a list of products

 }
