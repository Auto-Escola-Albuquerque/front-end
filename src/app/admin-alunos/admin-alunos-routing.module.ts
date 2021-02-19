import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminAlunosComponent } from './admin-alunos.component';


const routes: Routes = [
    {path: 'admin-alunos', component: AdminAlunosComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminAlunosRoutingModule { }
