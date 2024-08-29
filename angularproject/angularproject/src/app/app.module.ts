import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';
import { UpdatesalesComponent } from './sales/updatesales/updatesales.component';

import { ViewreciptsComponent } from './reciepts/viewrecipts/viewrecipts.component';
import { CreatereciptsComponent } from './reciepts/createrecipts/createrecipts.component';
import { UpdatereciptsComponent } from './reciepts/updaterecipts/updaterecipts.component';
import { NgxPrintModule } from 'ngx-print';
import { RegistrationComponent } from './loginregistration/registration/registration.component';
import { LoginComponent } from './loginregistration/login/login.component';
import { LogoutComponent } from './loginregistration/logout/logout.component';
import { UserprofileComponent } from './loginregistration/userprofile/userprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewproductComponent,
    CreateproductComponent,
    UpdateproductComponent,
    ViewsalesComponent,
    CreatesalesComponent,
    UpdatesalesComponent,

    ViewreciptsComponent,
    CreatereciptsComponent,
    UpdatereciptsComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    UserprofileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NgxPrintModule
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
