import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { BranchModule } from '../branch/branch.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SalesModule {
  id!: number;
  customername!: string;
  salesdate!: Date;
  totalprice!: number;
  quantity!:number;
  discount!:number;
  product!: ProductModule[];
  
}
