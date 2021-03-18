import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmasComponent } from './turmas/turmas.component';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
    MatSortModule, MatTableModule, MatButtonModule } from "@angular/material";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { MainNavRoutingModule } from './main-nav/main-nav-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    TurmasComponent,
    AdminAlunosComponent,
    AdminInstrutorComponent,
    AdminFranquiasComponent,
    AdminFuncionariosComponent,
    AlunosPraticosComponent,
    AlunosTeoricosComponent,
    TabelaPraticaComponent,
    ModuloInstrutorComponent,
    LoginComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminAlunosRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MomentDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MainNavRoutingModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
