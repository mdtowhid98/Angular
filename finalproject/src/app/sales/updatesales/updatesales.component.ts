import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModule } from '../../module/product/product.module';
import { SalesModule } from '../../module/sales/sales.module';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatesales',
  templateUrl: './updatesales.component.html',
  styleUrl: './updatesales.component.css'
})
export class UpdatesalesComponent {

  saleForm!: FormGroup;
  saleId: string = "";
  products: ProductModule[] = [];
  sale: SalesModule = new SalesModule();

  constructor(private productService: ProductService,
              private salesService: SalesService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.saleId = this.route.snapshot.params['id'];
    console.log(this.saleId);

    this.saleForm = this.formBuilder.group({
      customername: [''],
      quantity: [''],
      salesdate: [''],
      totalprice: [{ value: '', disabled: true }],
      product: this.formBuilder.group({
        id: [undefined],
        name: [undefined],
        photo: [undefined],
        stock: [undefined],
        unitprice: [undefined]
      })
    });

    this.loadSaleDetails();
    this.loadProduct();

    this.saleForm.get('quantity')?.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });

    this.saleForm.get('product')?.get('unitprice')?.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });
  }

  loadProduct(): void {
    this.productService.getAllProductForSales().subscribe({
      next: (res: ProductModule[]) => {
        this.products = res;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  loadSaleDetails(): void {
    this.salesService.getSalesById(this.saleId).subscribe({
      next: (sale: SalesModule) => {
        this.sale = sale;
        this.saleForm.patchValue({
          customername: sale.customername,
          quantity: sale.product,
          salesdate: sale.salesdate,
          totalprice: sale.totalprice,
          product: sale.product
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }

  calculateTotalPrice(): void {
    const quantity = this.saleForm.get('quantity')?.value || 0;
    const unitprice = this.saleForm.get('product')?.get('unitprice')?.value || 0;
    const totalprice = quantity * unitprice;
    this.saleForm.patchValue({ totalprice });
  }

  updateSale(): void {
    const updatedSale: SalesModule = {
      ...this.sale,
      ...this.saleForm.value
    };

    this.salesService.updateSales(updatedSale).subscribe({
      next: res => {
        console.log('Sales updated successfully:', res);
        this.router.navigate(['viewsales']);
      },
      error: error => {
        console.log('Error updating sales:', error);
      }
    });
  }
}