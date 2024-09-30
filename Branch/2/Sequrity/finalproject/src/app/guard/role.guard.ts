import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      const expectedRole = route.data['role'] as Array<string>;
      return this.authService.userRole$.pipe( // userRole$ observable from AuthService
        map(role => {
          if (role && expectedRole.includes(role)) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        })
      );
    }
}