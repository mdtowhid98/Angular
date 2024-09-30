import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { CustomerModule } from '../../module/customer/customer.module';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit{

  customers: CustomerModule[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCustomer();
  }

  // Helper method to load the generics
  loadCustomer() {
    this.customerService.getAllCustomer().subscribe({
      next: (data: CustomerModule[]) => {
        this.customers = data;
      },
      error: (error) => {
        console.log('Error fetching generics', error);
      }
    });
  }

  // Delete method
  deleteCustomer(id: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe({
        next: () => {
          // Refresh the generics list after successful deletion
          this.loadCustomer();
        },
        error: (error) => {
          console.log('Error deleting generic', error);
        }
      });
    }
  }

  updateCustomer(id: number) {

    this.router.navigate(['/updatecustomer', id]);
  }


}