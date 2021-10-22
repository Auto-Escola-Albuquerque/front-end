import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {AutoescolaService} from '../shared/autoescola.service';
import {ActivatedRoute} from '@angular/router';
import {SnackBarService} from '../shared/snack-bar.service';
import {MatSort} from '@angular/material/sort';
import {PracticalLines} from '../shared/practical-lines/practical-lines.model';
import {LinesDialogComponent} from '../lines-dialog/lines-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {StorageService} from '../shared/storage.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DatePipe } from '@angular/common';

registerLocaleData(localePt);

@Component({
  selector: 'app-tabela-pratica',
  templateUrl: './tabela-pratica.component.html',
  styleUrls: ['./tabela-pratica.component.scss'],
  providers: [
    DatePipe
  ]
})

export class TabelaPraticaComponent implements OnInit {
  displayedColumns = ['hour', 'name1', 'check1', 'km1', 'name2', 'check2', 'km2', 'name3', 'check3', 'km3', 'name4', 'check4', 'km4', 'name5', 'check5', 'km5', 'delete'];
  table: any;
  lines: any;
  sum = [0, 0, 0, 0, 0];
  instructor: any;
  dataSource: any;
  hourChange: any;

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public dialog: MatDialog, public addDialog: MatDialog, private autoescolaservice: AutoescolaService,
              private changeDetectorRefs: ChangeDetectorRef, private route: ActivatedRoute, private ns: SnackBarService,
              private storage: StorageService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.autoescolaservice.getHourOfChange().subscribe(data => {
      this.hourChange = data;
    });
    this.route.params.subscribe(routeParams => {
      this.autoescolaservice.getTable(routeParams.id).subscribe(data => {
        this.table = data;
        this.autoescolaservice.getInstructor(this.table.instructor).subscribe(ins => {
          this.instructor = ins;
        });
        this.autoescolaservice.getLineByTable(routeParams.id).subscribe(value => {
          this.lines = value;
          this.dataSource = new MatTableDataSource(this.lines);
          this.dataSource.sort = this.sort;
        });
      });
    });

  }
  createNewLine() {
    const line = new PracticalLines();
    line.table = this.table.id;
    this.autoescolaservice.postLine(line).subscribe(data => {
      this.updateRowData();
    });
  }
  openDialog(obj: any, index: number, typeLine: string, type: string) {
    const dialogRef = this.dialog.open(LinesDialogComponent, {
      width: '400px',
      data: {obj, type: typeLine, type2: type}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event !== 'Cancel') {
        this.lines[index][typeLine] = result.data;
        this.dataSource.data = this.lines;
        this.updateLine(this.lines[index]);
        this.updateSum();
        this.updateHourOfChange();
      }
    });
  }
  updateLine(line: any) {
    this.autoescolaservice.patchLine(line.id, line).subscribe(data => {
    });
  }
  updateHourOfChange() {
    this.hourChange.practicalTablePeople = this.storage.getData('name');
    this.hourChange.practicalTable = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.autoescolaservice.patchHourOfChange(this.hourChange).subscribe();
  }
  updateSum() {
    this.clearTableSum();
    for (const i of this.lines) {
      this.table.sum1 += parseInt(i['km1'], 10);
      this.table.sum2 += parseInt(i['km2'], 10);
      this.table.sum3 += parseInt(i['km3'], 10);
      this.table.sum4 += parseInt(i['km4'], 10);
      this.table.sum5 += parseInt(i['km5'], 10);
    }
    this.autoescolaservice.patchTable(this.table).subscribe();
  }
  clearTableSum() {
    this.table.sum1 = 0;
    this.table.sum2 = 0;
    this.table.sum3 = 0;
    this.table.sum4 = 0;
    this.table.sum5 = 0;
  }
  changeCheck(line: any) {
    this.autoescolaservice.patchLine(line.id, line).subscribe();
  }
  updateRowData() {
    this.autoescolaservice.getLineByTable(this.table.id).subscribe(data => {
      this.lines = data;
      this.dataSource.data = this.lines;
      this.updateSum();
    });
  }
  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '20%',
      data: {data : obj, type : 'linhas-pratica'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateRowData();
    });
  }

}
