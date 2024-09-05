import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewlocationComponent } from './component/location/viewlocation/viewlocation.component';
import { CreatelocationComponent } from './component/location/createlocation/createlocation.component';
import { ViewhotelComponent } from './component/hotel/viewhotel/viewhotel.component';
import { RoomByHotelComponent } from './component/hotel/room-by-hotel/room-by-hotel.component';


const routes: Routes = [
  {path:"viewlocation",component:ViewlocationComponent},
  {path:"createl",component:CreatelocationComponent},
  {path:"viewhotel",component:ViewhotelComponent},
  {path: 'room/:hotelId', component:RoomByHotelComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
