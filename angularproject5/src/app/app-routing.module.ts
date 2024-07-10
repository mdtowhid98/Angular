import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';

const routes: Routes = [
  {path:"student",component:StudentComponent},
  {path:"location",component:LocationComponent},
  {path:"createLocation",component:CreateLocationComponent},
  {path:"updateLocation/:id",component:UpdateLocationComponent},
  {path:"students",component:ViewStudentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
