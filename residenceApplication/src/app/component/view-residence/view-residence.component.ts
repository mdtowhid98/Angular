import { Component } from '@angular/core';
import { ResidenceService } from '../../service/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-residence',
  templateUrl: './view-residence.component.html',
  styleUrl: './view-residence.component.css'
})
export class ViewResidenceComponent {
 
  residence: any;
  

  constructor(
    private residenceService: ResidenceService,
  
   
    private router: Router

  ) { }

  ngOnInit(): void {

    this.loadResidence();
  }


  loadResidence() {

   
    this.residenceService.getAllResidence().subscribe({

      next: res => {
        this.residence = res;
      },

      error: err => {
        console.log(err)

      }

    });


  }

 
  
}
