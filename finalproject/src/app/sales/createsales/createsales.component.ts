import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../../module/product/product.module';
import { SalesModule } from '../../module/sales/sales.module';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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
      customername: ['', Validators.required],
      salesdate: ['', Validators.required],
      products: this.formBuilder.array([]),
      totalprice: [{ value: '', disabled: true }]
    });

    this.addProduct();
    this.salesForm.get('product')?.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });
  }

  get productsArray(): FormArray {
    return this.salesForm.get('products') as FormArray;
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

  addProduct() {
    const productGroup = this.formBuilder.group({
      id: ['',undefined],
      name: ['', Validators.required],
      quantity: [0, Validators.required],
      unitprice: [{ value: 0, disabled: true }],
    });

    productGroup.get('name')?.valueChanges.subscribe(name => {
      const selectedProduct = this.products.find(prod => prod.name === name);
      if (selectedProduct) {
        productGroup.patchValue({ 
          id: selectedProduct.id,
          unitprice: selectedProduct.unitprice 
        });
        this.calculateTotalPrice();
      }
    });

    productGroup.get('quantity')?.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });

    this.productsArray.push(productGroup);
  }

  removeProduct(index: number) {
    this.productsArray.removeAt(index);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let totalprice = 0;
    this.productsArray.controls.forEach(control => {
      const quantity = control.get('quantity')?.value || 0;
      const unitprice = control.get('unitprice')?.value || 0;
      totalprice += quantity * unitprice;
    });
    this.salesForm.patchValue({ totalprice });
  }

  createSales() {
    this.sale.customername = this.salesForm.value.customername;
    this.sale.salesdate = this.salesForm.value.salesdate;
    this.sale.totalprice = this.salesForm.value.totalprice;
    this.sale.product = this.salesForm.value.products.map((product: any) => ({
      id: product.id,
      quantity: product.quantity
    }));

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
