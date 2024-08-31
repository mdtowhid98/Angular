import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductModule } from '../../module/product/product.module';
import { Router } from '@angular/router';
import { UserModule } from '../../module/user/user.module';
import { AuthService } from '../../service/auth.service';

interface ProductWithCategory extends ProductModule {
  categoryname: string;
}

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  productsByCategory: { [key: string]: ProductWithCategory[] } = {};
  filteredProducts: ProductWithCategory[] = [];
  dropdownVisible = false;

  userRole: string | null = '';
  currentUser: UserModule | null = null;

  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private productService: ProductService,
    private authService:AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    this.authService.currentUser$.subscribe(user =>{
      this.currentUser = user;
      this.userRole = user?.role || null;
    });
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  filterByCategory(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedCategory = target.value;

    if (selectedCategory) {
      this.filteredProducts = this.productsByCategory[selectedCategory] || [];
    } else {
      this.filteredProducts = this.getAllProducts();
    }
  }

  loadProducts(): void {
    this.productService.getProduct().subscribe((data: ProductModule[]) => {
      // console.log('Received products data:', data); // Log the data for inspection
      this.groupProductsByCategory(data);
      this.filteredProducts = this.getAllProducts(); // Initially display all products
    });
  }
  

  groupProductsByCategory(products: ProductModule[]): void {
    this.productsByCategory = {};
  
    products.forEach(product => {
      const categories = Array.isArray(product.categories) ? product.categories : [product.categories];
  
      categories.forEach(category => {
        if (category && category.categoryname) { // Check if category and categoryname exist
          if (!this.productsByCategory[category.categoryname]) {
            this.productsByCategory[category.categoryname] = [];
          }
          const productWithCategory: ProductWithCategory = { ...product, categoryname: category.categoryname };
          this.productsByCategory[category.categoryname].push(productWithCategory);
        } else {
          // console.warn('Category or categoryname is undefined for product:', product);
        }
      });
    });
  }
  

  getAllProducts(): ProductWithCategory[] {
    return Object.values(this.productsByCategory).flat();
  }

  getCategoryKeys(): string[] {
    return Object.keys(this.productsByCategory);
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.loadProducts(); // Reload products after deletion
        this.router.navigate(['/viewproduct']);
      },
      error: error => {
        console.error(error);
      }
    });
  }

  updateProduct(id: string): void {
    this.router.navigate(['updateProduct', id]);
  }
}
