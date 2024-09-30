import { Component, OnInit } from '@angular/core';
import { SupplierModule } from '../../module/supplier/supplier.module';
import { SupplierService } from '../../service/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatesupplier',
  templateUrl: './updatesupplier.component.html',
  styleUrl: './updatesupplier.component.css'
})
export class UpdatesupplierComponent implements OnInit{

  id: number=0;
  supplier: SupplierModule = new SupplierModule();

  constructor(private supplierService: SupplierService,
    private router: Router,
    private route: ActivatedRoute
  ) { }






  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.supplierService.getById(this.id)
      .subscribe({

        next: res => {
          this.supplier = res;
          console.log(this.supplier );
          console.log(res);
        },
        error: error => {
          console.log(error);
        }

      });
  }

  updateSupplier() {

    this.supplierService.updateSupplier(this.id, this.supplier)

      .subscribe({
        next: res => {
         console.log(res);
         
          this.router.navigate(['/viewsupplier']);
        },
        error: error => {
          console.log(error);
        }

      });
  }
  



}

