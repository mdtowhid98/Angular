import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../service/sales.service';
import { SalesproductService } from '../../service/salesproduct.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-viewsalesproduct',
  templateUrl: './viewsalesproduct.component.html',
  styleUrl: './viewsalesproduct.component.css'
})
export class ViewsalesproductComponent implements OnInit {

  salesproducts: any;
  sales: any;


  constructor(private salesService: SalesService,
    private salesproductService: SalesproductService,


    private router: Router
  ) { }


  ngOnInit(): void {
    this.sales = this.salesService.getAllSalesForSalesProduct();
    this.salesproducts = this.salesproductService.viewAllSalesProduct();

  }

}
