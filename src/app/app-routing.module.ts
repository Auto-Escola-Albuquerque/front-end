import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {AdminAlunosComponent} from './admin-alunos/admin-alunos.component';
import {AdminInstrutorComponent} from './admin-instrutor/admin-instrutor.component';
import {AdminFuncionariosComponent} from './admin-funcionarios/admin-funcionarios.component';
import {AdminFranquiasComponent} from './admin-franquias/admin-franquias.component';
import {AdminClassesComponent} from './admin-classes/admin-classes.component';
import {AlunosPraticosComponent} from './alunos-praticos/alunos-praticos.component';
import {TurmasComponent} from './turmas/turmas.component';
import {TabelaPraticaComponent} from './tabela-pratica/tabela-pratica.component';
import {AlunosTeoricosComponent} from './alunos-teoricos/alunos-teoricos.component';
import {TrafficTicketComponent} from './traffic-ticket/traffic-ticket.component';
import {InstrutorTeoricoComponent} from './instrutor-teorico/instrutor-teorico.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
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
        {path: 'alunos-praticos', component: AlunosPraticosComponent},
        {path: 'turmas', component: TurmasComponent},
        {path: 'tabela-pratica', component: TabelaPraticaComponent},
        {path: 'turma/:id', component: AlunosTeoricosComponent},
        {path: 'multas', component: TrafficTicketComponent},
        {path: 'instrutor/:id', component: InstrutorTeoricoComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
