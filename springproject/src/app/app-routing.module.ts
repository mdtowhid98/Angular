import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewfacultyComponent } from './component/viewfaculty/viewfaculty.component';
import { CreatefacultyComponent } from './component/createfaculty/createfaculty.component';
import { ViewdepartmentComponent } from './component/department/viewdepartment/viewdepartment.component';

const routes: Routes = [
  {path:"viewFaculty",component:ViewfacultyComponent},
  {path:"createFaculty",component:CreatefacultyComponent},
  {path:"viewDepartment",component:ViewdepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
