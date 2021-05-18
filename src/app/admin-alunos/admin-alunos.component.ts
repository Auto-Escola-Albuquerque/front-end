import {ChangeDetectorRef, Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Student } from '../shared/student/student.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoescolaService } from '../shared/autoescola.service';
import * as moment from 'moment';
import {Subjects} from '../shared/subjects/subjects.model';
import {Subject} from 'rxjs';
import { MatPaginator, MatTableDataSource, MatTable, MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import {AdminAlunosDialogComponent} from '../admin-alunos-dialog/admin-alunos-dialog.component';


@Component({
    selector: 'app-admin-alunos',
    templateUrl: './admin-alunos.component.html',
    styleUrls: ['./admin-alunos.component.scss']
})
export class AdminAlunosComponent implements OnInit {
    formStudent = new FormGroup({
        name: new FormControl('', [Validators.required]),
        cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
        registration: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        theoreticalFines: new FormControl(0),
        practicalFines: new FormControl(0),
        dayClasses: new FormControl(0),
        nightClasses: new FormControl(0),
        defensiveDriving: new FormControl(0),
        firstAid: new FormControl(0),
        environment: new FormControl(0),
        legislation: new FormControl(0),
        mechanics: new FormControl(0),
    });

    displayedColumns = ['N°', 'name', 'cpf', 'registrationDate'];
    dataSource: any;
    students = [];
    student = new Student();

    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(public autoescolaservice: AutoescolaService, private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog) {
        if  (this.formStudent.value.name.length === 0) {
            this.formStudent.controls.dayClasses.disable();
            this.formStudent.controls.nightClasses.disable();
            this.formStudent.controls.defensiveDriving.disable();
            this.formStudent.controls.firstAid.disable();
            this.formStudent.controls.environment.disable();
            this.formStudent.controls.legislation.disable();
            this.formStudent.controls.mechanics.disable();
            this.formStudent.controls.theoreticalFines.disable();
            this.formStudent.controls.practicalFines.disable();
        }
    }

    ngOnInit() {
      this.autoescolaservice.getSubjectsList().subscribe();

      this.autoescolaservice.getStudentList().subscribe(data => {
        this.students = data;
        for (let i = 0; i < this.students.length; i++){
          this.students[i].seqNo = i + 1;
        }
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.sort = this.sort;
      });
    }

    getErrorMessage() {
        if (this.formStudent.hasError('required')) {
            return 'Este campo não pode ser vazio';
        }

        return this.formStudent.hasError('maxLength') ? 'CPF deve conter apenas 11 dígitos' : '';
    }

    doFilter(value: string) {
      this.dataSource.filter = value.trim().toLowerCase();
    }

    openDialog(obj: any) {
      const dialogRef = this.dialog.open(AdminAlunosDialogComponent, {
        width: '50%',
        data: {data: obj}
      });
    }
}
