import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../module/product/product.module';
import { SalesModule } from '../module/sales/sales.module';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { SalesService } from '../service/sales.service';
import { Router } from '@angular/router';
import { faPrint, faUser, faSignInAlt, faSignOutAlt, faUserPlus, faSearch, faAppleAlt, faEye, faPlus, faShoppingCart, faChartLine, faShoePrints, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'] // Fixed typo: changed 'styleUrl' to 'styleUrls'
})
export class InvoiceComponent implements OnInit {

  products: ProductModule[] = [];
  sales: SalesModule[] = [];
  invoiceForm!: FormGroup;

  faprint=faShoePrints
  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadInvoiceSales();

    this.invoiceForm = this.formBuilder.group({
      saleId: [''],
      customername: [{ value: '', disabled: true }],
      salesdate: [{ value: '', disabled: true }],
      products: this.formBuilder.array([]), // Changed from 'product' to 'products'
      totalprice: [{ value: '', disabled: true }]
    });

    // Listen to changes on saleId to update the form
    this.invoiceForm.get('saleId')?.valueChanges.subscribe(id => {
      const selectedSale = this.sales.find(sale => sale.id === id);
      if (selectedSale) {
        this.updateInvoiceForm(selectedSale);
      }
    });
  }

  get productsArray(): FormArray {
    return this.invoiceForm.get('products') as FormArray;
  }

  loadInvoiceSales() {
    this.salesService.getAllSalesForSalesProduct()
      .subscribe({
        next: res => {
          this.sales = res;
        },
        error: error => {
          console.log(error);
        }
      });
  }

  updateInvoiceForm(sale: SalesModule) {
    console.log('Updating form with sale:', sale); // Debug log
  
    this.invoiceForm.patchValue({
      customername: sale.customername,
      salesdate: sale.salesdate,
      totalprice: sale.totalprice
    });
  
    // Clear the form array and populate it with the products of the selected sale
    this.productsArray.clear();
    if (sale.product && sale.product.length > 0) {
      sale.product.forEach(product => {
        this.productsArray.push(this.formBuilder.group({
          id: [{ value: product.id, disabled: true }],
          name: [{ value: product.name, disabled: true }],
          photo: [{ value: product.photo, disabled: true }],
          stock: [{ value: product.stock, disabled: true }],
          unitprice: [{ value: product.unitprice, disabled: true }],
          quantity: [{ value: product.quantity, disabled: true }]
        }));
      });
    } else {
      console.log('No products found for this sale.');
    }
  }
  
}
