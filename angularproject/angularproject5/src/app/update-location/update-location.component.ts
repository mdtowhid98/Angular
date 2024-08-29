import { Component, OnInit } from '@angular/core';
import { Location } from '../location/location.model';
import { LocationserviceService } from '../location/locationservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrl: './update-location.component.css'
})
export class UpdateLocationComponent implements OnInit{

id:string="";
location:Location=new Location();

constructor(private locationService:LocationserviceService,
  private router:Router,
  private route:ActivatedRoute
  
  ){


}



  ngOnInit(): void {
    
this.location=new Location();
this.id=this.route.snapshot.params['id'];
this.locationService.getById(this.id)
.subscribe({

  next:res=>{
    this.location=res;
    console.log(res);
  },
  error:error=>{

    console.log(error);
  }


});

  }

  updateLocation(){

    this.locationService.updateLocation(this.id,this.location)
    .subscribe({
      next:res=>{
        this.location=new Location();
        this.router.navigate(['/location']);
      },
      error:error=>{
        console.log(error);
      }

    });
  }

}
