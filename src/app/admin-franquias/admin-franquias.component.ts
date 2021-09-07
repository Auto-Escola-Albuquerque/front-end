import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTable, MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { AutoescolaService } from '../shared/autoescola.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DrivingSchool } from '../shared/driving-school/driving-school.model';
import {AdminFranquiasDialogComponent} from '../admin-franquias-dialog/admin-franquias-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';


@Component({
    selector: 'app-admin-franquias',
    templateUrl: './admin-franquias.component.html',
    styleUrls: ['./admin-franquias.component.scss']
})
export class AdminFranquiasComponent implements OnInit {
    franchises: any;
    displayedColumns = ['Id', 'name', 'delete']
    dataSource: any;

    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(public dialog: MatDialog, private autoescolaService: AutoescolaService) {
    }

    ngOnInit() {
        this.autoescolaService.getCityList().subscribe(data => {
          this.franchises = data;
          this.dataSource = new MatTableDataSource(this.franchises);
          this.dataSource.paginator = this.matPaginator;
          this.dataSource.sort = this.sort;
          console.log(this.franchises);
        });
    }

    openDialog() {
        const dialogRef = this.dialog.open(AdminFranquiasDialogComponent, {
            width: '400px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.updateRowData();
        });
    }

    doFilter(value: string) {
        this.dataSource.filter = value.trim().toLowerCase();
    }
    openDeleteDialog(obj: any) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '20%',
        data: {data: obj, type : 'admin-franquia'}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
      });
    }

    updateRowData() {
      this.autoescolaService.getCityList().subscribe(data => {
        this.franchises = data;
        this.dataSource.data = this.franchises;
      });
    }

}
