import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  {path:"sidebar",component:SidebarComponent},
  {path:"content",component:ContentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
