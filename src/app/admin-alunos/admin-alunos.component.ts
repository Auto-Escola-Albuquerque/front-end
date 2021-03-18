import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../shared/student/student.model';
import { FormGroup, FormControl } from '@angular/forms';
import { AutoescolaService } from '../shared/autoescola.service';

@Component({
    selector: 'app-admin-alunos',
    templateUrl: './admin-alunos.component.html',
    styleUrls: ['./admin-alunos.component.scss']
})
export class AdminAlunosComponent implements OnInit {
    formStudent: FormGroup;
    students = [];
    student = new Student();

    constructor(private autoescolaService: AutoescolaService) { }

    ngOnInit() {
        this.formStudent = new FormGroup({
            name: new FormControl(this.student.name),
            cpf: new FormControl(this.student.cpf),
            registration: new FormControl(this.student.registrationDate),
            gender: new FormControl(this.student.gender),
            dayClasses: new FormControl(this.student.dayClasses),
            nigthClasses: new FormControl(this.student.nigthClasses),
        });

    }

    createStudent() {
        console.log(this.autoescolaService.postStudent(this.student));
    }

    getEmployeeList() {
        this.students = this.autoescolaService.getStudentList();
    }


}
