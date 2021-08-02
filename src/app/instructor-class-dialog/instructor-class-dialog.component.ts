import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Trafficticket} from '../shared/traffic-ticket/trafficticket.model';
import * as moment from 'moment';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InstructorClass} from '../shared/instructor-class/instructor-class.model';
import {SnackBarService} from '../shared/snack-bar.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-instructor-class-dialog',
  templateUrl: './instructor-class-dialog.component.html',
  styleUrls: ['./instructor-class-dialog.component.scss']
})
export class InstructorClassDialogComponent implements OnInit {

  formInstructorClass = new FormGroup({
    instructor: new FormControl('', [Validators.required]),
    count: new FormControl('', [Validators.required]),
    check: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });
  id: number;
  action: string;
  localData: any;
  index: number;
  type: string;
  instructors = [];

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService, private ns: SnackBarService) {
    this.type = this.data.data.type === 'Prático' ? 'Prática' : 'Teórica';
    this.formInstructorClass.patchValue({
      instructor: this.data.data.name,
      type: this.type,
    });
  }
  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit() {
    const instructorClass = new InstructorClass();
    instructorClass.instructor = this.data.data.id;
    instructorClass.count = this.formInstructorClass.value.count;
    instructorClass.check = this.formInstructorClass.value.check;
    instructorClass.date = moment(this.formInstructorClass.value.date).format('MM-DD-YYYY');
    instructorClass.type = this.formInstructorClass.value.type;
    let response = 'empty';
    this.autoescolaservice.postInstructorClass(instructorClass).subscribe(
      data => {
        this.success();
      },
      error => {
        this.error();
      });
    this.dialogRef.close();
  }
  success() {
    this.ns.success('Aula adicionada com sucesso!');
  }
  error() {
    this.ns.error('Erro ao adicionar aula ao instrutor. Verifique os campos e tente novamente!');
  }
}
