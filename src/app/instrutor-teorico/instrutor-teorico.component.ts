import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoescolaService} from '../shared/autoescola.service';
import {AdminFuncionariosDialogComponent} from '../admin-funcionarios-dialog/admin-funcionarios-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {MatDialog, MatTable} from '@angular/material';
import {Employee} from '../shared/employee/employee.model';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-instrutor-teorico',
  templateUrl: './instrutor-teorico.component.html',
  styleUrls: ['./instrutor-teorico.component.scss']
})
export class InstrutorTeoricoComponent implements OnInit {
  instructor = [];
  displayedColumns = ['count', 'date', 'delete'];
  dataSource: any;
  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private autoescolaservice: AutoescolaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.autoescolaservice.getTheoreticalInstructorList().subscribe(data => {
        this.instructor = data;
    });
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
      this.updateRowData(result.data);
    });
  }
  updateRowData(obj: any) {
    this.dataSource = this.dataSource.data.filter((value, key) => {
      if (value.id === obj.id) {
        value.subjects = obj.subjects;
      }
      return true;
    });
  }

  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data : obj, type : 'admin-funcionarios'}
    });
  }

}
