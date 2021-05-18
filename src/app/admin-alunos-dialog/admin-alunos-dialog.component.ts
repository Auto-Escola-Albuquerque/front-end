import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {Student} from '../shared/student/student.model';
import * as moment from 'moment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AutoescolaService } from '../shared/autoescola.service';


@Component({
  selector: 'app-admin-alunos-dialog',
  templateUrl: './admin-alunos-dialog.component.html',
  styleUrls: ['./admin-alunos-dialog.component.scss']
})
export class AdminAlunosDialogComponent implements OnInit {
  formStudent = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    registration: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    theoreticalFines: new FormControl(0),
    practicalFines: new FormControl(0),
    dayClasses: new FormControl(0),
    nightClasses: new FormControl(0),
    defensiveDriving: new FormControl(0),
    firstAid: new FormControl(0),
    environment: new FormControl(0),
    legislation: new FormControl(0),
    mechanics: new FormControl(0),
  });


  action: string;
  localData: any;
  index: number;
  type: string;
  obj: any;
  students = [];
  student = new Student();

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService) {

    this.localData = data;
    this.obj = this.localData.obj;
    this.index = this.localData.index;
    this.action = this.localData.action;
    this.type = this.localData.type;
  }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit() {
    try {
      const student = new Student();
      student.name = this.formStudent.value.name;
      student.cpf = this.formStudent.value.cpf;
      student.registrationDate = moment(this.formStudent.value.registration).format('MM-DD-YYYY');
      student.gender = this.formStudent.value.gender;
      student.email = this.formStudent.value.email;
      student.phone = this.formStudent.value.phone;
      student.theoreticalFines = this.formStudent.value.theoreticalFines;
      student.practicalFines = this.formStudent.value.practicalFines;
      student.dayClasses = this.formStudent.value.dayClasses;
      student.nightClasses = this.formStudent.value.nightClasses;
      student.subjects = null;
      this.autoescolaservice.postStudent(student);
      this.dialogRef.close();
    } catch (error) {
      console.log('Erro ao vincular matéria ao aluno');
    }
  }
}
