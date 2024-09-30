import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesModule } from '../sales/sales.module';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SalesDetailsModule {

  id!: number;
  sale!: SalesModule;
  product!: ProductModule;
  quantity!: number;
  unitPrice!: number;
  totalPrice!: number;
  discount!: number;

 }
