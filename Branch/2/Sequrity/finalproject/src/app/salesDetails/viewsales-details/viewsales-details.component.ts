import { Component } from '@angular/core';
import { SalesModule } from '../../module/sales/sales.module';
import { ProductModule } from '../../module/product/product.module';
import { SalesDetailsModule } from '../../module/sales-details/sales-details.module';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { SalesDetailsService } from '../../service/sales-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewsales-details',
  templateUrl: './viewsales-details.component.html',
  styleUrl: './viewsales-details.component.css'
})
export class ViewsalesDetailsComponent {

  salesDetails: SalesDetailsModule[] = [];

  filteredCustomerNameAndId: SalesDetailsModule[] = []; 
  searchTerm: string = '';            
  sortBy: 'customername' | 'id' | 'id' = 'customername'; 



  groupedSalesDetails: Map<number, SalesDetailsModule[]> = new Map();

  constructor(private salesDetailsService: SalesDetailsService) {}

  ngOnInit(): void {
    this.loadSalesDetails();
    this.loadGroupedSalesDetails();
  }

  loadSalesDetails(): void {
    this.salesDetailsService.getAllSalesDetails().subscribe({
      next: (data: SalesDetailsModule[]) => {
        this.salesDetails = data;
        this.filteredCustomerNameAndId = data; // Initialize with all data
      },
      error: (err) => {
        console.error('Error fetching sales details', err);
      }
    });
  }

  loadGroupedSalesDetails(): void {
    this.salesDetailsService.getGroupedSalesDetails().subscribe({
      next: (data: Map<number, SalesDetailsModule[]>) => {
        this.groupedSalesDetails = data;
      },
      error: (err) => {
        console.error('Error fetching grouped sales details', err);
      }
    });
  }

  searchCustomerNameAndId(): void {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
  
    this.filteredCustomerNameAndId = this.salesDetails.filter(item =>
      (item.sale.customername?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.sale.id?.toString().includes(lowerCaseSearchTerm)
    )
    );
  }


}