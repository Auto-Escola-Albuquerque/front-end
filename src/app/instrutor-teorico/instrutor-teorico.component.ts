import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoescolaService} from '../shared/autoescola.service';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {InstructorClassDialogComponent} from '../instructor-class-dialog/instructor-class-dialog.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-instrutor-teorico',
  templateUrl: './instrutor-teorico.component.html',
  styleUrls: ['./instrutor-teorico.component.scss']
})
export class InstrutorTeoricoComponent implements OnInit {
  instructorClassP = [];
  instructorClassT = [];
  instructor: any;
  displayedColumns = ['count', 'date', 'delete'];
  dataSourceP: any;
  dataSourceT: any;
  id: any;
  tSum = 0;
  pSum = 0;

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;

  constructor(private autoescolaservice: AutoescolaService, public dialog: MatDialog,  private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.autoescolaservice.getInstructor(this.id).subscribe(data => {
      this.instructor = data;
    });
    this.autoescolaservice.getInstructorClass(this.id).subscribe(data => {
        this.instructorClassP = data;
        for (const i of data) {
            if (i.type === 'Teórica') {
              this.instructorClassP.push(i);
              this.tSum += i.count;
            } else {
              this.instructorClassT.push(i);
              this.pSum += i.count;
            }
        }
        this.dataSourceP = new MatTableDataSource(this.instructorClassP);
        this.dataSourceT = new MatTableDataSource(this.instructorClassT);
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

  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data : obj, type : 'admin-instructor-class'}
    });
  }

}
