import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {Class} from '../shared/class/class.model';
import {SnackBarService} from '../shared/snack-bar.service';
import {InstructorClassDialogComponent} from '../instructor-class-dialog/instructor-class-dialog.component';
import {MatDialog} from '@angular/material';
import {StorageService} from '../shared/storage.service';

@Component({
  selector: 'app-admin-classes-dialog',
  templateUrl: './admin-classes-dialog.component.html',
  styleUrls: ['./admin-classes-dialog.component.scss']
})
export class AdminClassesDialogComponent implements OnInit {
  formClasses = new FormGroup({
    name: new FormControl('', [Validators.required]),
    shift: new FormControl('', [Validators.required]),
  });
  localData: any;
  type: string;
  obj: any;
  action: string;
  loading = false;
  constructor(public autoescolaservice: AutoescolaService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogBoxComponent>, private ns: SnackBarService, private storageService: StorageService) {
    this.localData = data;
    this.obj = this.data.data;
    this.type = this.localData.type;
  }
  ngOnInit() {
    if(this.type === 'update') {
      this.updateForm();
    }
  }
  updateForm() {
    this.formClasses.patchValue({
      name: this.obj.name,
      shift: this.obj.shift,
    });
  }
  update() {
    this.obj.name = this.formClasses.value.name;
    this.obj.shift = this.formClasses.value.shift;
    this.autoescolaservice.putClass(this.obj).subscribe(data => {
      this.success();
    }, error => {
      this.error();
    });
    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel'});
  }
  onSubmit() {
    this.loading = true;
    const classes = new Class();

    classes.name = this.formClasses.value.name;
    classes.shift = this.formClasses.value.shift;
    classes.city = this.storageService.getData('franchise');
    this.autoescolaservice.postClass(classes).subscribe(
      data => {
        this.success();
      },
      error => {
        this.error();
      });
    this.dialogRef.close();
  }
  success() {
    if (this.type === 'add') {
      this.ns.success('Turma adicionada com sucesso!');
    } else {
      this.ns.success('Atualização feita com sucesso!');
    }
  }
  error() {
    if (this.type === 'add') {
      this.ns.error('Erro ao adicionar turma. Verifique os campos e tente novamente!');
    } else {
      this.ns.error('Erro ao atualizar turma. Verifique os campos e tente novamente!');
    }
  }
}
