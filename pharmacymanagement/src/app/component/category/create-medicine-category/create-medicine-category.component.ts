import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../model/category.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../../../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine-category',
  templateUrl: './create-medicine-category.component.html',
  styleUrl: './create-medicine-category.component.css'
})
export class CreateMedicineCategoryComponent implements OnInit{


  category: CategoryModel = new CategoryModel();

  formValue!: FormGroup;
  categoryData: any;

  constructor(private categoryService: CategoryService,
    private router: Router,
  
    private formBuilder: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      name: [''],
      

    });

  }


  createCategory() {

    this.category.name = this.formValue.value.name;
    


    this.categoryService.createMedicineCategory(this.category)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewcategory']);
        },
        error: error => {

          console.log(error);
        }

      });



  }


}
