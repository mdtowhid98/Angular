import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SalesModule {
  id!: string;
  customername!: string;

  quantity!: number;
  salesdate!: Date;
  totalprice!: number;
  product!: {
    id: string | undefined;
    name: string | undefined;
    photo: string | undefined;
    stock: number | undefined;
    unitprice: number | undefined;

  }
}
