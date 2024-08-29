import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrl: './updateproducts.component.css'
})
export class UpdateproductsComponent implements OnInit{

  id:string="";
  product:ProductModel=new ProductModel();
  
  constructor(private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
    
    ){
  
  
  }
  
  
  
    ngOnInit(): void {
      
  this.product=new ProductModel();
  this.id=this.route.snapshot.params['id'];
  this.productService.getById(this.id)
  .subscribe({
  
    next:res=>{
      this.product=res;
      console.log(res);
    },
    error:error=>{
  
      console.log(error);
    }
  
  
  });
  
    }
  
    updateProduct(){
  
      this.productService.updateproduct(this.id,this.product)
      .subscribe({
        next:res=>{
          this.product=new ProductModel();
          this.router.navigate(['/viewproducts']);
        },
        error:error=>{
          console.log(error);
        }
  
      });
    }
  
  }

