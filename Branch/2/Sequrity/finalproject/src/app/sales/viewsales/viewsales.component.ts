import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { Router } from '@angular/router';
import { SalesModule } from '../../module/sales/sales.module';
import { ProductModule } from '../../module/product/product.module';
import { Observable } from 'rxjs';
import { log } from 'console';
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-viewsales',
  templateUrl: './viewsales.component.html',
  styleUrl: './viewsales.component.css'
})
export class ViewsalesComponent implements OnInit{

  sales: SalesModule[] = [];
  products: ProductModule[] = [];
  
  faEdit = faEdit;
  faTrash = faTrash;
  faEye = faEye;

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
      this.salesService.getAllSales().subscribe({
        next: (res: SalesModule[]) => {
          this.sales = res;
          // console.log(this.sales); // Log the sales array
        },
        error: error => {
          console.error(error);
        }
      });
    }

    deleteSales(id:number){

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
