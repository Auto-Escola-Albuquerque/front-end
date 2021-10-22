import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AutoescolaService} from '../shared/autoescola.service';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {InstructorClassDialogComponent} from '../instructor-class-dialog/instructor-class-dialog.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SnackBarService} from '../shared/snack-bar.service';
import {InstructorClass} from '../shared/instructor-class/instructor-class.model';
import {MatSort} from '@angular/material/sort';
import {DatePipe} from '@angular/common';
import {StorageService} from '../shared/storage.service';

@Component({
  selector: 'app-instrutor-teorico',
  templateUrl: './instrutor-teorico.component.html',
  styleUrls: ['./instrutor-teorico.component.scss'],
  providers: [
    DatePipe
  ]
})
export class InstrutorTeoricoComponent implements OnInit {
  instructorClass = [];
  instructorClassP: any;
  instructorClassT: any;
  instructor: any;
  displayedColumns = ['count', 'date', 'check', 'delete'];
  dataSourceP: any;
  dataSourceT: any;
  tSum = 0;
  pSum = 0;
  id: any;
  deleteItems = [];
  checkList = [];
  hourChange: any;


  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private autoescolaservice: AutoescolaService, public dialog: MatDialog,  private route: ActivatedRoute,
              private ns: SnackBarService, private activeRoute: ActivatedRoute, private storage: StorageService, private datePipe: DatePipe) {
  }

    ngOnInit() {
      this.autoescolaservice.getHourOfChange().subscribe(data => {
        this.hourChange = data;
      });
      this.route.params.subscribe(routeParams => {
        this.tSum = 0;
        this.pSum = 0;
        this.autoescolaservice.getInstructor(routeParams.id).subscribe(data => {
          this.instructor = data;
        });
        this.autoescolaservice.getTheoreticalInstructorClassList(routeParams.id).subscribe(data => {
          this.instructorClassT = data;
          this.dataSourceT = new MatTableDataSource(this.instructorClassT);
          this.dataSourceT.sort = this.sort;
          this.checkIsEmpty(this.instructorClassT, 'Teórico');
          this.updateTSum();
        });
        this.autoescolaservice.getPracticalInstructorClassList(routeParams.id).subscribe(data => {
          this.instructorClassP = data;
          this.dataSourceP = new MatTableDataSource(this.instructorClassP);
          this.dataSourceP.sort = this.sort;
          this.checkIsEmpty(this.instructorClassP, 'Prático');
          this.updatePSum();
        });
      });
    }
  openDialog(obj: any) {
    const dialogRef = this.dialog.open(InstructorClassDialogComponent, {
      width: '50%',
      data: {data: obj}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data) {
        this.updateHourOfChange();
      }
      this.updateRowData();
    });
  }
  updateHourOfChange() {
    this.hourChange.instructorPeople = this.storage.getData('name');
    this.hourChange.instructor = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.autoescolaservice.patchHourOfChange(this.hourChange).subscribe();
  }
  changeCheck(instructorClass: InstructorClass) {
    if (this.checkList.includes(instructorClass)) {
       this.checkList.splice(this.checkList.indexOf(instructorClass), 1);
    }
    instructorClass.check === true ? instructorClass.check = false : instructorClass.check = true;
    this.checkList.push(instructorClass);
  }
  updateCheck() {
    for (const i of this.checkList) {
      this.autoescolaservice.patchInstructorClassCheck(i);
    }
    this.updateHourOfChange();
  }
  updateTSum() {
    this.tSum = 0;
    this.instructorClassT.forEach(i => this.tSum += i.count);
  }
  updatePSum() {
    this.pSum = 0;
    this.instructorClassP.forEach(i => this.pSum += i.count);
  }
  addDeleteItems(instructorClass: InstructorClass) {
    if (this.deleteItems.includes(instructorClass)) {
      this.deleteItems.splice(this.deleteItems.indexOf(instructorClass), 1);
    } else {
      this.deleteItems.push(instructorClass);
    }
  }
  checkIsEmpty(instructorClass: InstructorClass, type: string) {
      if (type === 'Prático' && this.instructorClass.length === 0) {
        this.ns.empty('Este instrutor não possui aulas práticas cadastradas');
      } else if (type === 'Teórico' && this.instructorClass.length === 0) {
        this.ns.empty('Este instrutor não possui aulas teóricas cadastradas');
      }
  }
  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data : obj, type : 'admin-aula-instrutor'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData();
      this.updateHourOfChange();
    });
  }
  updateRowData() {
    if (this.instructor.type === 'Teórico' || this.instructor.type === 'Ambos') {
      this.autoescolaservice.getTheoreticalInstructorClassList(this.instructor.id).subscribe(data => {
        this.instructorClassT = data;
        this.dataSourceT.data = data;
        this.updateTSum();
      });
    }
    if (this.instructor.type === 'Prático' || this.instructor.type === 'Ambos') {
      this.autoescolaservice.getPracticalInstructorClassList(this.instructor.id).subscribe(data => {
        this.instructorClassP = data;
        this.dataSourceP.data = data;
        this.updatePSum();
      });
    }
  }
}
