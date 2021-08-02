import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AutoescolaService} from '../shared/autoescola.service';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {InstructorClassDialogComponent} from '../instructor-class-dialog/instructor-class-dialog.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SnackBarService} from '../shared/snack-bar.service';
import {async} from 'rxjs/internal/scheduler/async';
import {Student} from '../shared/student/student.model';
import {InstructorClass} from '../shared/instructor-class/instructor-class.model';
import {MatSort} from '@angular/material/sort';
import {Instructor} from '../shared/instructor/instructor.model';

@Component({
  selector: 'app-instrutor-teorico',
  templateUrl: './instrutor-teorico.component.html',
  styleUrls: ['./instrutor-teorico.component.scss']
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

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private autoescolaservice: AutoescolaService, public dialog: MatDialog,  private route: ActivatedRoute,
              private ns: SnackBarService, private activeRoute: ActivatedRoute) {
  }

    ngOnInit() {
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
          this.instructorClassT.forEach(i => this.tSum += i.count);
          this.checkIsEmpty(this.instructorClassT, 'Teórico');
        });
        this.autoescolaservice.getPracticalInstructorClassList(routeParams.id).subscribe(data => {
          this.instructorClassP = data;
          this.dataSourceP = new MatTableDataSource(this.instructorClassP);
          this.dataSourceP.sort = this.sort;
          this.instructorClassP.forEach(i => this.pSum += i.count);
          this.checkIsEmpty(this.instructorClassP, 'Prático');
        });
      });
    }
  openDialog(obj: any) {
    const dialogRef = this.dialog.open(InstructorClassDialogComponent, {
      width: '50%',
      data: {data: obj}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData(result.data);
    });
  }
  updateRowData(obj: any) {
    // this.dataSource = this.dataSource.data.filter((value, key) => {
    //   if (value.id === obj.id) {
    //     value.subjects = obj.subjects;
    //   }
    //   return true;
    // });
  }
  changeCheck(instructorClass: InstructorClass) {
    instructorClass.check === true ? instructorClass.check = false : instructorClass.check = true;
  }
  addDeleteItems(instructorClass: InstructorClass) {
    this.deleteItems.push(instructorClass.id);
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
  }
}
