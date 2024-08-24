



import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements OnInit{
  products:any;

  faEdit = faEdit;
  faTrash = faTrash;
  constructor(private productService:ProductService,
    private router:Router
  ){}


  ngOnInit(): void {
    this.products=this.productService.getProduct();
  }

  deleteProduct(id:string){

    this.productService.deleteProduct(id)
    .subscribe({
  next:res=>{
  
    this.products=this.productService.getProduct();
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


