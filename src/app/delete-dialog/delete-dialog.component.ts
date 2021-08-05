import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AutoescolaService} from '../shared/autoescola.service';
import * as moment from 'moment';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  action: string;
  localData: any;
  index: number;
  type: string;
  obj: any;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService) {
    this.localData = data.data;
    this.obj = this.localData.obj;
    this.index = this.localData.index;
    this.action = this.localData.action;
    this.type = this.data.type;
  }
  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  onSubmit() {
    if (this.type === 'admin-alunos') {
      this.autoescolaservice.deleteStudent(this.localData);
    } else if (this.type === 'multas') {
      this.autoescolaservice.deleteTrafficTicket(this.localData);
    } else if (this.type === 'admin-funcionarios') {
      this.autoescolaservice.deleteEmployee(this.localData);
    } else if (this.type === 'admin-instrutor-teorico') {
      this.autoescolaservice.deleteInstructor(this.localData);
    } else if (this.type === 'admin-aula-instrutor') {
      for (const i of this.localData) {
        this.autoescolaservice.deleteInstructorClass(i);
      }
    }
    this.dialogRef.close({
      event: this.action, data: this.localData
    });
  }
}
