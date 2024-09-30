import { Component, OnInit } from '@angular/core';
import { CustomerModule } from '../../module/customer/customer.module';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  id: number=0;
  customer: CustomerModule = new CustomerModule();

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }






  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getById(this.id)
      .subscribe({

        next: res => {
          this.customer = res;
          console.log(this.customer );
          console.log(res);
        },
        error: error => {
          console.log(error);
        }

      });
  }

  updateCustomer() {

    this.customerService.updateCustomers(this.id, this.customer)

      .subscribe({
        next: res => {
         console.log(res);
         
          this.router.navigate(['/viewcustomer']);
        },
        error: error => {
          console.log(error);
        }

      });
  }
  



}

