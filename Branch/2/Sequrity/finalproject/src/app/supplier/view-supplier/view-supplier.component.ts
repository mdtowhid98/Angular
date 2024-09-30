import { Component, OnInit } from '@angular/core';
import { SupplierModule } from '../../module/supplier/supplier.module';
import { SupplierService } from '../../service/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrl: './view-supplier.component.css'
})
export class ViewSupplierComponent implements OnInit{



suppliers: SupplierModule[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSuppliers();
  }

  // Helper method to load the generics
  loadSuppliers() {
    this.supplierService.getAllSupplier().subscribe({
      next: (data: SupplierModule[]) => {
        this.suppliers = data;
      },
      error: (error) => {
        console.log('Error fetching suppliers', error);
      }
    });
  }

  // Delete method
  deleteSupplier(id: number) {
    if (confirm('Are you sure you want to delete this supplier?')) {
      this.supplierService.deleteSupplier(id).subscribe({
        next: () => {
          // Refresh the generics list after successful deletion
          this.loadSuppliers();
        },
        error: (error) => {
          console.log('Error deleting generic', error);
        }
      });
    }
  }

  updateSupplier(id: number) {

    this.router.navigate(['/updatesupplier', id]);
  }


}