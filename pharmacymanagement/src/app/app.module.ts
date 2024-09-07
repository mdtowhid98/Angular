import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewMedicineCategoryComponent } from './component/category/view-medicine-category/view-medicine-category.component';
import { CreateMedicineCategoryComponent } from './component/category/create-medicine-category/create-medicine-category.component';
import { ViewMedicineComponent } from './component/medicine/view-medicine/view-medicine.component';
import { CreateMedicineComponent } from './component/medicine/create-medicine/create-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMedicineCategoryComponent,
    CreateMedicineCategoryComponent,
    ViewMedicineComponent,
    CreateMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
