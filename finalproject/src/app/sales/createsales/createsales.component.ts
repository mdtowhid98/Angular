import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../../module/product/product.module';
import { SalesModule } from '../../module/sales/sales.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrls: ['./createsales.component.css']
})
export class CreatesalesComponent implements OnInit {

  products: ProductModule[] = [];
  sales: SalesModule[] = [];
  salesForm!: FormGroup;
  sale: SalesModule = new SalesModule();

  constructor(private productService: ProductService,
    private salesService: SalesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProduct();

    this.salesForm = this.formBuilder.group({
      customername: [''],
      quantity: [''],
      salesdate: [''],
      totalprice: [{ value: '', disabled: true }], // Disable totalprice input
      product: this.formBuilder.group({
        id: [undefined],
        name: [undefined],
        photo: [undefined],
        stock: [undefined],
        unitprice: [undefined],
      })
    });

    this.salesForm.get('product')?.get('name')?.valueChanges.subscribe(name => {
      const selectedProduct = this.products.find(loc => loc.name === name);
      if (selectedProduct) {
        this.salesForm.patchValue({ product: selectedProduct });
        this.calculateTotalPrice();
      }
    });

    this.salesForm.get('quantity')?.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });

    this.salesForm.get('product')?.get('unitprice')?.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });
  }

  loadProduct() {
    this.productService.getAllProductForSales().subscribe({
      next: res => {
        this.products = res;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  calculateTotalPrice() {
    const quantity = this.salesForm.get('quantity')?.value || 0;
    const unitprice = this.salesForm.get('product')?.get('unitprice')?.value || 0;
    const totalprice = quantity * unitprice;
    this.salesForm.patchValue({ totalprice });
  }

  createSales() {
    this.sale.customername = this.salesForm.value.customername;
    this.sale.quantity = this.salesForm.value.quantity;
    this.sale.salesdate = this.salesForm.value.salesdate;
    this.sale.totalprice = this.salesForm.value.totalprice;
    this.sale.product = this.salesForm.value.product;

    this.salesService.createSales(this.sale).subscribe({
      next: res => {
        this.loadProduct();
        this.salesForm.reset();
        this.router.navigate(['viewsales']);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
