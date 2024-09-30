import { Component } from '@angular/core';
import { faHome, faUser, faSignInAlt, faSignOutAlt, faUserPlus, faSearch, faAppleAlt, faEye, faPlus, faShoppingCart, faChartLine, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faAppleAlt = faAppleAlt;
  faEye = faEye;
  faPlus = faPlus;
  faShoppingCart = faShoppingCart;
  faChartLine = faChartLine;
  constructor(){}
}
