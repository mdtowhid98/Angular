import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';
import { UpdatesalesComponent } from './sales/updatesales/updatesales.component';
import { LoginComponent } from './loginregistration/login/login.component';
import { RegistrationComponent } from './loginregistration/registration/registration.component';
import { UserprofileComponent } from './loginregistration/userprofile/userprofile.component';
import { LogoutComponent } from './loginregistration/logout/logout.component';
import { authGuard } from './loginregistration/auth.guard';
import { RoleGuard } from './loginregistration/role.guard';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CategoryComponent } from './category/category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

const routes: Routes = [
  {path:"viewproduct",component:ViewproductComponent},
  {path:"createProduct",component:CreateproductComponent, canActivate:[authGuard,RoleGuard],data: { role: 'Admin' }},
  {path:"updateProduct/:id",component:UpdateproductComponent,canActivate:[authGuard]},
  {path:"viewsales",component:ViewsalesComponent},
  {path:"createSales",component:CreatesalesComponent,canActivate:[authGuard,RoleGuard],data: { role: 'Admin' }},

  {path:"updateSales/:id",component:UpdatesalesComponent},
  {path:"logIn",component:LoginComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"home",component:HomeComponent},
  {path:"invoice",component:InvoiceComponent},
  {path:"viewCategory",component:CategoryComponent},
  {path:"createCategory",component:CreateCategoryComponent},
  {
    path: 'userprofile',
    component: UserprofileComponent,
    canActivate: [authGuard, RoleGuard],
    data:{role: ['Admin','User']}
    
  },
  { path: 'logout', component: LogoutComponent},
  { path: '**', redirectTo:'logIn',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
