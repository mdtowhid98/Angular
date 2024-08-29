import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { RecieptsService } from '../../service/reciepts.service';

@Component({
  selector: 'app-viewrecipts',
  templateUrl: './viewrecipts.component.html',
  styleUrl: './viewrecipts.component.css'
})
export class ViewreciptsComponent implements OnInit{

  products: any;
  sales: any;
  reciepts: any;

  constructor(private productService: ProductService,
    private salesService: SalesService,
    private recieptsService: RecieptsService
  ) {

  }
  ngOnInit(): void {
    this.sales=this.salesService.getAllSalesForSalesProduct();
    this.reciepts=this.recieptsService.getAllReciepts();
  }

}
