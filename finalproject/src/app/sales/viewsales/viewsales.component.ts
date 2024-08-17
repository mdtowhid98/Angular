import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { Router } from '@angular/router';
import { SalesModule } from '../../module/sales/sales.module';
import { ProductModule } from '../../module/product/product.module';
import { Observable } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-viewsales',
  templateUrl: './viewsales.component.html',
  styleUrl: './viewsales.component.css'
})
export class ViewsalesComponent implements OnInit{

  sales: SalesModule[] = [];
  products: ProductModule[] = [];
  
  
  constructor(private productService:ProductService,
    private salesService:SalesService,
    private router:Router
  ){}
  
    ngOnInit(): void {
      this.loadProducts();
      this.loadSales();
    }

    loadProducts() {
      this.productService.getAllProductForSales().subscribe({
        next: (res: ProductModule[]) => {
          this.products = res;
          // console.log(this.products); // Log the products array
        },
        error: error => {
          console.error(error);
        }
      });
    }
  
    loadSales() {
      this.salesService.getAllsales().subscribe({
        next: (res: SalesModule[]) => {
          this.sales = res;
          // console.log(this.sales); // Log the sales array
        },
        error: error => {
          console.error(error);
        }
      });
    }

    deleteSales(id:string){

      this.salesService.deleteSales(id)
      .subscribe({
        next:res=>{
          this.loadSales();
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
