import { NgModule, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModule } from '../category/category.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  id!: string
  name!: string
  photo!: string
  stock!: number
  unitprice!:number
  quantity!:number
  categories!:CategoryModule[] 
    
  
 }
//  export interface ProductWithCategory extends ProductModule {
//   id:string;
//   categoryname: string;
// }


