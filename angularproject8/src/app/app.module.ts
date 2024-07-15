import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationComponent } from './location/location.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreateLocationComponent } from './create-location/create-location.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CreateLocationComponent,
    UpdateLocationComponent,
    ViewStudentComponent,
    UpdateStudentComponent,
    CreateStudentComponent
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
    
    provideHttpClient(
      withFetch()

    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
