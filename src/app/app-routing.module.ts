import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {CheckFranchiseComponent} from './check-franchise/check-franchise.component';
import {FirstPageComponent} from './first-page/first-page.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'franquia', component: CheckFranchiseComponent},
    // {path: '**', component: NotFoundComponent},
    {path: 'home', component: MainNavComponent, canActivate: [AuthGuardService], loadChildren: () => import('./main-nav/main-nav.module').then(m => m.MainNavModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
