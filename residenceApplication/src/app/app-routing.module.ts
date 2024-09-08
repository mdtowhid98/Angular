import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewResidenceComponent } from './component/view-residence/view-residence.component';
import { CreateResidenceComponent } from './component/create-residence/create-residence.component';

const routes: Routes = [
  {path:"viewrecidence",component:ViewResidenceComponent},
  {path:"createrecidence",component:CreateResidenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
