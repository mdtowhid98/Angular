import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewfacultyComponent } from './component/viewfaculty/viewfaculty.component';
import { CreatefacultyComponent } from './component/createfaculty/createfaculty.component';
import { ViewDepartmentComponent } from './component/depaerment/view-department/view-department.component';
import { CreateDepartmentComponent } from './component/depaerment/create-department/create-department.component';
import { ViewStudentComponent } from './component/student/view-student/view-student.component';



const routes: Routes = [
  {path:"viewFaculty",component:ViewfacultyComponent},
  {path:"createFaculty",component:CreatefacultyComponent},
  {path:"viewDepartment",component:ViewDepartmentComponent},
  {path:"createDepartment",component:CreateDepartmentComponent},
  {path:"viewstudent",component:ViewStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
