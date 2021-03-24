import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAlunosComponent } from './admin-alunos.component';
import { FormGroup, FormControl } from '@angular/forms';


@NgModule({
  declarations: [AdminAlunosComponent],
  imports: [
    CommonModule,
    FormGroup,
    FormControl
  ]
})
export class AdminAlunosModule { }
