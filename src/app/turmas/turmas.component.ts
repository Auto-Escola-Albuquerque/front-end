import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../shared/student/student.model';
import { MatPaginator, MatTableDataSource, MatTable } from '@angular/material';
import { MatSort } from '@angular/material/sort';

import { MAT_DATE_FORMATS } from '@angular/material/core';

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
    selector: 'app-turmas',
    templateUrl: './turmas.component.html',
    styleUrls: ['./turmas.component.scss'],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
    ]
})
export class TurmasComponent implements OnInit {
    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    

    students = [];
    displayedColumns = ['N°', 'name', 'cpf', 'registrationDate', 'update']
    dataSource: any;

    constructor() {

        let s1 = new Student();
        let s2 = new Student();
        let s3 = new Student();
        let s4 = new Student();
        let s5 = new Student();


        s1.name = 'Arthur Sávio Bernardo de Melo'
        s1.cpf = '12345678912'
        s1.gender = true
        s1.registrationDate = new Date('01/16/2021')

   
        s2.name = 'Guilherme Volney Mota Amaral'
        s2.cpf = '12345678912'
        s2.gender = true
        s2.registrationDate = new Date('02/15/2021')


     
        s3.name = 'Leonardo Freire de Albuquerque'
        s3.cpf = '12345678912'
        s3.gender = true
        s3.registrationDate = new Date('04/20/2021')


     
        s4.name = 'Severiano Alexandre Magno de Lima'
        s4.cpf = '12345678912'
        s4.gender = true
        s4.registrationDate = new Date('07/04/2021')

     
        s5.name = 'Galo Cego Magno de Lima'
        s5.cpf = '12345678912'
        s5.gender = true
        s5.registrationDate = new Date('07/04/2021')

        let count = 0;
        for(let i = 0; i < 10; i++) {
            s1.seqNo = count++
            s2.seqNo = count++
            s3.seqNo = count++
            s4.seqNo = count++
            s5.seqNo = count++
            this.students.push(s1, s2, s3, s4, s5);
        }
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.students);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.matPaginator
        this.dataSource.sort = this.sort;
    }

    doFilter(value: String) {
        this.dataSource.filter = value.trim().toLowerCase();
    }

}
