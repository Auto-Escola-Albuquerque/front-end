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
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { AdminClassesComponent } from './admin-classes/admin-classes.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { AutoescolaService } from './shared/autoescola.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AdminAlunosDialogComponent } from './admin-alunos-dialog/admin-alunos-dialog.component';
import { AdminInstrutorDialogComponent } from './admin-instrutor-dialog/admin-instrutor-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { TrafficTicketComponent } from './traffic-ticket/traffic-ticket.component';
import { TrafficTicketBoxComponent } from './traffic-ticket-box/traffic-ticket-box.component';
import { AdminFuncionariosDialogComponent } from './admin-funcionarios-dialog/admin-funcionarios-dialog.component';
import { InstrutorTeoricoComponent } from './instrutor-teorico/instrutor-teorico.component';
import { InstructorClassDialogComponent } from './instructor-class-dialog/instructor-class-dialog.component';
import {SnackBarService} from './shared/snack-bar.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    AdminClassesComponent,
    DialogBoxComponent,
    AdminAlunosDialogComponent,
    AdminInstrutorDialogComponent,
    DeleteDialogComponent,
    TrafficTicketComponent,
    TrafficTicketBoxComponent,
    AdminFuncionariosDialogComponent,
    InstrutorTeoricoComponent,
    InstructorClassDialogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
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
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  entryComponents: [DialogBoxComponent, AdminAlunosDialogComponent, AdminInstrutorDialogComponent, DeleteDialogComponent,
      TrafficTicketBoxComponent, InstructorClassDialogComponent, AdminFuncionariosDialogComponent],
  providers: [AutoescolaService, SnackBarService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
