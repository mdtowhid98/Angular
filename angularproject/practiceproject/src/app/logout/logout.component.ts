import { Component } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {


  constructor(private authService:AuthserviceService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.logout();
  }

  logout(){

    this.authService.logout();
    this.authService.removeUserDetails();
    this.router.navigate(['logIn']);
  }

}