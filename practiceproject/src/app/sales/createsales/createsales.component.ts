import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';
import { SalesModel } from '../../model/sales.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrl: './createsales.component.css'
})
export class CreatesalesComponent implements OnInit{



products: ProductModel[] = [];
  sales: SalesModel[] = [];
  salesForm!: FormGroup;
  sale: SalesModel = new SalesModel();

  constructor(private productService: ProductService,
    private salesService: SalesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProduct();

    this.salesForm = this.formBuilder.group({

      quantity: [''],
      totalprice: [''],
      salesdate: [''],
      product: this.formBuilder.group({

        id: [undefined],
        name: [undefined],
        price: [undefined],
        stock: [undefined]
       

      })


    });

    this.salesForm.get('product')?.get('name')?.valueChanges
      .subscribe(name => {

        const selectedProduct = this.products.find(loc => loc.name === name);

        if (selectedProduct) {
          this.salesForm.patchValue({ product: selectedProduct });

        }

      });


  }

  loadProduct() {
    this.productService.getAllProductForSales()
      .subscribe({
        next: res => {
          this.products = res;
        },
        error: error => {
          console.log(error);

        }
      })

  }



  createSales() {

    this.sale.quantity = this.salesForm.value.quantity;
    this.sale.totalprice = this.salesForm.value.totalprice;
    this.sale.salesdate = this.salesForm.value.salesdate;
    this.sale.product = this.salesForm.value.product;

    this.salesService.createSales(this.sale)
      .subscribe({

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
