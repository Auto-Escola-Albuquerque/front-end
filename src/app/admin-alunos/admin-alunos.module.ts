import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAlunosRoutingModule } from './admin-alunos-routing.module';
import { AdminAlunosComponent } from './admin-alunos.component';



@NgModule({
  declarations: [AdminAlunosComponent],
  imports: [
    CommonModule,
    AdminAlunosRoutingModule
  ]
})
export class AdminAlunosModule { }
