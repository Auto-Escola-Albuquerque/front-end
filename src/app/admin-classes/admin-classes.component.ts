import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatTable, MatDialog} from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { Class } from '../shared/class/class.model';
import { AutoescolaService } from '../shared/autoescola.service';
import {AdminClassesDialogComponent} from '../admin-classes-dialog/admin-classes-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

@Component({
    selector: 'app-admin-classes',
    templateUrl: './admin-classes.component.html',
    styleUrls: ['./admin-classes.component.scss']
})
export class AdminClassesComponent implements OnInit {
    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    classes: any;
    displayedColumns = ['N°', 'name', 'shift', 'update', 'delete'];
    dataSource: any;

    constructor(private autoescolaService: AutoescolaService, public dialog: MatDialog) { }

    ngOnInit() {
      this.updateRowData();
    }
    doFilter(value: string) {
        this.dataSource.filter = value.trim().toLowerCase();
    }
    openDialog(obj: any, type: string) {
      const dialogRef = this.dialog.open(AdminClassesDialogComponent, {
        width: '50%',
        data: {data: obj, type: type === 'add' ? 'add' : 'update'}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
      });
    }
    openDeleteDialog(obj: any) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '20%',
        data: {data : obj, type : 'admin-classes'}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
      });
    }
    updateRowData() {
      this.autoescolaService.getClassList().subscribe(data => {
        this.classes = data;
        for (let i = 0; i < this.classes.length; i++) {
          this.classes[i].seq = i + 1;
        }
        this.dataSource = new MatTableDataSource(this.classes);
      });
    }
}
