import {Component, OnInit, ViewChild} from '@angular/core';
import { Instructor } from '../shared/instructor/instructor.model';
import { AutoescolaService } from '../shared/autoescola.service';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {AdminInstrutorDialogComponent} from '../admin-instrutor-dialog/admin-instrutor-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

@Component({
    selector: 'app-admin-instrutor',
    templateUrl: './admin-instrutor.component.html',
    styleUrls: ['./admin-instrutor.component.scss']
})
export class AdminInstrutorComponent implements OnInit {
    displayedColumns = ['N°', 'name', 'cpf', 'type', 'delete'];
    dataSource: any;
    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    instructors = [];

    constructor(public autoescolaservice: AutoescolaService, public dialog: MatDialog) { }

    ngOnInit() {
      this.updateRowData();
    }
    doFilter(value: string) {
      this.dataSource.filter = value.trim().toLowerCase();
    }
    updateRowData() {
      this.autoescolaservice.getInstructorList().subscribe(data => {
        this.instructors = data;
        for (let i = 0; i < this.instructors.length; i++){
          this.instructors[i].seq = i + 1;
        }
        this.dataSource = new MatTableDataSource(this.instructors);
        this.dataSource.sort = this.sort;
      });
    }
    openDialog(obj: any) {
      const dialogRef = this.dialog.open(AdminInstrutorDialogComponent, {
        width: '50%',
        data: {data: obj}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
      });
    }
    openDeleteDialog(obj: any) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '20%',
        data: {data : obj, type : 'admin-instrutor-teorico'}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
      });
    }
}
