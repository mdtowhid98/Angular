import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { Router } from '@angular/router';
import { SalesModule } from '../../module/sales/sales.module';

@Component({
  selector: 'app-viewsales',
  templateUrl: './viewsales.component.html',
  styleUrl: './viewsales.component.css'
})
export class ViewsalesComponent implements OnInit{
  sales:any;
  products:any;
  
  
  
  constructor(private productService:ProductService,
    private salesService:SalesService,
    private router:Router
  ){}
  
    ngOnInit(): void {
      this.products=this.productService.getAllProductForSales();
      this.sales=this.salesService.getAllsales();
    }

    deleteSales(id:string){

      this.salesService.deleteSales(id)
      .subscribe({
        next:res=>{
          this.sales=this.salesService.getAllsales();
          this.router.navigate(['/viewsales'])
        },
        error:error=>{
          console.log(error);
        }
  
      });
    }

    editSales(sale: SalesModule): void {
    
      this.router.navigate(['/updateSales', sale.id]);
    }
  

}