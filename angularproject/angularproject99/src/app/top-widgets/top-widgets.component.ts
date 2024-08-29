import { Component, OnInit } from '@angular/core';
import { faBox, faChartBar, faCoffee, faContactBook, faDashboard, faHand, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.css'
})
export class TopWidgetsComponent implements OnInit{
faLocation=faLocation;
faShop=faShop;
faMoneyBill=faMoneyBill;
faContactBook=faContactBook;
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
