import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent implements OnInit{

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
        stock: ['']
        
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
    this.router.navigate(['/viewproduct']);
  },
  error:error=>{
    console.log(error);
  }
  
  })
  
    }
  }




