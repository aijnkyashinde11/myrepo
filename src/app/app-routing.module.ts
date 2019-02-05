import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: 'home' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
