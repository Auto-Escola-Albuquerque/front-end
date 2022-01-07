import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTable, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {AdminFranquiasDialogComponent} from '../admin-franquias-dialog/admin-franquias-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {AdminTabelasPraticasDialogComponent} from '../admin-tabelas-praticas-dialog/admin-tabelas-praticas-dialog.component';
import {DatePipe} from '@angular/common';
import {StorageService} from '../shared/storage.service';

@Component({
  selector: 'app-admin-tabelas-praticas',
  templateUrl: './admin-tabelas-praticas.component.html',
  styleUrls: ['./admin-tabelas-praticas.component.scss'],
  providers: [
    DatePipe
  ]
})
export class AdminTabelasPraticasComponent implements OnInit {
  practicalTable: any;
  displayedColumns = ['name', 'instructor', 'delete'];
  dataSource: any;
  city: any;

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
  @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;


  constructor(public dialog: MatDialog, private autoescolaService: AutoescolaService,  private storage: StorageService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.autoescolaService.getCity(this.storage.getData('franchise')).subscribe(data => {
      this.city = data;
    });
    this.updateRowData();
  }
  updateHourOfChange() {
    this.city.practicalAdminPeople = this.storage.getData('name');
    this.city.practicalAdmin = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.autoescolaService.patchCity(this.city).subscribe();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdminTabelasPraticasDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData();
      this.updateHourOfChange();
    });
  }
  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data: obj, type : 'admin-tabelas-praticas'}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
        this.updateHourOfChange();
    });
  }

  updateRowData() {
    this.autoescolaService.getTableList().subscribe(data => {
      this.practicalTable = data;
      for (let i of this.practicalTable) {
        this.autoescolaService.getInstructor(i.instructor).subscribe(result => {
          i.instructor = result['name'];
        });
      }
      this.dataSource = new MatTableDataSource(this.practicalTable);
      this.dataSource.sort = this.sort;
    });
  }
}
