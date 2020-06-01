import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutService } from './aut.service';
import { Injectable } from '@angular/core';
@Injectable()
// protege las rutas con autorización
export class AuthGuard implements CanActivate {
  constructor(
    private autService: AutService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    estado: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const estaAut = this.autService.getIsAut();
    if (!estaAut) {
      this.router.navigate(['/aut'])
    }
    return estaAut;
  }
}
