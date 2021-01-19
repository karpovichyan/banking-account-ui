import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userId = localStorage.getItem('userId');
    if (userId == null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
