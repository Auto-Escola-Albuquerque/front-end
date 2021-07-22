import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AutoescolaService} from '../shared/autoescola.service';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {InstructorClassDialogComponent} from '../instructor-class-dialog/instructor-class-dialog.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {SnackBarService} from '../shared/snack-bar.service';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-instrutor-teorico',
  templateUrl: './instrutor-teorico.component.html',
  styleUrls: ['./instrutor-teorico.component.scss']
})
export class InstrutorTeoricoComponent implements OnInit {
  instructorClassP = [];
  instructorClassT = [];
  instructorClass = [];
  instructor: any;
  displayedColumns = ['count', 'date', 'delete'];
  dataSourceP: any;
  dataSourceT: any;
  tSum = 0;
  pSum = 0;
  id: any;
  router: Router;
  routerSubscription: any;

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;

  constructor(private autoescolaservice: AutoescolaService, public dialog: MatDialog,  private route: ActivatedRoute,
              private ns: SnackBarService, private activeRoute: ActivatedRoute) {
    // this.activeRoute.paramMap.subscribe(params => {
    //     this.id = params['params'].id;
    //     this.ngOnInit();
    // });
  }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.autoescolaservice.getInstructor(this.id).subscribe(data => {
          this.instructor = data;
        });
        this.autoescolaservice.getInstructorClass(this.id).subscribe(data => {
          this.instructorClass = data;
          this.generateTable();
        });
      });
    }
    generateTable() {
      if (this.instructorClass.length === 0) {
        this.error();
      }
      for (const i of this.instructorClass) {
        if (i.type === 'Teórica') {
          this.instructorClassT.push(i);
          this.tSum += i.count;
        } else if (i.type === 'Prática') {
          this.instructorClassP.push(i);
          this.pSum += i.count;
        }
      }
      this.dataSourceP = new MatTableDataSource(this.instructorClassP);
      this.dataSourceT = new MatTableDataSource(this.instructorClassT);
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
  error() {
      this.ns.error('Este instrutor ainda não possui aulas cadastradas');
  }
  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data : obj, type : 'admin-aula-instrutor'}
    });
  }
}
