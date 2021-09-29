import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {SnackBarService} from '../shared/snack-bar.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lines-dialog',
  templateUrl: './lines-dialog.component.html',
  styleUrls: ['./lines-dialog.component.scss']
})
export class LinesDialogComponent implements OnInit {
  localData: any;
  action: string;
  obj: any;
  type: any;
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService, private ns: SnackBarService) {
    this.localData = data;
    this.obj = this.localData.obj;
    this.action = this.localData.action;
    this.type = this.localData.type2;
  }
  ngOnInit() {
  }
  onSubmit() {
    this.dialogRef.close({
      data: this.obj
    });
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
