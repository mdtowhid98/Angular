import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { UpdateStudentComponent } from './students/update-student/update-student.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LocationComponent,
    CreateLocationComponent,
    UpdateLocationComponent,
    ViewStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent
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
