import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../../module/product/product.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { faPlusCircle, faTag, faImage, faDollarSign, faBoxes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent implements OnInit{

  product: ProductModule = new ProductModule();
  formValue!: FormGroup;
  productData: any;

  faPlusCircle = faPlusCircle;
  faTag = faTag;
  faImage = faImage;
  faDollarSign = faDollarSign;
  faBoxes = faBoxes;

  constructor(
    private productService: ProductService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      photo: [''],
      unitprice: [''],
      stock: ['']
    });
  }

  createProduct() {
    this.product.name = this.formValue.value.name;
    this.product.photo = this.formValue.value.photo;
    this.product.unitprice = this.formValue.value.unitprice;
    this.product.stock = this.formValue.value.stock;

    this.productService.getAllProductForSales().subscribe({
      next: (products) => {
        const existingProduct = products.find((p: ProductModule) =>
          p.name.toLowerCase() === this.product.name.toLowerCase()
        );

        if (existingProduct) {
          // If the product already exists, update its stock
          existingProduct.stock += this.product.stock;
          this.productService.updateProducts(existingProduct).subscribe({
            next: (res) => {
              console.log('Product updated', res);
              this.formValue.reset();
              this.router.navigate(['/viewproduct']);
            },
            error: (error) => {
              console.log(error);
            }
          });
        } else {
          // If the product does not exist, create a new one
          this.productService.createProduct(this.product).subscribe({
            next: (res) => {
              console.log('Product created', res);
              this.formValue.reset();
              this.router.navigate(['/viewproduct']);
            },
            error: (error) => {
              console.log(error);
            }
          });
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}