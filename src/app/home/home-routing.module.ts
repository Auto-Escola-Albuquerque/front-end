import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TurmasComponent } from '../turmas/turmas.component';
import { AdminAlunosComponent } from '../admin-alunos/admin-alunos.component';
import { AdminInstrutorComponent } from '../admin-instrutor/admin-instrutor.component';
import { AdminFuncionariosComponent } from '../admin-funcionarios/admin-funcionarios.component';
import { AdminFranquiasComponent } from '../admin-franquias/admin-franquias.component';
import { AlunosTeoricosComponent } from '../alunos-teoricos/alunos-teoricos.component';
import { AlunosPraticosComponent } from '../alunos-praticos/alunos-praticos.component';
import { TabelaPraticaComponent } from '../tabela-pratica/tabela-pratica.component';
import { MainNavComponent } from '../main-nav/main-nav.component';

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
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
            {path: 'nav', component: MainNavComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
