import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './model/user.model';
import { Subject } from 'rxjs';
const BACKEND_URL = environment.apiUrl + '/user/';

@Injectable({
  providedIn: 'root'
})

export class AutService {
  private token: string; // almacena el token para la autorización
  private isAut = false; // booleano para saber si esta logueado
  private autListen = new Subject<boolean>(); // observable para compartir el dato booleano
  constructor(
    private http: HttpClient, private router: Router
  ) { }
  getToken() {return this.token; }
  getIsAut() { return this.isAut; }
  onLogin(email: string, password:string) {
    const user: User = {email, password};
    this.http.post<{user: string, token: string}>(
      BACKEND_URL + 'login', user)
    .subscribe(res => {
      console.log('res', res);
      const token = res.token;
      this.token = token;
      if (token) {
        this.isAut = true;
        this.autListen.next(true);
      }
      this.router.navigate(['/']);
    }, e => {  });
  }
}
