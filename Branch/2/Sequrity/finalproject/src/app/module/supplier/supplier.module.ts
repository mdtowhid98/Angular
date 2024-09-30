import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SupplierModule { 

  id!:number;
  name!:string;
  email!:string;
  cell!:number;
  address!:string;

}
