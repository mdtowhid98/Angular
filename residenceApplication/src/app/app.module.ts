import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ViewResidenceComponent } from './component/view-residence/view-residence.component';
import { CreateResidenceComponent } from './component/create-residence/create-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewResidenceComponent,
    CreateResidenceComponent
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
