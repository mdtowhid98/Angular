import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../../module/product/product.module';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faBoxes, faDollarSign, faImage, faPlusCircle, faSave, faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent implements OnInit{

  id:string="";
  product:ProductModule=new ProductModule();
  
  faPlusCircle = faPlusCircle;
  faTag = faTag;
  faImage = faImage;
  faDollarSign = faDollarSign;
  faBoxes = faBoxes;
  faSave=faSave;
  
  constructor(private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
    
    ){
  
  
  }
  
  
  
    ngOnInit(): void {
      
  this.product=new ProductModule();
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
  
      this.productService.updateProduct(this.id,this.product)
      .subscribe({
        next:res=>{
          this.product=new ProductModule();
          this.router.navigate(['/viewproduct']);
        },
        error:error=>{
          console.log(error);
        }
  
      });
    }
  
  }
