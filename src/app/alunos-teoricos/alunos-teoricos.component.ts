import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTable, MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';

import { Student } from '../shared/student/student.model';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { AutoescolaService } from '../shared/autoescola.service';
import {map} from 'rxjs/operators';

export const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    },
};

@Component({
    selector: 'app-alunos-teoricos',
    templateUrl: './alunos-teoricos.component.html',
    styleUrls: ['./alunos-teoricos.component.scss']
})
export class AlunosTeoricosComponent implements OnInit {
    students: any;
    subjects: any;

    displayedColumns = ['N°', 'name', 'cpf', 'registrationDate', 'mat1', 'mat2',
        'mat3', 'mat4', 'mat5', 'c1', 'c2', 'c3'];
    dataSource: any;

    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(public dialog: MatDialog, private autoescolaservice: AutoescolaService,
      private changeDetectorRefs: ChangeDetectorRef) {

    }

    ngOnInit() {
      this.autoescolaservice.getSubjectsList().subscribe(data => {
        this.subjects = data;
      });

      this.autoescolaservice.getStudentList().subscribe(data => {
        this.students = data;
        for (let i = 0; i < this.students.length; i++){
            this.students[i].seqNo = i + 1;
            this.students[i].subjects = this.subjects[i];
        }
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.paginator = this.matPaginator;
        this.dataSource.sort = this.sort;
        this.ngAfterViewInit();
      });
    }

    ngAfterViewInit() {
        this.matPaginator._intl.itemsPerPageLabel = "Quantidade de alunos por página";
    }
    doFilter(value: String) {
        this.dataSource.filter = value.trim().toLowerCase();
    }
    openDialog(obj: Student, index: number) {
        const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '400px',
            data: {obj, index, type: 'Student'}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.updateRowData(result.data);
        });
    }
    updateRowData(obj: any) {
        this.dataSource = this.dataSource.data.filter((value, key) => {
            if(value.id == obj.id) {
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
          this.autoescolaservice.patchStudentCheck(i);
          this.autoescolaservice.putSubjects(i.subjects);
        }
    }
}
