import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewlocationComponent } from './component/location/viewlocation/viewlocation.component';
import { CreatelocationComponent } from './component/location/createlocation/createlocation.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewhotelComponent } from './component/hotel/viewhotel/viewhotel.component';
import { CreatehotelComponent } from './component/hotel/createhotel/createhotel.component';
import { RoomByHotelComponent } from './component/hotel/room-by-hotel/room-by-hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewlocationComponent,
    CreatelocationComponent,
    ViewhotelComponent,
    CreatehotelComponent,
    RoomByHotelComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    // provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
