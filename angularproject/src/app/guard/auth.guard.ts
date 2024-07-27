import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{
  constructor(
    private authService: AuthService,
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