import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModule } from '../../module/product/product.module';
import { SalesModule } from '../../module/sales/sales.module';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-updatesales',
  templateUrl: './updatesales.component.html',
  styleUrls: ['./updatesales.component.css'] // Corrected the typo here
})
export class UpdatesalesComponent implements OnInit {

  saleForm!: FormGroup;
  saleId: string = "";
  products: ProductModule[] = [];
  sale: SalesModule = new SalesModule();

  constructor(private prductService: ProductService,
    private salesService: SalesService,
    private fromBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.saleId = this.route.snapshot.params['id'];
    console.log(this.saleId);

    this.saleForm = this.fromBuilder.group({

      customername: [''],
      salesdate: [''],
      totalprice: [''],
      
      product: this.fromBuilder.group({
        id: [undefined],
        name: [undefined],
        price: [undefined],
        stock: [undefined]
       
      })

    });

    this.loadSaleDetails();
    this.loadProduct();
  }
  get productsArray(): FormArray {
    return this.saleForm.get('products') as FormArray;
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

            // quantity:sale.quantity,
            totalprice:sale.totalprice,
            salesdate:sale.salesdate,
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

