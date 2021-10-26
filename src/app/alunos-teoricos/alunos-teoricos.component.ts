import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTable, MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';

import { Student } from '../shared/student/student.model';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { AutoescolaService } from '../shared/autoescola.service';
import {ActivatedRoute} from '@angular/router';
import {AddRelationshipDialogComponent} from '../add-relationship-dialog/add-relationship-dialog.component';
import {Class} from '../shared/class/class.model';
import {SnackBarService} from '../shared/snack-bar.service';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {DatePipe} from '@angular/common';
import {StorageService} from '../shared/storage.service';

@Component({
    selector: 'app-alunos-teoricos',
    templateUrl: './alunos-teoricos.component.html',
    styleUrls: ['./alunos-teoricos.component.scss'],
    providers: [
      DatePipe
    ]
})
export class AlunosTeoricosComponent implements OnInit {
    students: any;
    class: any;
    value: any;
    city: any;

    displayedColumns = ['N°', 'name', 'mat1', 'mat2',
        'mat3', 'mat4', 'mat5', 'c1', 'c2', 'c3', 'delete'];
    dataSource: any;

    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(public dialog: MatDialog, public addDialog: MatDialog, private autoescolaservice: AutoescolaService,
      private changeDetectorRefs: ChangeDetectorRef, private route: ActivatedRoute, private ns: SnackBarService,
                private storage: StorageService, private datePipe: DatePipe) {
    }

    ngOnInit() {
      this.autoescolaservice.getCity(this.storage.getData('franchise')).subscribe(data => {
        this.city = data;
      });
      this.route.params.subscribe(routeParams => {
        this.autoescolaservice.getClass(routeParams.id).subscribe(data => {
          this.class = data;
          this.autoescolaservice.getStudentRelationship(routeParams.id).subscribe(data => {
            this.students = data;
            for(let i = 0; i < this.students.length; i++) {
              this.students[i].seqNo = i+1;
            }
            this.dataSource = new MatTableDataSource(this.students);
            this.dataSource.sort = this.sort;
          });
        });
      });
    }
    doFilter(value: string) {
        this.dataSource.filter = value.trim().toLowerCase();
    }
    updateHourOfChange() {
      this.city.classesPeople = this.storage.getData('name');
      this.city.classes = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.autoescolaservice.patchCity(this.city).subscribe();
    }
    openDialog(obj: Student, index: number) {
        const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '400px',
            data: {obj, index, type: 'Student'}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.updateRowData2(result.data);
            this.updateHourOfChange();
        });
    }
    openAddDialog() {
      const dialogRef = this.addDialog.open(AddRelationshipDialogComponent, {
        width: '400px',
        data: this.class
      });

      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
        this.updateHourOfChange();
      });
    }
    openDeleteDialog(obj: any) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '20%',
        data: {data : obj, type : 'relacao-estudante'}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.updateRowData();
        this.updateHourOfChange();
      });
    }

    updateRowData() {
        this.autoescolaservice.getStudentRelationship(this.class.id).subscribe(data => {
          this.students = data;
          for (let i = 0; i < this.students.length; i++) {
            this.students[i].seqNo = i + 1;
          }
          this.dataSource.data = this.students;
        });
    }
    updateRowData2(obj: any) {
      this.dataSource = this.dataSource.data.filter((value, key) => {
          if (value.id === obj.id) {
              value.subjects = obj.subjects;
          }
          return true;
      });
    }

    changeCheck1(student: Student) {
      student.check1 == true ? student.check1 = false : student.check1 = true;
    }

    changeCheck2(student: Student) {
      student.check2 == true ? student.check2 = false : student.check2 = true;
    }

    changeCheck3(student: Student) {
      student.check3 == true ? student.check3 = false : student.check3 = true;
    }

    onSubmit() {
        for (const i of this.students) {
          this.autoescolaservice.patchStudent(i).subscribe(data => {
            this.success();
          }, error => {
            this.error();
          });
        }
        this.updateHourOfChange();
    }

    success() {
      this.ns.success('Alterações Salvas com sucesso');
    }
    error() {
      this.ns.error('Erro salvar alterações. Verifique os campos e tente novamente!');
    }
}
