import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../shared/student/student.model';

@Component({
    selector: 'app-dialog-box',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
    action: string;
    localData: any;
    index: number;
    type: String;
    obj: any;

    constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        this.localData = data;
        this.obj = this.localData.obj;
        this.index = this.localData.index;
        this.action = this.localData.action;
        this.type = this.localData.type;
    }

    ngOnInit() {
    }

    doAction() {
        this.dialogRef.close({
            event: this.action, data: this.obj
        });
    }

    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }

}
