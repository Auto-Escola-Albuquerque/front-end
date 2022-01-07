import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAlunosComponent } from './admin-alunos/admin-alunos.component';
import { AdminInstrutorComponent } from './admin-instrutor/admin-instrutor.component';
import { AdminFranquiasComponent } from './admin-franquias/admin-franquias.component';
import { AdminFuncionariosComponent } from './admin-funcionarios/admin-funcionarios.component';
import { AlunosTeoricosComponent } from './alunos-teoricos/alunos-teoricos.component';
import { TabelaPraticaComponent } from './tabela-pratica/tabela-pratica.component';
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
import { AdminFuncionariosDialogComponent } from './admin-funcionarios-dialog/admin-funcionarios-dialog.component';
import {SnackBarService} from './shared/snack-bar.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { AdminClassesDialogComponent } from './admin-classes-dialog/admin-classes-dialog.component';
import { AddRelationshipDialogComponent } from './add-relationship-dialog/add-relationship-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import { AdminFranquiasDialogComponent } from './admin-franquias-dialog/admin-franquias-dialog.component';
import {StorageService} from './shared/storage.service';
import {AuthGuardService} from './shared/auth-guard.service';
import {HttpInterceptorService} from './shared/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {MainNavComponent} from './main-nav/main-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckFranchiseComponent } from './check-franchise/check-franchise.component';
import { AdminTabelasPraticasComponent } from './admin-tabelas-praticas/admin-tabelas-praticas.component';
import { AdminTabelasPraticasDialogComponent } from './admin-tabelas-praticas-dialog/admin-tabelas-praticas-dialog.component';
import { LinesDialogComponent } from './lines-dialog/lines-dialog.component';
import {MatSlideToggleModule} from '@angular/material';
import { AlunosComponent } from './alunos/alunos.component';
import { InitialComponent } from './initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAlunosComponent,
    AdminInstrutorComponent,
    AdminFranquiasComponent,
    AdminFuncionariosComponent,
    AlunosTeoricosComponent,
    TabelaPraticaComponent,
    LoginComponent,
    AdminClassesComponent,
    DialogBoxComponent,
    AdminAlunosDialogComponent,
    AdminInstrutorDialogComponent,
    DeleteDialogComponent,
    AdminFuncionariosDialogComponent,
    AdminClassesDialogComponent,
    AddRelationshipDialogComponent,
    AdminFranquiasDialogComponent,
    MainNavComponent,
    NotFoundComponent,
    CheckFranchiseComponent,
    AdminTabelasPraticasComponent,
    AdminTabelasPraticasDialogComponent,
    LinesDialogComponent,
    AlunosComponent,
    InitialComponent,
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
    MatSnackBarModule,
    MatCardModule,
    MatRadioModule,
    MainNavRoutingModule,
    MatSlideToggleModule
  ],
  entryComponents: [DialogBoxComponent, AdminAlunosDialogComponent, AdminInstrutorDialogComponent, DeleteDialogComponent,
    AdminFuncionariosDialogComponent, AdminClassesDialogComponent, AddRelationshipDialogComponent,
      AdminFranquiasDialogComponent, MainNavComponent, AdminTabelasPraticasDialogComponent, LinesDialogComponent],
  providers: [AutoescolaService, SnackBarService, StorageService, AuthGuardService, HttpInterceptorService, {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
