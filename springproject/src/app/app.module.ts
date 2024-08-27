import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewfacultyComponent } from './component/viewfaculty/viewfaculty.component';
import { CreatefacultyComponent } from './component/createfaculty/createfaculty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ViewdepartmentComponent } from './component/department/viewdepartment/viewdepartment.component';
import { CreatedepartmentComponent } from './component/department/createdepartment/createdepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewfacultyComponent,
    CreatefacultyComponent,
    ViewdepartmentComponent,
    CreatedepartmentComponent
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
