import { Component, OnInit } from '@angular/core';
import { faBox, faChartBar, faCoffee, faContactBook, faDashboard, faHand, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop=faShop;
  faBox=faBox;
  faMoneyBill=faMoneyBill;
  faChartBar=faChartBar;
  faContactBook=faContactBook;
  faHand=faHand;
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
