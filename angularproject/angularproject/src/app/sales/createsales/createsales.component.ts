import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { Router } from '@angular/router';
import { ProductModule } from '../../module/product/product.module';
import { SalesModule } from '../../module/sales/sales.module';

@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrl: './createsales.component.css'
})
export class CreatesalesComponent implements OnInit{


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
      totalprice: [{ value: '', disabled: true }],
      product: this.formBuilder.group({
        id: [undefined],
        name: [undefined],
        photo: [undefined],
        unitprice: [{value:undefined, disabled: true }],
        stock: [undefined]
      })
    });

    this.salesForm.get('product')?.get('name')?.valueChanges.subscribe(name => {
      const selectedProduct = this.products.find(product => product.name === name);

      if (selectedProduct) {
        this.salesForm.patchValue({
          product: {
            id: selectedProduct.id,
            name: selectedProduct.name,
            photo: selectedProduct.photo,
            unitprice: selectedProduct.unitprice,
            stock: selectedProduct.stock
          }
        });
        this.updateTotalPrice();
      }
    });

    this.salesForm.get('quantity')?.valueChanges.subscribe(() => {
      this.updateTotalPrice();
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

  createSales() {
    this.sale.customername = this.salesForm.value.customername;
    this.sale.quantity = this.salesForm.value.quantity;
    this.sale.salesdate = this.salesForm.value.salesdate;
    this.sale.totalprice = this.salesForm.get('totalprice')?.value;

    const productFormValue = this.salesForm.get('product')?.value;
    this.sale.product = {
      id: productFormValue.id,
      name: productFormValue.name,
      photo: productFormValue.photo,
      unitprice: productFormValue.unitprice,
      stock: productFormValue.stock
    };

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

  updateTotalPrice() {
    const unitprice = this.salesForm.get('product')?.get('unitprice')?.value || 0;
    const quantity = this.salesForm.get('quantity')?.value || 0;
    const totalprice = unitprice * quantity;
    this.salesForm.get('totalprice')?.setValue(totalprice);
  }
}