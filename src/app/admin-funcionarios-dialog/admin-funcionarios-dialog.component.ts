import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Employee} from '../shared/employee/employee.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AutoescolaService} from '../shared/autoescola.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-admin-funcionarios-dialog',
  templateUrl: './admin-funcionarios-dialog.component.html',
  styleUrls: ['./admin-funcionarios-dialog.component.scss']
})
export class AdminFuncionariosDialogComponent implements OnInit {
  formEmployee = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    password: new FormControl('', [Validators.required]),
    isAdmin: new FormControl('', [Validators.required])
  });

  action: string;
  localData: any;
  index: number;
  type: string;
  obj: any;
  loading = false;

  constructor(public autoescolaservice: AutoescolaService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogBoxComponent>) {

      this.localData = data;
      this.obj = this.localData.obj;
      this.index = this.localData.index;
      this.action = this.localData.action;
      this.type = this.localData.type;
  }
  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' , data: this.obj});
  }
  onSubmit() {
    this.loading = true;
    const employee = new Employee();

    employee.username = this.formEmployee.value.username;
    employee.email = this.formEmployee.value.email;
    employee.isAdmin = this.formEmployee.value.isAdmin;
    employee.password = this.formEmployee.value.password;
    this.autoescolaservice.postEmployee(employee);

    this.closeDialog();
  }
}
