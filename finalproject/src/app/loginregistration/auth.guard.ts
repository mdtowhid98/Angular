import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class authGuard implements CanActivate{
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log(this.authService.getToken())
      return true;
    } else {
      this.router.navigate(['/logIn ']);
      return false;
    }
  }


};