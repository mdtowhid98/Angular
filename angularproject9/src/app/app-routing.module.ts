import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { LoginComponent } from './lg/login/login.component';
import { RegistrationComponent } from './lg/registration/registration.component';
import { UserprofileComponent } from './lg/userprofile/userprofile.component';
import { LogoutComponent } from './lg/logout/logout.component';
import { authguardGuard } from './gurd/auth.guard';

const routes: Routes = [
  {path:"location",component:LocationComponent},
  {path:"createLocation",component:CreateLocationComponent,canActivate:[authguardGuard]},
  {path:"updateLocation/:id",component:UpdateLocationComponent},
  {path:"viewstudent",component:ViewStudentComponent},
  {path:"createStudent",component:CreateStudentComponent},
  {path:"updateStudent/:id",component:UpdateStudentComponent},
  {path:"logIn",component:LoginComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"userProfile",component:UserprofileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '**', redirectTo:'logIn',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
