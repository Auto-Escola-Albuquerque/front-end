import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {AutoescolaService} from '../shared/autoescola.service';
import {Trafficticket} from '../shared/traffic-ticket/trafficticket.model';
import {Student} from '../shared/student/student.model';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {TrafficTicketBoxComponent} from '../traffic-ticket-box/traffic-ticket-box.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-traffic-ticket',
  templateUrl: './traffic-ticket.component.html',
  styleUrls: ['./traffic-ticket.component.scss']
})
export class TrafficTicketComponent implements OnInit {
    displayedColumns = ['id', 'student', 'count', 'date', 'delete'];
    dataSource: any;
    tickets: any;

    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public dialog: MatDialog, private autoescolaservice: AutoescolaService,
              private changeDetectorRefs: ChangeDetectorRef) {

  }

  openDialog() {
    const ticket = new Trafficticket();
    const dialogRef = this.dialog.open(TrafficTicketBoxComponent, {
      width: '300px',
      data: ticket
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData(result.data);
    });
  }

  updateRowData(obj: any) {
    this.dataSource = this.dataSource.data.filter((value, key) => {
      if (value.id === obj.id) {
        value.subjects = obj.subjects;
      }
      return true;
    });
  }

  ngOnInit() {
      this.autoescolaservice.getTrafficTicketList().subscribe(data => {
          this.tickets = data;
          for (const i of this.tickets) {
              this.autoescolaservice.getStudent(i.student).subscribe(value => {
                  i.student = value;
              });
          }
          this.dataSource = new MatTableDataSource(this.tickets);
      });
  }

  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data : obj, type : 'multas'}
    });
  }

}
