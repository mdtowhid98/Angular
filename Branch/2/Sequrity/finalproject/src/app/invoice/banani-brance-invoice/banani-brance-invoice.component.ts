import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banani-brance-invoice',
  templateUrl: './banani-brance-invoice.component.html',
  styleUrl: './banani-brance-invoice.component.css'
})
export class BananiBranceInvoiceComponent implements OnInit{

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
