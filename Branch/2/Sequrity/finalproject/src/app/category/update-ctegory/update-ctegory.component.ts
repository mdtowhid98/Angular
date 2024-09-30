import { Component, OnInit } from '@angular/core';
import { CategoryModule } from '../../module/category/category.module';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-ctegory',
  templateUrl: './update-ctegory.component.html',
  styleUrl: './update-ctegory.component.css'
})
export class UpdateCtegoryComponent implements OnInit{

  id: number=0;
  category: CategoryModule = new CategoryModule();

  constructor(private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }






  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getById(this.id)
      .subscribe({

        next: res => {
          this.category = res;
          console.log(this.category );
          console.log(res);
        },
        error: error => {
          console.log(error);
        }

      });
  }

  updateCategory() {

    this.categoryService.updateCategories(this.id, this.category)

      .subscribe({
        next: res => {
         console.log(res);
         
          this.router.navigate(['/viewCategory']);
        },
        error: error => {
          console.log(error);
        }

      });
  }
  



}
