import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../../module/product/product.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { faPlusCircle, faTag, faImage, faDollarSign, faBoxes, faUser, faBox, faTags, faPlus, faCalendarAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { CategoryModule } from '../../module/category/category.module';
import { CategoryService } from '../../service/category.service';
import { SupplierModule } from '../../module/supplier/supplier.module';
import { SupplierService } from '../../service/supplier.service';
import { BranchModule } from '../../module/branch/branch.module';
import { BranchService } from '../../service/branch.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'] // Note: Corrected the typo here
})
export class CreateproductComponent implements OnInit {

  image: File | null = null;
  categories: CategoryModule[] = [];
  suppliers: SupplierModule[] = [];
  branches: BranchModule[] = [];
  product: ProductModule = new ProductModule();
  formValue!: FormGroup;

  faUser = faUser;
  faBox = faBox;
  faDollarSign = faDollarSign;
  faTags = faTags;
  faImage = faImage;
  faPlus = faPlus;
  faCalendarAlt=faCalendarAlt;
  faUserTie=faUserTie

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private branchService: BranchService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadCategory();
    this.loadSupplier();
    this.loadBranch();
  
    this.formValue = this.formBuilder.group({
      name: ['', Validators.required],
      photo: ['', Validators.required],
      manufactureDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      unitprice: [0, [Validators.required, Validators.min(0)]],
      category: [null, Validators.required], 
      supplier: [null, Validators.required], 
      branch: [null, Validators.required], 
    });
  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  loadCategory() {

    this.categoryService.getAllCategory().subscribe({
      next: res => {
        this.categories = res;
        console.log('Categories loaded:', this.categories);
      },
      error: error => {
        console.log('Error loading categories:', error);
      }
    });
  }
  
  loadSupplier() {

    this.supplierService.getAllSupplier().subscribe({
      next: res => {
        this.suppliers = res;
        console.log('Suppliers loaded:', this.suppliers);
      },
      error: error => {
        console.log('Error loading suppliers:', error);
      }
    });
  }

  loadBranch() {

    this.branchService.getAllBranch().subscribe({
      next: res => {
        this.branches = res;
        console.log('Branch loaded:', this.branches);
      },
      error: error => {
        console.log('Error loading Branches:', error);
      }
    });
  }



  onSubmit() {
    if (this.image) {
      console.log('Image selected:', this.image);
      const product: ProductModule = {
        ...this.formValue.value,
        category: { id: this.formValue.value.category } as CategoryModule
      };
      console.log('Submitting product:', product);
  
      this.productService.createProduct(product, this.image).subscribe({
        next: apiResponse => {
          if (apiResponse && apiResponse) {
            console.log('Product added successfully:', apiResponse);
            this.formValue.reset();
            this.router.navigate(['/viewproduct']);
          }
        },
        error: err => {
          console.error('Error adding product:', err.apiResponse?.message);
        }
      });
    } else {
      alert('Please select an image.');
    }
  }


}