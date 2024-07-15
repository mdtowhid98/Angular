import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';

const routes: Routes = [
  {path:"location",component:LocationComponent},
  {path:"createLocation",component:CreateLocationComponent},
  
  {path:"updateLocation/:id",component:UpdateLocationComponent},
  {path:"student",component:ViewStudentComponent},
  {path:"createStudent",component:CreateStudentComponent},
  {path: 'updateStudent/:id', component:UpdateStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
