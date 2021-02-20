import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Student } from '../shared/student/student.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-admin-alunos',
    templateUrl: './admin-alunos.component.html',
    styleUrls: ['./admin-alunos.component.scss']
})
export class AdminAlunosComponent implements OnInit {
        formCliente: FormGroup;

    constructor() { }

    ngOnInit() {
        this.createForm(new Student());
    }

    createForm(student: Student) {
        this.formCliente = new FormGroup({ 
            name: new FormControl(student.name),
            cpf: new FormControl(student.cpf),
            registration: new FormControl(student.registrationDate),
            gender: new FormControl(student.gender),
            dayClasses: new FormControl(student.dayClasses),
            nigthClasses: new FormControl(student.nigthClasses),

        })
    }

}
