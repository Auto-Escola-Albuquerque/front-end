import {Component, OnInit, ViewChild} from '@angular/core';
import { Instructor } from '../shared/instructor/instructor.model';
import { AutoescolaService } from '../shared/autoescola.service';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {AdminInstrutorDialogComponent} from '../admin-instrutor-dialog/admin-instrutor-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {DatePipe} from '@angular/common';
import {StorageService} from '../shared/storage.service';

@Component({
    selector: 'app-admin-instrutor',
    templateUrl: './admin-instrutor.component.html',
    styleUrls: ['./admin-instrutor.component.scss'],
    providers: [
      DatePipe
    ]
})
export class AdminInstrutorComponent implements OnInit {
    displayedColumns = ['N°', 'name', 'cpf', 'type', 'delete'];
    dataSource: any;
    city: any;

    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    instructors = [];

    constructor(public autoescolaservice: AutoescolaService, public dialog: MatDialog, private storage: StorageService, private datePipe: DatePipe) { }

    ngOnInit() {
      this.autoescolaservice.getCity(this.storage.getData('franchise')).subscribe(data => {
        this.city = data;
      });
      this.updateRowData();
    }
    updateHourOfChange() {
      this.city.instructorAdminPeople = this.storage.getData('name');
      this.city.instructorAdmin = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.autoescolaservice.patchCity(this.city).subscribe();
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
        this.updateHourOfChange();
      });
    }
    openDeleteDialog(obj: any) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '20%',
        data: {data : obj, type : 'admin-instrutor-teorico'}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
        this.updateHourOfChange();
      });
    }
}
