import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';
import { UpdatesalesComponent } from './sales/updatesales/updatesales.component';
import { authguardGuard } from './guard/auth.guard';
import { ViewsalesproductComponent } from './salesproduct/viewsalesproduct/viewsalesproduct.component';
import { CreatesalesproductComponent } from './salesproduct/createsalesproduct/createsalesproduct.component';


const routes: Routes = [
  {path:"logIn",component:LoginComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"userProfile",component:UserprofileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'viewproduct', component: ViewproductComponent},
  { path: 'createProduct', component: CreateproductComponent,canActivate:[authguardGuard]},
  { path: 'updateProduct/:id', component: UpdateproductComponent,canActivate:[authguardGuard]},
  { path: 'viewsales', component: ViewsalesComponent},
  { path: 'createSales', component: CreatesalesComponent},
  { path: 'updateSales/:id', component: UpdatesalesComponent},
  { path: 'viewAllSalesProduct', component: ViewsalesproductComponent},
  { path: 'createSalesProduct', component: CreatesalesproductComponent},
  { path: '**', redirectTo:'logIn',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
