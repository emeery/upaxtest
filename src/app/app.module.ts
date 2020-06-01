import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { HeaderComponent } from './core/layout/header/header.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { AuthInterceptor } from './core/auth/middleware/aut.interceptor';
import { ErrorComponent } from './core/auth/error/error.component';
import { ErrorInterceptor } from './core/auth/middleware/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UserdetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  entryComponents: [ErrorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
