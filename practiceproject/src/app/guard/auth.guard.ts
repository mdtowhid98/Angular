import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class authguardGuard implements CanActivate{

  constructor(
    private authService: AuthserviceService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.getToken()) {
      console.log(this.authService.getToken())
      return true;
    } else {
      this.router.navigate(['/logIn']);
      return false;
    }
  }


};