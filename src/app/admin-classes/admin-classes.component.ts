import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTable } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { Class } from '../shared/class/class.model';
import { AutoescolaService } from '../shared/autoescola.service';

@Component({
    selector: 'app-admin-classes',
    templateUrl: './admin-classes.component.html',
    styleUrls: ['./admin-classes.component.scss']
})
export class AdminClassesComponent implements OnInit {
    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    classes = [];
    displayedColumns = ['N°', 'name', 'shift', 'size', 'update']
    dataSource: any;

    constructor(private autoescolaService: AutoescolaService) { }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.classes);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.matPaginator
        this.dataSource.sort = this.sort;
    }

    doFilter(value: String) {
        this.dataSource.filter = value.trim().toLowerCase();
    }

    createClass() {
        let newClass = new Class();
        this.classes.push(newClass);
        this.autoescolaService.postClass(newClass);
        this.refresh()
        console.log('dasd')
    }

    refresh() {
        this.autoescolaService.getClassList().subscribe((data: Class[]) => {
            this.dataSource.data = data;
        })
    }
}
