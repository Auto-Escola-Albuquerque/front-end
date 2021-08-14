import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Trafficticket} from '../shared/traffic-ticket/trafficticket.model';
import * as moment from 'moment';
import {Relationship} from '../shared/relationship/relationship.model';
import {SnackBarService} from '../shared/snack-bar.service';

@Component({
  selector: 'app-add-relationship-dialog',
  templateUrl: './add-relationship-dialog.component.html',
  styleUrls: ['./add-relationship-dialog.component.scss']
})
export class AddRelationshipDialogComponent implements OnInit {
  formRelationship = new FormGroup({
    class: new FormControl('', [Validators.required]),
    student: new FormControl('', [Validators.required]),
  });
  action: string;
  localData: any;
  students = [];

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService, private ns: SnackBarService) {
    this.localData = data;
    this.autoescolaservice.getStudentList().subscribe(data => {
      this.students = data;
    });
    this.formRelationship.patchValue({
      class: this.localData.name + ' - ' + this.localData.shift,
    });
  }
  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  onSubmit() {
    const relation = new Relationship();
    relation.student = this.formRelationship.value.student.id;
    relation.classes = this.localData.id;
    this.autoescolaservice.postRelationship(relation).subscribe(
      data => {
        this.success();
      },
        error => {
        this.error();
      }
    );
    this.dialogRef.close({
      event: this.action
    });
  }
  success() {
    this.ns.success('O aluno foi vinculado à turma com sucesso!');
  }
  error() {
    this.ns.error('Erro ao aluno à turma. Verifique os campos e tente novamente!');
  }
}
