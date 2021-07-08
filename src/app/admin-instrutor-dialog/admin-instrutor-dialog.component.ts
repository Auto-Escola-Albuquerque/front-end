import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import * as moment from 'moment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AutoescolaService } from '../shared/autoescola.service';
import {Instructor} from '../shared/instructor/instructor.model';

@Component({
  selector: 'app-admin-funcionario-dialog',
  templateUrl: './admin-instrutor-dialog.component.html',
  styleUrls: ['./admin-instrutor-dialog.component.scss']
})
export class AdminInstrutorDialogComponent implements OnInit {

  formInstructor = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    type: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
  });
  action: string;
  localData: any;
  index: number;
  type: string;
  obj: any;
  constructor(public autoescolaservice: AutoescolaService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogBoxComponent>) {
      this.localData = data;
      this.obj = this.localData.obj;
      this.index = this.localData.index;
      this.action = this.localData.action;
      this.type = this.localData.type;
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  ngOnInit() {
  }
  onSubmit() {
    try {
      const instructor = new Instructor();
      instructor.name = this.formInstructor.value.name;
      instructor.cpf = this.formInstructor.value.cpf;
      instructor.type = this.formInstructor.value.type;
      instructor.city = null;
      this.autoescolaservice.postInstructor(instructor);
      this.dialogRef.close();
    } catch (error) {
      console.log('Erro ao criar instância de instrutor-teorico');
    }
  }
}
