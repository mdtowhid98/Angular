import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TowhidComponent } from './towhid/towhid.component';

const routes: Routes = [


  {path:'towhid',component:TowhidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
