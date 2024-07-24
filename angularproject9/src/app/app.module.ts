import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreateLocationComponent } from './create-location/create-location.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { RegistrationComponent } from './lg/registration/registration.component';
import { LoginComponent } from './lg/login/login.component';
import { LogoutComponent } from './lg/logout/logout.component';
import { UserprofileComponent } from './lg/userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CreateLocationComponent,
    UpdateLocationComponent,
    CreateStudentComponent,
    ViewStudentComponent,
    UpdateStudentComponent,
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
    AppRoutingModule
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
