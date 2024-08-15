import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'beneficiary',
    component: BeneficiaryComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'policies',
    component: PolicyComponent,
  },
  {
    path: 'policy-add',
    component: AddPolicyComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
