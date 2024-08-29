import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from '../../model/product.model';
import { SalesModel } from '../../model/sales.model';
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
  products: ProductModel[] = [];
  sale: SalesModel = new SalesModel();

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

      quantity: [''],
      totalprice: [''],
      salesdate: [''],
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

  loadProduct(): void {

    this.prductService.getAllProductForSales()
      .subscribe({
next:(res:ProductModel[])=>{

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
        next: (sale: SalesModel) => {
          this.sale=sale;
          this.saleForm.patchValue({

            quantity:sale.quantity,
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
    const updateSale:SalesModel={

      ...this.sale,
      ...this.saleForm.value
    };

    this.salesService.updateSales(updateSale)
    .subscribe({
      next:res=>{

        console.log('sales update successfully:',res);
        this.router.navigate(['viewAllsales']);
      },
      error:error=>{

        console.log('Error updating sales:',error);
      }

    });

  }

}

