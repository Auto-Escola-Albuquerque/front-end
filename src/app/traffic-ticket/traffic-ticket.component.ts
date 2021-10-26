import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {AutoescolaService} from '../shared/autoescola.service';
import {Trafficticket} from '../shared/traffic-ticket/trafficticket.model';
import {Student} from '../shared/student/student.model';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {TrafficTicketBoxComponent} from '../traffic-ticket-box/traffic-ticket-box.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {StorageService} from '../shared/storage.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-traffic-ticket',
  templateUrl: './traffic-ticket.component.html',
  styleUrls: ['./traffic-ticket.component.scss'],
  providers: [
    DatePipe
  ]
})
export class TrafficTicketComponent implements OnInit {
    displayedColumns = ['id', 'student', 'count', 'date', 'type', 'delete'];
    dataSource: any;
    tickets: any;
    city: any;

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public dialog: MatDialog, private autoescolaservice: AutoescolaService,
              private changeDetectorRefs: ChangeDetectorRef, private storage: StorageService, private datePipe: DatePipe) {

  }
  ngOnInit() {
    this.autoescolaservice.getCity(this.storage.getData('franchise')).subscribe(data => {
      this.city = data;
    });
    this.updateRowData();
  }
  updateHourOfChange() {
    this.city.trafficTicketPeople = this.storage.getData('name');
    this.city.trafficTicket = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.autoescolaservice.patchCity(this.city).subscribe();
  }
  openDialog() {
    const ticket = new Trafficticket();
    const dialogRef = this.dialog.open(TrafficTicketBoxComponent, {
      width: '300px',
      data: ticket
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data === true) {
        this.updateRowData();
        this.updateHourOfChange();
      }
    });
  }
  updateRowData() {
    this.autoescolaservice.getTrafficTicketList().subscribe(data => {
      this.tickets = data;
      for (const i of this.tickets) {
        this.autoescolaservice.getStudent(i.student).subscribe(value => {
          i.student = value;
        });
      }
      this.dataSource = new MatTableDataSource(this.tickets);
      this.dataSource.sort = this.sort;
    });
  }
  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data : obj, type : 'multas'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData();
    });
  }
}
