import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//app routing
import { AppRoutingModule } from './app-routing.module';

// angular material imports
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
//import material card
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
@NgModule({
  declarations: [
    AppComponent,
    BeneficiaryComponent,
    PolicyComponent,
    ClientsComponent,
    ProductsComponent,
    NotFoundComponent,
    HomeComponent,
    AddPolicyComponent,
    PolicyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
