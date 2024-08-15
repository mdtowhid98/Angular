import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SalesModule {
  id!: string;
  customername!: string;
  salesdate!: Date;
  totalprice!: number;
  product!: ProductModule[];
}
