import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../module/product/product.module';
import { SalesModule } from '../module/sales/sales.module';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { SalesService } from '../service/sales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faPrint, faUser, faSignInAlt, faSignOutAlt, faUserPlus, faSearch, faAppleAlt, faEye, faPlus, faShoppingCart, faChartLine, faShoePrints, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'] // Fixed typo: changed 'styleUrl' to 'styleUrls'
})
export class InvoiceComponent implements OnInit {
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