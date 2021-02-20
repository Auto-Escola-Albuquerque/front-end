import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmasComponent } from './turmas/turmas.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { AdminAlunosComponent } from './admin-alunos/admin-alunos.component';
import { AdminInstrutorComponent } from './admin-instrutor/admin-instrutor.component';
import { AdminFranquiasComponent } from './admin-franquias/admin-franquias.component';
import { AdminFuncionariosComponent } from './admin-funcionarios/admin-funcionarios.component';
import { AlunosPraticosComponent } from './alunos-praticos/alunos-praticos.component';
import { AlunosTeoricosComponent } from './alunos-teoricos/alunos-teoricos.component';
import { TabelaPraticaComponent } from './tabela-pratica/tabela-pratica.component';
import { ModuloInstrutorComponent } from './modulo-instrutor/modulo-instrutor.component';
import { AdminAlunosRoutingModule } from './admin-alunos/admin-alunos-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TurmasComponent,
    HomeComponent,
    AdminAlunosComponent,
    AdminInstrutorComponent,
    AdminFranquiasComponent,
    AdminFuncionariosComponent,
    AlunosPraticosComponent,
    AlunosTeoricosComponent,
    TabelaPraticaComponent,
    ModuloInstrutorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeRoutingModule,
    AdminAlunosRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
