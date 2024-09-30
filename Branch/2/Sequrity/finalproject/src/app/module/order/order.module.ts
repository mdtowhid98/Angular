import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { CustomerModule } from '../customer/customer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrderModule { 

  id!:number;
  product!:ProductModule;
  quantity!:number;
  orderDate!:Date;
  customer!:CustomerModule;


}
