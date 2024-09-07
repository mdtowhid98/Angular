import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMedicineCategoryComponent } from './component/category/view-medicine-category/view-medicine-category.component';
import { CreateMedicineCategoryComponent } from './component/category/create-medicine-category/create-medicine-category.component';
import { ViewMedicineComponent } from './component/medicine/view-medicine/view-medicine.component';
import { CreateMedicineComponent } from './component/medicine/create-medicine/create-medicine.component';
import { MainnavComponent } from './layout/mainnav/mainnav.component';

const routes: Routes = [
  {path:"viewcategory",component:ViewMedicineCategoryComponent},
  {path:"createcategory",component:CreateMedicineCategoryComponent},
  {path:"viewmedicine",component:ViewMedicineComponent},
  {path:"createmedicine",component:CreateMedicineComponent},
  {path:"mainnav",component:MainnavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
