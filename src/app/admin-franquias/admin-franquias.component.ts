import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTable, MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { AutoescolaService } from '../shared/autoescola.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DrivingSchool } from '../shared/driving-school/driving-school.model';


@Component({
    selector: 'app-admin-franquias',
    templateUrl: './admin-franquias.component.html',
    styleUrls: ['./admin-franquias.component.scss']
})
export class AdminFranquiasComponent implements OnInit {
    schools = []
    school = new DrivingSchool();
    displayedColumns = ['Id', 'name', 'update']
    dataSource: any;

    @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
    @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor(public dialog: MatDialog, private autoescolaService: AutoescolaService) {

    }

    ngOnInit() {

        let f1 = new DrivingSchool();
        let f2 = new DrivingSchool();
        let f3 = new DrivingSchool();


        f1.id = 1;
        f1.name = "Viçosa";

        f2.id = 2;
        f2.name = 'Maribondo';

        f3.id = 3;
        f3.name = 'Atalaia'

        this.schools.push(f1, f2, f3);

        // this.schools = this.autoescolaService.getDrivingSchoolList();
        this.dataSource = new MatTableDataSource(this.schools);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.matPaginator
        this.dataSource.sort = this.sort;
    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '400px',
            data: {obj: this.school, index: this.school.id, type: 'School'}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.updateRowData(result.data);
        })
    }

    doFilter(value: String) {
        this.dataSource.filter = value.trim().toLowerCase();
    }

    updateRowData(obj: any) {
        console.log(obj)
        this.dataSource = this.dataSource.data.filter((value, key) => {
            if(value.id == obj.index) {
                value.school = obj.DrivingSchool;
            }
            return true;
        });

        console.log(this.dataSource.data)
    }

}
