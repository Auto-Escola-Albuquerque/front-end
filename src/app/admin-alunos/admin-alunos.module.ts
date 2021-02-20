import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAlunosRoutingModule } from './admin-alunos-routing.module';
import { AdminAlunosComponent } from './admin-alunos.component';
import { FormGroup, FormControl } from '@angular/forms';


@NgModule({
  declarations: [AdminAlunosComponent],
  imports: [
    CommonModule,
    AdminAlunosRoutingModule,
    FormGroup,
    FormControl
  ]
})
export class AdminAlunosModule { }
