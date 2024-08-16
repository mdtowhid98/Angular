import { Component, OnInit } from '@angular/core';
import { SalesModel } from '../../model/sales.model';
import { SalesProductModel } from '../../model/salesproduct.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalesService } from '../../service/sales.service';
import { SalesproductService } from '../../service/salesproduct.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../service/product.service';




@Component({
  selector: 'app-createsalesproduct',
  templateUrl: './createsalesproduct.component.html',
  styleUrl: './createsalesproduct.component.css'
})
export class CreatesalesproductComponent implements OnInit{

  products:ProductModel[]=[];
  sales: SalesModel[] = [];
  salesProducts: SalesProductModel[] = [];
  salesProductForm!: FormGroup;
  salesProduct: SalesProductModel = new SalesProductModel();

  constructor(private salesService: SalesService,
    private salesProductService: SalesproductService,
    private productService:ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSales();
    this.loadProduct();

    this.salesProductForm = this.formBuilder.group({

      customername: [''],
      address: [''],
      
      sale: this.formBuilder.group({

        id: [undefined],
        quantity: [undefined],
        totalprice: [undefined],
        salesdate: [undefined],
       

      }),
      pro:this.formBuilder.group({
        id: [undefined],
        name: [undefined],
        price: [undefined],
        stock: [undefined],
      })


    });

    this.salesProductForm.get('sale')?.get('totalprice')?.valueChanges
      .subscribe(totalprice => {

        const selectedSalesProduct = this.sales.find(loc => loc.totalprice === totalprice);

        if (selectedSalesProduct) {
          this.salesProductForm.patchValue({ sale: selectedSalesProduct });

        }

      });

      this.salesProductForm.get('pro')?.get('name')?.valueChanges
      .subscribe(name => {

        const selectedSalesProduct = this.products.find(loc => loc.name === name);

        if (selectedSalesProduct) {
          this.salesProductForm.patchValue({ pro: selectedSalesProduct });

        }

      });


  }

  loadSales() {
    this.salesService.getAllSalesForSalesProduct()
      .subscribe({
        next: res => {
          this.sales = res;
        },
        error: error => {
          console.log(error);

        }
      })

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



  createSalesProduct() {

    this.salesProduct.customername = this.salesProductForm.value.customername;
    this.salesProduct.address = this.salesProductForm.value.address;
    this.salesProduct.sale = this.salesProductForm.value.sale;
    this.salesProduct.pro = this.salesProductForm.value.pro;
    

    this.salesProductService.createSalesProduct(this.salesProduct)
      .subscribe({

        next: res => {
          this.loadSales();
          this.loadProduct();
          this.salesProductForm.reset();
          this.router.navigate(['viewAllSalesProduct']);
        },
        error: error => {
          console.log(error);
        }

      });
  }

}
