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

  constructor(private prductService: ProductService,
    private salesService: SalesService,
    private fromBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.saleId = this.route.snapshot.params['id'];
    console.log(this.saleId);

    this.saleForm = this.fromBuilder.group({

      customername: [''],
      unitprice: [''],
      quantity: [''],
      salesdate: [''],
      totalprice: [''],
      product: this.fromBuilder.group({
        id: [undefined],
        name: [undefined],
        photo: [undefined],
        stock: [undefined]
       
      })

    });

    this.loadSaleDetails();
    this.loadProduct();
  }

  loadProduct(): void {

    this.prductService.getAllProductForSales()
      .subscribe({
next:(res:ProductModule[])=>{

  this.products=res;

},
error:error=>{
  console.log(error)
}

      });
  }

  loadSaleDetails(): void {
    
    this.salesService.getSalesById(this.saleId)
      .subscribe({
        next: (sale: SalesModule) => {
          this.sale=sale;
          this.saleForm.patchValue({

            customername:sale.customername,
            unitprice:sale.product.unitprice,
            quantity:sale.quantity,
            salesdate:sale.salesdate,
            totalprice:sale.totalprice,
            
            product:sale.product
            
          });
        },
        error:error=>{
          console.log(error);
        }

      });
  }

  updateSale():void{
    const updateSale:SalesModule={

      ...this.sale,
      ...this.saleForm.value
    };

    this.salesService.updateSales(updateSale)
    .subscribe({
      next:res=>{

        console.log('sales update successfully:',res);
        this.router.navigate(['viewsales']);
      },
      error:error=>{

        console.log('Error updating sales:',error);
      }

    });

  }

}
