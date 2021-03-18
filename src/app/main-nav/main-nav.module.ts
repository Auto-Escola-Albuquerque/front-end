import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav.component';
import { MainNavRoutingModule } from './main-nav-routing.module';



@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MainNavRoutingModule
  ]
})
export class MainNavModule { }
