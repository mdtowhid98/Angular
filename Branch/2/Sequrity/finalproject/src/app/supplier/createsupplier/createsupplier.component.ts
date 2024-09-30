import { Component, OnInit } from '@angular/core';
import { SupplierModule } from '../../module/supplier/supplier.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SupplierService } from '../../service/supplier.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createsupplier',
  templateUrl: './createsupplier.component.html',
  styleUrl: './createsupplier.component.css'
})
export class CreatesupplierComponent implements OnInit{

  supplier: SupplierModule = new SupplierModule();

  formValue!: FormGroup;
  supplierData: any;

  constructor(private supplierService: SupplierService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      name: [''],
      
      email: [''],
      cell: [''],
      address: [''],
      

    });

  }


  createSupplier() {

    this.supplier.name = this.formValue.value.name;
    this.supplier.email = this.formValue.value.email;
    this.supplier.cell = this.formValue.value.cell;
    this.supplier.address = this.formValue.value.address;
    


    this.supplierService.createSupplier(this.supplier)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewsupplier']);
        },
        error: error => {

          console.log(error);
        }

      });



  }
}
