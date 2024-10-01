import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gulshan-brance-invoice',
  templateUrl: './gulshan-brance-invoice.component.html',
  styleUrl: './gulshan-brance-invoice.component.css'
})
export class GulshanBranceInvoiceComponent implements OnInit{

  sale: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const saleData = params['sale'];
      if (saleData) {
        this.sale = JSON.parse(saleData);
        console.log('Sale data:', this.sale);
      } else {
        console.error('No sale data found');
      }
    });
  }
}