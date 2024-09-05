import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewlocationComponent } from './component/location/viewlocation/viewlocation.component';
import { CreatelocationComponent } from './component/location/createlocation/createlocation.component';

const routes: Routes = [
  {path:"viewlocation",component:ViewlocationComponent},
  {path:"createl",component:CreatelocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
