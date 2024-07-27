import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ViewsalesComponent } from './sales/viewsales/viewsales.component';
import { CreatesalesComponent } from './sales/createsales/createsales.component';
import { UpdatesalesComponent } from './sales/updatesales/updatesales.component';

@NgModule({
  declarations: [
    AppComponent,
   
    ViewproductComponent,
    CreateproductComponent,
    UpdateproductComponent,
    ViewsalesComponent,
    CreatesalesComponent,
    UpdatesalesComponent
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
    // provideClientHydration(),
    provideHttpClient(
      withFetch()
    )

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
