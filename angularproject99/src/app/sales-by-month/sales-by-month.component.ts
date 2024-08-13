import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { title } from 'process';


@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.css'
})
export class SalesByMonthComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line',
      height:325
    },
    title: {
      text: 'Month Wishes Sales'
    },
    xAxis:{
      categories:[
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis:{
      title:{
        text:'Revenue in tk'
      }
    },
    series:[
      {
        name:"Towhid",
        type:"line",
        data:[1,20,35,12,57,65,75,25,90,102,118,120]
      },
      {
        name:"raju",
        type:"line",
        data:[0,55,12,93,4,55,120,150,90,100,113,110]
      }
      
      
    ],
    credits:{
      enabled:false
    }

  })

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
