import {ChangeDetectorRef, Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Student } from '../shared/student/student.model';
import { AutoescolaService } from '../shared/autoescola.service';
import { MatPaginator, MatTableDataSource, MatTable, MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import {AdminAlunosDialogComponent} from '../admin-alunos-dialog/admin-alunos-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {DatePipe} from '@angular/common';
import {StorageService} from '../shared/storage.service';


@Component({
    selector: 'app-admin-alunos',
    templateUrl: './admin-alunos.component.html',
    styleUrls: ['./admin-alunos.component.scss'],
    providers: [
      DatePipe
    ]
})
export class AdminAlunosComponent implements OnInit {
    displayedColumns = ['N°', 'name', 'cpf', 'registrationDate', 'update', 'delete'];
    dataSource: any;
    students = [];
    student = new Student();
    hourChange: any;


    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(public autoescolaservice: AutoescolaService, public dialog: MatDialog, private storage: StorageService, private datePipe: DatePipe) {
    }
    ngOnInit() {
      this.autoescolaservice.getHourOfChange().subscribe(data => {
        this.hourChange = data;
      });
      this.autoescolaservice.getStudentList().subscribe(data => {
        this.students = data;
        for (let i = 0; i < this.students.length; i++){
          this.students[i].seqNo = i + 1;
        }
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.sort = this.sort;
      });
    }
    doFilter(value: string) {
      this.dataSource.filter = value.trim().toLowerCase();
    }
    openDialog(obj: any, type: string) {
      const dialogRef = this.dialog.open(AdminAlunosDialogComponent, {
        width: '50%',
        data: {data: obj, type: type === 'add' ? 'add' : 'update'},
      });

      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
        this.updateHourOfChange();
      });
    }
    updateHourOfChange() {
      this.hourChange.studentAdminPeople = this.storage.getData('name');
      this.hourChange.studentAdmin = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.autoescolaservice.patchHourOfChange(this.hourChange).subscribe();
    }
    updateRowData() {
      this.autoescolaservice.getStudentList().subscribe(data => {
        this.students = data;
        for (let i = 0; i < this.students.length; i++){
          this.students[i].seqNo = i + 1;
        }
        this.dataSource.data = this.students;
      });
    }

    openDeleteDialog(obj: any) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '20%',
        data: {data: obj, type : 'admin-alunos'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result.data) {
          this.updateRowData();
          this.updateHourOfChange();
        }
      });
    }
}
