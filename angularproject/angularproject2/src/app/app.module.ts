import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LocationComponent } from './location/location.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewproductsComponent } from './product/viewproducts/viewproducts.component';
import { UpdateproductsComponent } from './product/updateproducts/updateproducts.component';
import { CreateproductsComponent } from './product/createproducts/createproducts.component';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';
import { UpdatesalesComponent } from './sales/updatesales/updatesales.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LocationComponent,
    ViewproductsComponent,
    UpdateproductsComponent,
    CreateproductsComponent,
    ViewsalesComponent,
    CreatesalesComponent,
    UpdatesalesComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    // provideClientHydration()
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
