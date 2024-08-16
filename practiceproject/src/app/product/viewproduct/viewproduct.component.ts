import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements OnInit{

  products:any

  constructor(private productService:ProductService,
    private router:Router,
    private httpClient:HttpClient
  ){

  }
  ngOnInit(): void {
    this.products=this.productService.getAllProduct();
  }

  deleteProduct(id:string){

    this.productService.deleteProduct(id)
    .subscribe({
  next:res=>{
  
    this.products=this.productService.getAllProduct();
    this.router.navigate(['/viewproduct']);
  },
  error:error=>{
  
    console.log(error);
  }
  
    })
  }

  updateProduct(id:string){

    this.router.navigate(['updateProduct',id]);
    }


}
