import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {AutoescolaService} from '../shared/autoescola.service';
import {ActivatedRoute} from '@angular/router';
import {SnackBarService} from '../shared/snack-bar.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  displayedColumns = ['N°', 'name', 'cpf', 'registrationDate'];
  dataSource: any;
  students: any;
  studentType: any;

  @ViewChild(MatTable, { static: false }) matTable: MatTable<any>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public autoescolaservice: AutoescolaService, private route: ActivatedRoute,  private ns: SnackBarService) {
  }
  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.studentType = routeParams.id;
      this.autoescolaservice.getStudentByType(this.studentType).subscribe(data => {
        this.students = data;
        for (let i = 0; i < this.students.length; i++) {
          this.students[i].seqNo = i + 1;
        }
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.sort = this.sort;
      });
    });
  }
  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
