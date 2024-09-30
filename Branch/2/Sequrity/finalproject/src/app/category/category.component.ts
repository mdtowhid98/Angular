import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';
import { CategoryModule } from '../module/category/category.module';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{

  categories: CategoryModule[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  // Helper method to load the generics
  loadCategories() {
    this.categoryService.getAllCategory().subscribe({
      next: (data: CategoryModule[]) => {
        this.categories = data;
      },
      error: (error) => {
        console.log('Error fetching generics', error);
      }
    });
  }

  // Delete method
  deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          // Refresh the generics list after successful deletion
          this.loadCategories();
        },
        error: (error) => {
          console.log('Error deleting generic', error);
        }
      });
    }
  }

  updateCategory(id: number) {

    this.router.navigate(['/updatecategory', id]);
  }


}