import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-createproducts',
  templateUrl: './createproducts.component.html',
  styleUrl: './createproducts.component.css'
})
export class CreateproductsComponent implements OnInit{

  product:ProductModel=new ProductModel();
  
  formValue!:FormGroup;
  productData:any;
  
    constructor(private productService:ProductService,
      private router:Router,
      private httpClient:HttpClient,
      private formBuilder:FormBuilder
    ){
  
    }
    ngOnInit(): void {
      this.formValue=this.formBuilder.group({
        
        name: [''],
        price: [''],
        stock: [''],
       
      });
    }
  
    createProduct(){
 this.product.name=this.formValue.value.name;
 this.product.price=this.formValue.value.price;
 this.product.stock=this.formValue.value.stock;



  
  this.productService.createProduct(this.product)
  .subscribe({
  next:res=>{
  
    console.log(res);
    this.formValue.reset();
    this.router.navigate(['/viewproducts']);
  },
  error:error=>{
    console.log(error);
  }
  
  })
  
    }
  }
