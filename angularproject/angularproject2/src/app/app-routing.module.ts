import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LocationComponent } from './location/location.component';
import { ViewproductsComponent } from './product/viewproducts/viewproducts.component';
import { CreateproductsComponent } from './product/createproducts/createproducts.component';
import { UpdateproductsComponent } from './product/updateproducts/updateproducts.component';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';
import { UpdatesalesComponent } from './sales/updatesales/updatesales.component';



const routes: Routes = [
  {path: 'employee',component:EmployeeComponent},
  {path: 'location',component:LocationComponent},
  {path: 'viewproducts',component:ViewproductsComponent},
  {path: 'createProduct',component:CreateproductsComponent},
  {path: 'updateProduct/:id',component:UpdateproductsComponent},
  {path: 'viewAllsales',component:ViewsalesComponent},
  {path: 'createSales',component:CreatesalesComponent},
  {path: 'updateSales/:id',component:UpdatesalesComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
