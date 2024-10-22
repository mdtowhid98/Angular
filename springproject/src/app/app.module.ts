import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewfacultyComponent } from './component/viewfaculty/viewfaculty.component';
import { CreatefacultyComponent } from './component/createfaculty/createfaculty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ViewDepartmentComponent } from './component/depaerment/view-department/view-department.component';
import { CreateDepartmentComponent } from './component/depaerment/create-department/create-department.component';
import { ViewStudentComponent } from './component/student/view-student/view-student.component';
import { CreatestudentComponent } from './component/student/createstudent/createstudent.component';





@NgModule({
  declarations: [
    AppComponent,
    ViewfacultyComponent,
    CreatefacultyComponent,
    ViewDepartmentComponent,
    CreateDepartmentComponent,
    ViewStudentComponent,
    CreatestudentComponent,
    
    
   
    
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
