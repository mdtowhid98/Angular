import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModule } from '../../module/product/product.module';
import { SalesModule } from '../../module/sales/sales.module';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-updatesales',
  templateUrl: './updatesales.component.html',
  styleUrls: ['./updatesales.component.css'] // Corrected the typo here
})
export class UpdatesalesComponent implements OnInit {

  products: ProductModule[] = [];
  salesForm!: FormGroup;
  sale: SalesModule = new SalesModule();
  saleId!: string;

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.saleId = this.route.snapshot.params['id']; // Assuming 'id' is passed in the route
    this.loadProduct();
    this.loadSale();

    this.salesForm = this.formBuilder.group({
      customername: ['', Validators.required],
      salesdate: ['', Validators.required],
      products: this.formBuilder.array([]),
      totalprice: [{ value: '', disabled: true }]
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

  loadSale() {
    this.salesService.getSalesById(this.saleId).subscribe({
      next: res => {
        this.sale = res;
        this.populateForm();
      },
      error: error => {
        console.log(error);
      }
    });
  }

  populateForm() {
    this.salesForm.patchValue({
      customername: this.sale.customername,
      salesdate: this.sale.salesdate
    });

    this.sale.product.forEach(prod => {
      const productGroup = this.formBuilder.group({
        id: [prod.id],
        name: [prod.name, Validators.required],
        quantity: [prod.quantity, Validators.required],
        unitprice: [{ value: prod.unitprice, disabled: true }],
      });

      this.productsArray.push(productGroup);
    });

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

  addProduct() {
    const productGroup = this.formBuilder.group({
      id: ['', undefined],
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

  updateSales() {
    this.sale.customername = this.salesForm.value.customername;
    this.sale.salesdate = this.salesForm.value.salesdate;
    this.sale.totalprice = this.salesForm.value.totalprice;

    this.sale.product = this.salesForm.value.products.map((product: any) => {
      const originalProduct = this.products.find(p => p.id === product.id);
      return {
        id: originalProduct?.id,
        name: originalProduct?.name,
        photo: originalProduct?.photo,
        stock: originalProduct?.stock,
        unitprice: originalProduct?.unitprice,
        quantity: product.quantity
      };
    });

    this.salesService.updateSales(this.saleId, this.sale).subscribe({
      next: res => {
        this.router.navigate(['viewsales']);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}