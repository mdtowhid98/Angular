import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { UpdateStudentComponent } from './students/update-student/update-student.component';

const routes: Routes = [
  {path:"student",component:StudentComponent},
  {path:"location",component:LocationComponent},
  {path:"createLocation",component:CreateLocationComponent},
  {path:"updateLocation/:id",component:UpdateLocationComponent},
  {path:"students",component:ViewStudentComponent},
  {path:"createStudents",component:CreateStudentComponent},
  {path: 'updatestudent/:id', component:UpdateStudentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
