import { Component, OnInit } from '@angular/core';
import { CategoryModule } from '../module/category/category.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent implements OnInit{

  category: CategoryModule = new CategoryModule();

  formValue!: FormGroup;
  categoryData: any;

  constructor(private categoryService: CategoryService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      categoryname: [''],
      

    });

  }


  createCategory() {

    this.category.categoryname = this.formValue.value.categoryname;
    


    this.categoryService.createCategory(this.category)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewCategory']);
        },
        error: error => {

          console.log(error);
        }

      });



  }
}
