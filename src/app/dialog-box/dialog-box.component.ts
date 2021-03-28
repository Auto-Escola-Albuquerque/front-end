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
    local_data: any;
    index: number;

    constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: Student) {
        this.local_data = data
        this.index = this.local_data.index;
        this.action = this.local_data.action;
    }

    ngOnInit() {
    }

    doAction() {
        this.dialogRef.close({
            event: this.action, data: this.local_data
        });
    }

    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }

}
