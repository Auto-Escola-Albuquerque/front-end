import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {Student} from '../shared/student/student.model';
import * as moment from 'moment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AutoescolaService } from '../shared/autoescola.service';
import {SnackBarService} from '../shared/snack-bar.service';
import {StorageService} from '../shared/storage.service';


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
    isPractical: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
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

  localData: any;
  type: string;
  obj: any;
  selected: any;
  isPractical: any;
  student = new Student();

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService, private ns: SnackBarService, private storageService: StorageService) {

    this.localData = data;
    this.obj = this.data.data;
    this.type = this.localData.type;

  }

  ngOnInit() {
    if (this.type === 'update') {
      // this.selected = this.obj.gender;
      this.updateForm();
    }
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  updateForm() {
    this.formStudent.patchValue({
          name: this.obj.name,
          cpf: this.obj.cpf,
          registration: this.obj.registrationDate,
          gender: this.obj.gender,
          email: this.obj.email,
          phone: this.obj.phone,
          theoreticalFines: this.obj.theoreticalFines,
          practicalFines: this.obj.practicalFines,
          dayClasses: this.obj.dayClasses,
          nightClasses: this.obj.nightClasses,
          defensiveDriving: this.obj.defensiveDriving,
          firstAid: this.obj.firstAid,
          environment: this.obj.environment,
          legislation: this.obj.legislation,
          mechanics: this.obj.mechanics,
          isPractical: this.obj.isPractical
    });
  }
  update() {
    this.obj.name = this.formStudent.value.name;
    this.obj.cpf = this.formStudent.value.cpf;
    this.obj.registrationDate = moment(this.formStudent.value.registration).format('MM-DD-YYYY');
    this.obj.gender = this.formStudent.value.gender;
    this.obj.email = this.formStudent.value.email;
    this.obj.phone = this.formStudent.value.phone;
    this.obj.theoreticalFines = this.formStudent.value.theoreticalFines;
    this.obj.practicalFines = this.formStudent.value.practicalFines;
    this.obj.dayClasses = this.formStudent.value.dayClasses;
    this.obj.nightClasses = this.formStudent.value.nightClasses;
    this.obj.defensiveDriving = this.formStudent.value.defensiveDriving;
    this.obj.firstAid = this.formStudent.value.firstAid;
    this.obj.environment = this.formStudent.value.environment;
    this.obj.legislation = this.formStudent.value.legislation;
    this.obj.mechanics = this.formStudent.value.mechanics;
    this.obj.isPractical = this.formStudent.value.isPractical;

    this.autoescolaservice.putStudent(this.obj).subscribe(data => {
      this.success();
    }, error => {
      this.error();
    });
    this.dialogRef.close();
  }
  updateCheck() {
    this.isPractical = this.isPractical === false;
  }
  onSubmit() {
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
      student.city = this.storageService.getData('franchise');
      student.isPractical = this.formStudent.value.isPractical;
      this.autoescolaservice.postStudent(student).subscribe(
        data =>{
          this.success();
        }, error => {
          this.error();
        });
      this.dialogRef.close();
  }
  success() {
    if(this.type === 'update') {
      this.ns.success('Os dados foram atualizados com sucesso');
    } else {
      this.ns.success('Aluno adicionado com sucesso!');
    }
  }
  error() {
    if(this.type === 'update') {
      this.ns.error('Erro ao atualizar aluno. Verifique os campos e tente novamente');
    } else {
      this.ns.error('Erro ao adicionar aluno. Verifique os campos e tente novamente!');
    }
  }
}
