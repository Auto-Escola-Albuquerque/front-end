import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Employee} from '../shared/employee/employee.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AutoescolaService} from '../shared/autoescola.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {SnackBarService} from '../shared/snack-bar.service';

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

  localData: any;
  type: string;
  obj: any;
  loading = false;
  action: string;
  hide: any;

  constructor(public autoescolaservice: AutoescolaService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogBoxComponent>, private ns: SnackBarService) {

      this.localData = data;
      this.obj = this.localData.obj;
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
    console.log(employee.isAdmin);
    this.autoescolaservice.postEmployee(employee).subscribe(data => {
      this.success();
    }, error => {
      this.error();
    });

    this.closeDialog();
  }
  success() {
    this.ns.success('O funcionário foi adicionado com sucesso!');
  }
  error() {
    this.ns.error('Erro ao cadastrar funcionário. Verifique os campos e tente novamente!');
  }
}
