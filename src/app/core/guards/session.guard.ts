import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  private checkCookieSession(): boolean | UrlTree {
    try {
      const tokenExists = this.cookieService.check('token');
      if (!tokenExists) {
        return this.router.createUrlTree(['/auth']); // Redirige al login si no hay token
      } else {
        return tokenExists
      }
    } catch (e) {
      console.error('Error al verificar la sesión: ', e);
      return this.router.createUrlTree(['/auth']); // Redirige al login en caso de error
    }
  }
}
