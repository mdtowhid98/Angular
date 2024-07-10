import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { JeeComponent } from './jee/jee.component';
import { IdbComponent } from './idb/idb.component';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './create-location/create-location.component';

const routes: Routes = [
  {path:"jee",component:JeeComponent},
  {path:"idb",component:IdbComponent},
  {path:"location",component:LocationComponent},
  {path:"createLocation",component:CreateLocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
