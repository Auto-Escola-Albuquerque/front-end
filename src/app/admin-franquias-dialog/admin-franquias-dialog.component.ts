import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {SnackBarService} from '../shared/snack-bar.service';
import {DrivingSchool} from '../shared/driving-school/driving-school.model';
import {error} from 'protractor';
import {HourChange} from '../shared/hour-change/hour-change.model';

@Component({
  selector: 'app-admin-franquias-dialog',
  templateUrl: './admin-franquias-dialog.component.html',
  styleUrls: ['./admin-franquias-dialog.component.scss']
})
export class AdminFranquiasDialogComponent implements OnInit {
  formFranchise = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  localData: any;
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService, private ns: SnackBarService) {
    this.localData = data;
  }

  ngOnInit() {

  }
  onSubmit() {
    const franchise = new DrivingSchool();
    franchise.name = this.formFranchise.value.name;
    this.autoescolaservice.postDrivingSchool(franchise).subscribe(data => {
      this.success();
    }, error => {
      this.error();
    });
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  success() {
    this.ns.success('Franquia Adicionada com sucesso!');
  }
  error() {
    this.ns.error('Erro ao criar franquia. Verifique os campos, conexão de internet e tente novamente!');
  }
}
