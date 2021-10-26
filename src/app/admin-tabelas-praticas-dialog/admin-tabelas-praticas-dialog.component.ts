import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {SnackBarService} from '../shared/snack-bar.service';
import {PracticalTable} from '../shared/practical-table/practical-table.model';

@Component({
  selector: 'app-admin-tabelas-praticas-dialog',
  templateUrl: './admin-tabelas-praticas-dialog.component.html',
  styleUrls: ['./admin-tabelas-praticas-dialog.component.scss']
})
export class AdminTabelasPraticasDialogComponent implements OnInit {
  formTable = new FormGroup({
    name: new FormControl('', [Validators.required]),
    instructor: new FormControl('', [Validators.required]),
  });
  instructors: any;
  localData: any;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService, private ns: SnackBarService) {
    this.localData = data;
  }

  ngOnInit() {
    this.autoescolaservice.getInstructorList().subscribe(data => {
      this.instructors = data;
    });
  }

  onSubmit() {
    const table = new PracticalTable();
    table.name = this.formTable.value.name;
    table.instructor = this.formTable.value.instructor.id;
    this.autoescolaservice.postTable(table).subscribe(data => {
      this.success();
    }, error => {
      this.error();
    });
    this.dialogRef.close({ event: 'Cancel' });
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  success() {
    this.ns.success('Tabela Prática Adicionada com sucesso!');
  }
  error() {
    this.ns.error('Erro ao criar tabela prática. Verifique os campos, conexão de internet e tente novamente!');
  }
}
