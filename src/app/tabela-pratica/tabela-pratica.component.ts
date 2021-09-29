import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable, MatTableDataSource} from '@angular/material';
import {AutoescolaService} from '../shared/autoescola.service';
import {ActivatedRoute} from '@angular/router';
import {SnackBarService} from '../shared/snack-bar.service';
import {MatSort} from '@angular/material/sort';
import {PracticalLines} from '../shared/practical-lines/practical-lines.model';
import {Student} from '../shared/student/student.model';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {LinesDialogComponent} from '../lines-dialog/lines-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-tabela-pratica',
  templateUrl: './tabela-pratica.component.html',
  styleUrls: ['./tabela-pratica.component.scss']
})
export class TabelaPraticaComponent implements OnInit {
  displayedColumns = ['hour', 'name1', 'check1', 'km1', 'name2', 'check2', 'km2', 'name3', 'check3', 'km3', 'name4', 'check4', 'km4', 'name5', 'check5', 'km5', 'delete'];
  table: any;
  lines: any;
  sum = [0, 0, 0, 0, 0];
  instructor: any;
  dataSource: any;

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public dialog: MatDialog, public addDialog: MatDialog, private autoescolaservice: AutoescolaService,
              private changeDetectorRefs: ChangeDetectorRef, private route: ActivatedRoute, private ns: SnackBarService) { }

  ngOnInit() {
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
          this.sumCalculate();
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
  sumCalculate() {

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
        this.sumCalculate();
        this.updateLine(this.lines[index]);
        this.updateSum(typeLine, result.data);
      }
    });
  }
  updateLine(line: any) {
    this.autoescolaservice.patchLine(line.id, line).subscribe(data => {
    });
  }
  updateSum(type: string, value: any) {
    value = parseInt(value, 10);
    if (type === 'km1') {
      this.table.sum1 += value;
    } else if (type === 'km2') {
      this.table.sum2 += value;
    } else if (type === 'km3') {
      this.table.sum3 += value;
    } else if (type === 'km4') {
      this.table.sum4 += value;
    } else if (type === 'km5') {
      this.table.sum5 += value;
    }
    this.autoescolaservice.patchTable(this.table).subscribe();
  }
  calculateSum() {

  }
  changeCheck(line: any) {
    this.autoescolaservice.patchLine(line.id, line).subscribe();
  }
  updateRowData() {
    this.autoescolaservice.getLineByTable(this.table.id).subscribe(data => {
      this.lines = data;
      this.dataSource.data = this.lines;
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
