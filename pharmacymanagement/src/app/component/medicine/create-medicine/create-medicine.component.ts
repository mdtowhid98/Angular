import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../model/category.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicineModel } from '../../../model/medicine.model';
import { CategoryService } from '../../../service/category.service';
import { MedicineService } from '../../../service/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent implements OnInit{


  categories: CategoryModel[] = [];
  
  medicineForm!: FormGroup;
  medicine: MedicineModel = new MedicineModel();
 

  constructor(private categoryService: CategoryService,
    private medicineService: MedicineService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCategories();

    this.medicineForm = this.formBuilder.group({

      name: [''],
      manufacturer:[''],
      price:[''],
      quantity:[''],
      expiryDate:[''],
      category:[null,'']
     
      


    });

   


  }

  loadCategories() {
    this.categoryService.getAllMedicineCategory()
      .subscribe({
        next: res => {
          this.categories = res;
        },
        error: error => {
          console.log(error);

        }
      })

  }



  createMedicine() {

  
    
    

    const medicineData: MedicineModel = {
      ...this.medicineForm.value,
      category: { id: this.medicineForm.value.faculty } 
    };


    this.medicineService.createMedicine(medicineData)
      .subscribe({

        next: res => {
          this.loadCategories();
          this.medicineForm.reset();
          this.router.navigate(['viewmedicine']);
        },
        error: error => {
          console.log(error);
        }

      });
  }
}
