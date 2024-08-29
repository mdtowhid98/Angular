import { Component, OnInit } from '@angular/core';
import { SalesModule } from '../../module/sales/sales.module';
import { RecieptsModule } from '../../module/reciepts/reciepts.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalesService } from '../../service/sales.service';
import { RecieptsService } from '../../service/reciepts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createrecipts',
  templateUrl: './createrecipts.component.html',
  styleUrl: './createrecipts.component.css'
})
export class CreatereciptsComponent implements OnInit{

  
  sales: SalesModule[] = [];
  reciepts: RecieptsModule[] = [];
  recieptsForm!: FormGroup;
  reciept: RecieptsModule = new RecieptsModule();

  constructor(private recieptService: RecieptsService,
    private salesService: SalesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSales();

    this.recieptsForm = this.formBuilder.group({

      subtotal: [''],
      
      sale: this.formBuilder.group({

        id: [undefined],
        customername: [undefined],
        unitprice: [undefined],
        quantity: [undefined],
        salesdate: [undefined],
        totalprice: [undefined],
        product:this.formBuilder.group({
          id: [undefined],
          name: [undefined],
          photo: [undefined],
          stock: [undefined],
        })
       

      })


    });

    this.recieptsForm.get('sale')?.get('id')?.valueChanges
      .subscribe(name => {

        const selectedSales = this.sales.find(loc => loc.id === name);

        if (selectedSales) {
          this.recieptsForm.patchValue({ sale: selectedSales });

        }

      });

      


  }

  loadSales() {
    this.salesService.getAllSalesForSalesProduct()
      .subscribe({
        next: res => {
          this.sales = res;
        },
        error: error => {
          console.log(error);

        }
      })

  }



  createReciepts() {

    this.reciept.subtotal = this.recieptsForm.value.subtotal;
    this.reciept.sale.customername = this.recieptsForm.value.customername;
    this.reciept.sale.id = this.recieptsForm.value.id;
    this.reciept.sale.salesdate = this.recieptsForm.value.salesdate;
    this.reciept.sale.totalprice = this.recieptsForm.value.totalprice;

    this.recieptService.createReciepts(this.reciept)
      .subscribe({

        next: res => {
          this.loadSales();
          this.recieptsForm.reset();
          this.router.navigate(['viewrecipts']);
        },
        error: error => {
          console.log(error);
        }

      });
  }

}