import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RecieptsModule {

  id!: string;
  subtotal!: number;
  sale!: {
    id: string | undefined;
    customername: string | undefined;
    unitprice: number | undefined;
    quantity: number | undefined;
    salesdate: string | undefined;
    totalprice: number | undefined;
    product: {
      id: string | undefined;
      name: string | undefined;
      photo: string | undefined;
      stock: number | undefined;
    }
  }
}
