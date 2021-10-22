import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../shared/employee/employee.model';
import { AutoescolaService } from '../shared/autoescola.service';
import {AdminAlunosDialogComponent} from '../admin-alunos-dialog/admin-alunos-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {AdminFuncionariosDialogComponent} from '../admin-funcionarios-dialog/admin-funcionarios-dialog.component';


@Component({
    selector: 'app-admin-funcionarios',
    templateUrl: './admin-funcionarios.component.html',
    styleUrls: ['./admin-funcionarios.component.scss']
})
export class AdminFuncionariosComponent implements OnInit {
    displayedColumns = ['N°', 'username', 'email', 'delete'];
    dataSource: any;
    employees = [];
    employee = new Employee();

    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(private autoescolaService: AutoescolaService, public dialog: MatDialog) {
    }
    ngOnInit() {
      this.updateRowData();
    }
    doFilter(value: string) {
      this.dataSource.filter = value.trim().toLowerCase();
    }
    openDialog(obj: any) {
      const dialogRef = this.dialog.open(AdminFuncionariosDialogComponent, {
        width: '50%',
        data: {data: obj}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
      });
    }
    updateRowData() {
      this.autoescolaService.getEmployeeList().subscribe(data => {
        this.employees = data;
        for (let i = 0; i < this.employees.length; i++){
          this.employees[i].seq = i + 1;
        }
        this.dataSource = new MatTableDataSource(this.employees);
        this.dataSource.sort = this.sort;
      });
    }
    openDeleteDialog(obj: any) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '20%',
        data: {data : obj, type : 'admin-funcionarios'}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
      });
    }
}
