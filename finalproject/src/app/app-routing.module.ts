import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';

const routes: Routes = [
  {path:"viewproduct",component:ViewproductComponent},
  {path:"createProduct",component:CreateproductComponent},
  {path:"updateProduct/:id",component:UpdateproductComponent},
  {path:"viewsales",component:ViewsalesComponent},
  {path:"createSales",component:CreatesalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
