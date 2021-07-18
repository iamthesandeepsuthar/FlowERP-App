import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './auth.service';
import { AlertService } from './alert.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  defaultRedirectUrl = '';
  constructor(private readonly _authService: AuthenticationService, private readonly _alertService: AlertService, private readonly _router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (state.url !== this.defaultRedirectUrl) {
      const isAccessible = this._authService.IsAccessibleUrl(state.url);
      if (isAccessible) {
        return true;
      } else {
        this._alertService.error("Access Denied!!");
        this._router.navigate([this.defaultRedirectUrl]);
        return false;
      }
    } else {
      return true;
    }
  }

}
