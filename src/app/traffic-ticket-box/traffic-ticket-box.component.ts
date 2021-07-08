import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AutoescolaService} from '../shared/autoescola.service';
import {Student} from '../shared/student/student.model';
import * as moment from 'moment';
import {Trafficticket} from '../shared/traffic-ticket/trafficticket.model';

@Component({
  selector: 'app-traffic-ticket-box',
  templateUrl: './traffic-ticket-box.component.html',
  styleUrls: ['./traffic-ticket-box.component.scss']
})
export class TrafficTicketBoxComponent implements OnInit {
  formTicket = new FormGroup({
    student: new FormControl('', [Validators.required]),
    count: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    date: new FormControl('', [Validators.required]),
  });

  action: string;
  localData: any;
  index: number;
  type: string;
  obj: any;
  students = [];
  studentName: any;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
              public autoescolaservice: AutoescolaService) {
      this.localData = data;
      this.obj = this.localData.obj;
      this.autoescolaservice.getStudentList().subscribe(data => {
        this.students = data;
      });
    // this.index = this.localData.index;
      // this.action = this.localData.action;
      // this.type = this.localData.type;
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit() {
      const ticket = new Trafficticket();
      ticket.student = this.formTicket.value.student['id'];
      ticket.count = this.formTicket.value.count;
      ticket.date = moment(this.formTicket.value.date).format('MM-DD-YYYY');
      this.autoescolaservice.postTrafficTicket(ticket);
      this.dialogRef.close();
  }

  ngOnInit() {
  }

}
