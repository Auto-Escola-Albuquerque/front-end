import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAlunosComponent } from '../admin-alunos/admin-alunos.component';
import { AdminInstrutorComponent } from '../admin-instrutor/admin-instrutor.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminFuncionariosComponent } from '../admin-funcionarios/admin-funcionarios.component';
import { AdminFranquiasComponent } from '../admin-franquias/admin-franquias.component';
import { AlunosTeoricosComponent } from '../alunos-teoricos/alunos-teoricos.component';
import { TabelaPraticaComponent } from '../tabela-pratica/tabela-pratica.component';
import { AdminClassesComponent } from '../admin-classes/admin-classes.component';
import {TrafficTicketComponent} from '../traffic-ticket/traffic-ticket.component';
import {InstrutorTeoricoComponent} from '../instrutor-teorico/instrutor-teorico.component';
import {AuthGuardService} from '../shared/auth-guard.service';
import {MainNavComponent} from './main-nav.component';
import {AdminTabelasPraticasComponent} from '../admin-tabelas-praticas/admin-tabelas-praticas.component';
import {AlunosComponent} from '../alunos/alunos.component';

const routes: Routes = [
  {
        path: 'home',
        component: MainNavComponent,
        canActivateChild: [AuthGuardService],
        children: [
            {path: 'admin-alunos', component: AdminAlunosComponent},
            {path: 'admin-instrutor', component: AdminInstrutorComponent},
            {path: 'admin-funcionarios', component: AdminFuncionariosComponent},
            {path: 'admin-franquias', component: AdminFranquiasComponent},
            {path: 'admin-classes', component: AdminClassesComponent},
            {path: 'admin-tabelas-praticas', component: AdminTabelasPraticasComponent},
            {path: 'tabela-pratica', component: TabelaPraticaComponent},
            {path: 'tabela-pratica/:id', component: TabelaPraticaComponent},
            {path: 'turma/:id', component: AlunosTeoricosComponent},
            {path: 'multas', component: TrafficTicketComponent},
            {path: 'instrutor/:id', component: InstrutorTeoricoComponent},
            {path: 'alunos/:id', component: AlunosComponent}
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
  ],
})
export class MainNavRoutingModule { }
