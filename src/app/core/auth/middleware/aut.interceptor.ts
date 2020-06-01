import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutService } from '../aut.service';
import { Observable } from 'rxjs';
// manipula la solicitud y agrega el token en el header authorization
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private autService: AutService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const token = this.autService.getToken();
    const authSolicitud = req.clone({
      headers: req.headers.set('authorization', 'Bearer ' + token)
    });
    return next.handle(authSolicitud);
  }
}
