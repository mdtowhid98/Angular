import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModule } from '../../module/product/product.module';
import { SalesModule } from '../../module/sales/sales.module';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser, faCalendarAlt, faBox, faSortNumericDown, faDollarSign, faWarehouse, faTrash, faPlus, faCartPlus, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-updatesales',
  templateUrl: './updatesales.component.html',
  styleUrls: ['./updatesales.component.css']
})
export class UpdatesalesComponent implements OnInit {

  products: ProductModule[] = [];
  salesForm!: FormGroup;
  sale: SalesModule = new SalesModule();
  saleId!: number;

  // Font Awesome Icons
  faUser = faUser;
  faCalendarAlt = faCalendarAlt;
  faBox = faBox;
  faSortNumericDown = faSortNumericDown;
  faDollarSign = faDollarSign;
  faWarehouse = faWarehouse;
  faTrash = faTrash;
  faPlus = faPlus;
  faCartPlus = faCartPlus;
  faSave = faSave;

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
        console.error('Error fetching products', error);
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
        console.error('Error fetching sale details', error);
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
        stock: [{ value: prod.stock, disabled: true }],
      });

      productGroup.get('quantity')?.valueChanges.subscribe(quantity => {
        const stock = productGroup.get('stock')?.value || 0;
        const quantityValue = quantity || 0;

        if (quantityValue > stock) {
          alert(`The selected quantity exceeds the available stock of ${stock}. Please reduce the quantity.`);
          productGroup.patchValue({ quantity: stock });
        }

        this.calculateTotalPrice();
      });

      this.productsArray.push(productGroup);
    });

    this.calculateTotalPrice();
  }

  addProduct() {
    const productGroup = this.formBuilder.group({
      id: ['', undefined],
      name: ['', Validators.required],
      quantity: [{ value: 0, disabled: true }, Validators.required],
      unitprice: [{ value: 0, disabled: true }],
      stock: [{ value: 0, disabled: true }],
    });

    // productGroup.get('name')?.valueChanges.subscribe(name => {
    //   const selectedProduct = this.products.find(prod => prod.name === name);
    //   if (selectedProduct) {
    //     const stock = selectedProduct.stock;
    //     if (stock > 0) {
    //       productGroup.patchValue({
    //         id: selectedProduct.id,
    //         unitprice: selectedProduct.unitprice,
    //         stock: stock
    //       });
    //       productGroup.get('quantity')?.enable();
    //     } else {
    //       alert(`The product ${selectedProduct.name} is out of stock!`);
    //       productGroup.patchValue({
    //         id: selectedProduct.id,
    //         unitprice: selectedProduct.unitprice,
    //         stock: stock,
    //         quantity: 0
    //       });
    //       productGroup.get('quantity')?.disable();
    //     }
    //     this.calculateTotalPrice();
    //   }
    // });

    productGroup.get('quantity')?.valueChanges.subscribe(quantity => {
      const stock = productGroup.get('stock')?.value || 0;
      const quantityValue = quantity || 0;

      if (quantityValue > stock) {
        alert(`The selected quantity exceeds the available stock of ${stock}. Please reduce the quantity.`);
        productGroup.patchValue({ quantity: stock });
      }

      this.calculateTotalPrice();
    });

    this.productsArray.push(productGroup);
  }

  removeProduct(index: number) {
    this.productsArray.removeAt(index);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    const totalprice = this.productsArray.controls.reduce((total, control) => {
      const quantity = control.get('quantity')?.value || 0;
      const unitprice = control.get('unitprice')?.value || 0;
      return total + quantity * unitprice;
    }, 0);

    this.salesForm.patchValue({ totalprice });
  }

  updateSales() {
    this.sale.customername = this.salesForm.value.customername;
    this.sale.salesdate = this.salesForm.value.salesdate;
    this.sale.totalprice = this.salesForm.value.totalprice;
  
    this.sale.product = this.salesForm.value.products.map((product: any) => {
      const originalProduct = this.products.find(p => p.id === product.id);
      if (originalProduct) {
        originalProduct.stock -= product.quantity; // Adjust the stock based on the quantity sold
      }
      return {
        id: originalProduct?.id?.toString(), // Convert id to string
        name: originalProduct?.name,
        photo: originalProduct?.photo,
        stock: originalProduct?.stock, // Updated stock
        unitprice: originalProduct?.unitprice,
        quantity: product.quantity
      };
    });
  
    // this.salesService.updateSales(this.saleId, this.sale).subscribe({
    //   next: () => {
    //     this.sale.product.forEach(prod => {
    //       this.productService.updateProducts(prod).subscribe({
    //         next: () => {
    //           console.log(`Stock reduced and updated for product ID ${prod.id}`);
    //         },
    //         error: (error) => {
    //           console.error('Error updating product stock', error);
    //         }
    //       });
    //     });
  
    //     this.router.navigate(['viewsales']);
    //   },
    //   error: error => {
    //     console.error('Error updating sales order', error);
    //   }
    // });
  }
  
}
