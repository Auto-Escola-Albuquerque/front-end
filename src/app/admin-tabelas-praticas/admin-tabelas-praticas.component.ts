import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTable} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {AdminFranquiasDialogComponent} from '../admin-franquias-dialog/admin-franquias-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {AdminTabelasPraticasDialogComponent} from '../admin-tabelas-praticas-dialog/admin-tabelas-praticas-dialog.component';

@Component({
  selector: 'app-admin-tabelas-praticas',
  templateUrl: './admin-tabelas-praticas.component.html',
  styleUrls: ['./admin-tabelas-praticas.component.scss']
})
export class AdminTabelasPraticasComponent implements OnInit {
  practicalTable: any;
  displayedColumns = ['id', 'name', 'instructor', 'update', 'delete'];
  dataSource: any;

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
  // @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
  // @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public dialog: MatDialog, private autoescolaService: AutoescolaService) { }

  ngOnInit() {
    this.autoescolaService.getTableList().subscribe(data => {
      this.practicalTable = data;
      this.dataSource = this.practicalTable;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AdminTabelasPraticasDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData();
    });
  }
  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data: obj, type : 'admin-tabelas-praticas'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData();
    });
  }

  updateRowData() {
    this.autoescolaService.getTableList().subscribe(data => {
      this.practicalTable = data;
      this.dataSource.data = this.practicalTable;
    });
  }
}
