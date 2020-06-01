import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../core/auth/login/login.component';
import { UserdetailComponent } from '../components/userdetail/userdetail.component';
import { AuthGuard } from '../core/auth/aut.guard';



const rutas: Routes = [
    {path: '', redirectTo: 'aut', pathMatch: 'full'},
    {path: 'aut', component: LoginComponent},
    {path: 'detail', component: UserdetailComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'aut' }
];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
