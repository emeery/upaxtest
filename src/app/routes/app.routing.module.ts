import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../core/auth/login/login.component';



const rutas: Routes = [
    {path: '', redirectTo: 'aut', pathMatch: 'full'},
    {path: 'aut', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
