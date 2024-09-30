import { Component, OnInit } from '@angular/core';
import { CustomerModule } from '../../module/customer/customer.module';
import { ProductModule } from '../../module/product/product.module';
import { OrderModule } from '../../module/order/order.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBox, faDollarSign, faImage, faPlus, faTags, faUser } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../service/product.service';
import { CustomerService } from '../../service/customer.service';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent implements OnInit{

  customers: CustomerModule[] = []; // Rename to 'customers' for clarity
  products: ProductModule[] = [];
  order: OrderModule = new OrderModule();
  formValue!: FormGroup;

  faUser = faUser;
  faBox = faBox;
  faDollarSign = faDollarSign;
  faTags = faTags;
  faImage = faImage;
  faPlus = faPlus;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadCustomers(); // Rename to 'loadCustomers'
    this.loadProducts();  // Rename to 'loadProducts'

    this.formValue = this.formBuilder.group({
      quantity: ['', Validators.required],
      orderDate: ['', Validators.required],
      customer: [null, Validators.required], // Expecting customer ID or object
      product: [null, Validators.required],  // Expecting product ID or object
    });
  }

  // Fetch all customers
  loadCustomers() {
    this.customerService.getAllCustomer().subscribe({
      next: res => {
        this.customers = res;
        console.log('Customers loaded:', this.customers);
      },
      error: error => {
        console.log('Error loading customers:', error);
      }
    });
  }

  // Fetch all products
  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: res => {
        this.products = res;
        console.log('Products loaded:', this.products);
      },
      error: error => {
        console.log('Error loading products:', error);
      }
    });
  }

  // Create a new order
  createOrder() {
    // Initialize order with form values
    this.order = {
      ...this.order,
      quantity: this.formValue.value.quantity,
      orderDate: this.formValue.value.orderDate,
      customer: this.formValue.value.customer, // Assuming customer object or ID is selected from dropdown
      product: this.formValue.value.product   // Assuming product object or ID is selected from dropdown
    };

    // Call the service to create the order
    this.orderService.createOrder(this.order).subscribe({
      next: res => {
        console.log('Order created:', res);
        this.formValue.reset();
        this.router.navigate(['/vieworder']);
      },
      error: error => {
        console.log('Error creating order:', error);
      }
    });
  }
}