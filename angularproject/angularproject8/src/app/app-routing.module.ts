import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { authguardGuard } from './guard/authguard.guard';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  { path: "location", component: LocationComponent },
  { path: "createLocation", component: CreateLocationComponent,canActivate:[authguardGuard]},

  { path: "updateLocation/:id", component: UpdateLocationComponent},
  { path: "student", component: ViewStudentComponent },
  { path: "createStudent", component: CreateStudentComponent},
  { path: 'updateStudent/:id', component: UpdateStudentComponent },
  { path: 'reg', component: RegistrationComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'userprofile', component: UserprofileComponent},
  { path: '**', redirectTo:'logIn',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
