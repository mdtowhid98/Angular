import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';

import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';
import { UpdatesalesComponent } from './sales/updatesales/updatesales.component';

import { LoginComponent } from './loginregistration/login/login.component';
import { LogoutComponent } from './loginregistration/logout/logout.component';
import { UserprofileComponent } from './loginregistration/userprofile/userprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InvoiceComponent } from './invoice/invoice.component';
import { CategoryComponent } from './category/category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { CategoryService } from './service/category.service';
import { UpdateCtegoryComponent } from './category/update-ctegory/update-ctegory.component';
import { TokenInterceptor } from './guard/TokenInterceptor';
import { RegisterComponent } from './loginregistration/register/register.component';
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






@NgModule({
  declarations: [
    AppComponent,
   
    ViewproductComponent,
    CreateproductComponent,
    UpdateproductComponent,
    ViewsalesComponent,
    CreatesalesComponent,
    UpdatesalesComponent,
    
    LoginComponent,
    LogoutComponent,
    UserprofileComponent,
    NavbarComponent,
    HomeComponent,
    InvoiceComponent,
    CategoryComponent,
    CreateCategoryComponent,
    FilterByCategoryPipe,
    UpdateCtegoryComponent,
    RegisterComponent,
    ViewSupplierComponent,
    CreatesupplierComponent,
    UpdatesupplierComponent,
    ViewCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    
   
    ViewsalesDetailsComponent,
    ViewBranchComponent,
    CreateBranchComponent,
    UpdateBranchComponent,
    CreateSalesComponent,
    CreateSalesGulshanBranceComponent,
    FeaturedProductComponent,
    LatestOffersComponent,
    HealthtipsComponent,
    BananiBranceInvoiceComponent,
    GulshanBranceInvoiceComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NgxPrintModule,
    FontAwesomeModule
  ],
  
  providers: [
    // provideClientHydration(),
    provideHttpClient(
      withFetch()
    ),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
