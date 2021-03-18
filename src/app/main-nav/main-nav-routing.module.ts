import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAlunosComponent } from '../admin-alunos/admin-alunos.component';
import { AdminInstrutorComponent } from '../admin-instrutor/admin-instrutor.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminFuncionariosComponent } from '../admin-funcionarios/admin-funcionarios.component';
import { AdminFranquiasComponent } from '../admin-franquias/admin-franquias.component';
import { AlunosTeoricosComponent } from '../alunos-teoricos/alunos-teoricos.component';
import { AlunosPraticosComponent } from '../alunos-praticos/alunos-praticos.component';
import { TurmasComponent } from '../turmas/turmas.component';
import { TabelaPraticaComponent } from '../tabela-pratica/tabela-pratica.component';
import { MainNavComponent } from './main-nav.component';

const routes: Routes = [
    {
        path: '', 
        component: MainNavComponent,
        children: [
            {path: 'admin-alunos', component: AdminAlunosComponent},
            {path: 'admin-instrutor', component: AdminInstrutorComponent},
            {path: 'admin-funcionarios', component: AdminFuncionariosComponent},
            {path: 'admin-franquias', component: AdminFranquiasComponent},
            {path: 'alunos-teoricos', component: AlunosTeoricosComponent},
            {path: 'alunos-praticos', component: AlunosPraticosComponent},
            {path: 'turmas', component: TurmasComponent},
            {path: 'tabela-pratica', component: TabelaPraticaComponent},
            {path: 'turmas', component: TurmasComponent},
        ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainNavRoutingModule { }
