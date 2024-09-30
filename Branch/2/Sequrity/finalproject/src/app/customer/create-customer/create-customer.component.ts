import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { CustomerModule } from '../../module/customer/customer.module';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent implements OnInit{

  customer: CustomerModule = new CustomerModule();

  formValue!: FormGroup;
  categoryData: any;

  constructor(private customerService: CustomerService,
    private router: Router,
    
    private formBuilder: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      name: [''],
      cell: [''],
      address: [''],
      

    });

  }


  createCustomer() {

    this.customer.name = this.formValue.value.name;
    this.customer.cell = this.formValue.value.cell;
    this.customer.address = this.formValue.value.address;
    


    this.customerService.createCustomer(this.customer)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewcustomer']);
        },
        error: error => {

          console.log(error);
        }

      });



  }
}
