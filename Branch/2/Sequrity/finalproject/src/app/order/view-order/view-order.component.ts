import { Component, OnInit } from '@angular/core';
import { OrderModule } from '../../module/order/order.module';
import { ProductModule } from '../../module/product/product.module';
import { CustomerModule } from '../../module/customer/customer.module';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.css'
})
export class ViewOrderComponent implements OnInit{


  order: OrderModule[] = [];
  products: ProductModule[] = [];
  customer: CustomerModule[] = [];
  
  faEdit = faEdit;
  faTrash = faTrash;
  faEye = faEye;

  constructor(private productService:ProductService,
    private customerService:CustomerService,
    private orderService:OrderService,
    private router:Router
  ){}
  
    ngOnInit(): void {
      this.loadProducts();
      this.loadCustomer();
      this.loadOrder();
    }

    loadProducts() {
      this.productService.getAllProductForSales().subscribe({
        next: (res: ProductModule[]) => {
          this.products = res;
          
        },
        error: error => {
          console.error(error);
        }
      });
    }
  
    loadCustomer() {
      this.customerService.getAllCustomer().subscribe({
        next: (res: CustomerModule[]) => {
          this.customer = res;
          
        },
        error: error => {
          console.error(error);
        }
      });
    }


    loadOrder() {
      this.orderService.getAllOrder().subscribe({
        next: (res: OrderModule[]) => {
          this.order = res;
         
        },
        error: error => {
          console.error(error);
        }
      });
    }

    // deleteSales(id:number){

    //   this.salesService.deleteSales(id)
    //   .subscribe({
    //     next:res=>{
    //       this.loadSales();
    //       this.router.navigate(['/viewsales'])
    //     },
    //     error:error=>{
    //       console.log(error);
    //     }
  
    //   });
    // }

    // editSales(sale: SalesModule): void {
    
    //   this.router.navigate(['/updateSales', sale.id]);
    // }


}
