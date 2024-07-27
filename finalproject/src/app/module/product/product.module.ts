import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
 }
