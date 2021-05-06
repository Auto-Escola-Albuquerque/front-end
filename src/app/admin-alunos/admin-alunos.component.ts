import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student/student.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoescolaService } from '../shared/autoescola.service';
import * as moment from 'moment';
import {Subjects} from '../shared/subjects/subjects.model';
import {Subject} from 'rxjs';



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
    students = [];
    student = new Student();
    hide = true;

    constructor(public autoescolaService: AutoescolaService) {
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
    }

    getErrorMessage() {
        if (this.formStudent.hasError('required')) {
            return 'Este campo não pode ser vazio';
        }

        return this.formStudent.hasError('maxLength') ? 'CPF deve conter apenas 11 dígitos' : '';
    }

    disabledButton() {
        if (this.student.name == undefined || this.student.cpf == undefined || this.student.registrationDate == undefined) {
            return true;
        }
        return false;
    }

    onSubmit() {
        try {
            const student = new Student();
            student.name = this.formStudent.value.name;
            student.cpf = this.formStudent.value.cpf;
            student.registrationDate = moment(this.formStudent.value.registration).format('MM-DD-YYYY');
            student.gender = this.formStudent.value.gender;
            student.email = this.formStudent.value.email;
            student.phone = this.formStudent.value.phone;
            student.theoreticalFines = this.formStudent.value.theoreticalFines;
            student.practicalFines = this.formStudent.value.practicalFines;
            student.dayClasses = this.formStudent.value.dayClasses;
            student.nightClasses = this.formStudent.value.nightClasses;
            student.subjects = null;
            this.autoescolaService.postStudent(student);
        } catch (error) {
            console.log('Erro ao vincular matéria ao aluno');
        }
    }
}
