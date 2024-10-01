import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';
import { UpdatesalesComponent } from './sales/updatesales/updatesales.component';
import { LoginComponent } from './loginregistration/login/login.component';

import { UserprofileComponent } from './loginregistration/userprofile/userprofile.component';
import { LogoutComponent } from './loginregistration/logout/logout.component';
// import { authGuard } from './guard/auth.guard';
// import { RoleGuard } from './guard/role.guard';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CategoryComponent } from './category/category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCtegoryComponent } from './category/update-ctegory/update-ctegory.component';
import { RegisterComponent } from './loginregistration/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { RoleGuard } from './guard/role.guard';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';
import { CreatesupplierComponent } from './supplier/createsupplier/createsupplier.component';
import { UpdatesupplierComponent } from './supplier/updatesupplier/updatesupplier.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';


import { ViewsalesDetailsComponent } from './salesDetails/viewsales-details/viewsales-details.component';
import { ViewBranchComponent } from './branch/view-branch/view-branch.component';
import { CreateBranchComponent } from './branch/create-branch/create-branch.component';
import { UpdateBranchComponent } from './branch/update-branch/update-branch.component';
import { CreateSalesComponent } from './bananiBranch/create-sales/create-sales.component';
import { CreateSalesGulshanBranceComponent } from './gulshanBrance/create-sales-gulshan-brance/create-sales-gulshan-brance.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { LatestOffersComponent } from './latest-offers/latest-offers.component';
import { HealthtipsComponent } from './healthtips/healthtips.component';
import { BananiBranceInvoiceComponent } from './invoice/banani-brance-invoice/banani-brance-invoice.component';
import { GulshanBranceInvoiceComponent } from './invoice/gulshan-brance-invoice/gulshan-brance-invoice.component';

const routes: Routes = [
  {path:"viewproduct",component:ViewproductComponent},
  {path:"createProduct",component:CreateproductComponent},
  {path:"updateProduct/:id",component:UpdateproductComponent},
  {path:"viewsales",component:ViewsalesComponent},
  {path:"createSales",component:CreatesalesComponent},
  {path:"updatecategory/:id",component:UpdateCtegoryComponent},
  {path:"updateSales/:id",component:UpdatesalesComponent},
  {path:"logIn",component:LoginComponent},
  {path: 'reg', component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"invoice",component:InvoiceComponent},
  {path:"viewCategory",component:CategoryComponent},
  {path:"createCategory",component:CreateCategoryComponent},
  {path:"viewsupplier",component:ViewSupplierComponent},
  {path:"createsupplier",component:CreatesupplierComponent},
  {path:"updatesupplier/:id",component:UpdatesupplierComponent},
  {path:"viewcustomer",component:ViewCustomerComponent},
  {path:"createcustomer",component:CreateCustomerComponent},
  {path:"updatecustomer/:id",component:UpdateCustomerComponent},

  {path:"salesdetails",component:ViewsalesDetailsComponent},
  {path:"viewbranch",component:ViewBranchComponent},
  {path:"createbranch",component:CreateBranchComponent},
  {path:"updatebranch/:id",component:UpdateBranchComponent},
  {path:"salesbananibranch",component:CreateSalesComponent},
  {path:"salesgulshanbranch",component:CreateSalesGulshanBranceComponent},
  {path:"featuredproducts",component:FeaturedProductComponent},
  {path:"offers",component:LatestOffersComponent},
  {path:"helthtips",component:HealthtipsComponent},
  {path:"bananiinvoice",component:BananiBranceInvoiceComponent},
  {path:"gulshaninvoice",component:GulshanBranceInvoiceComponent},
  {
    path: 'userprofile',
    component: UserprofileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data:{role: ['ADMIN','USER','PHARMACIST']}
    
  },
  { path: 'logout', component: LogoutComponent},
  { path: '**', redirectTo:'logIn',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
