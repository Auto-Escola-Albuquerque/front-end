import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student/student.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoescolaService } from '../shared/autoescola.service';

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
        gender: new FormControl(''),
        dayClasses: new FormControl(0),
        nigthClasses: new FormControl(0),
        subject1: new FormControl(0),
        subject2: new FormControl(0),
        subject3: new FormControl(0),
        subject4: new FormControl(0),
        subject5: new FormControl(0),
    });
    students = [];
    student = new Student();
    hide = true;


    constructor(public autoescolaService: AutoescolaService) { }

    ngOnInit() {
    }

    getEmployeeList() {
        this.students = this.autoescolaService.getStudentList();
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

    onSubmit(){
        let student = new Student();
        student.seqNo = this.students.length + 1;
        student.name = this.formStudent.value.name;
        student.cpf = this.formStudent.value.cpf;
        student.registrationDate = this.formStudent.value.registration;
        student.gender = this.formStudent.value.gender;
        student.dayClasses = this.formStudent.value.dayClasses;
        student.nigthClasses = this.formStudent.value.nigthClasses;
        student.subjects[0] = this.formStudent.value.subject1;
        student.subjects[1] = this.formStudent.value.subject2;
        student.subjects[2] = this.formStudent.value.subject3;
        student.subjects[3] = this.formStudent.value.subject4;
        student.subjects[4] = this.formStudent.value.subject5;

        this.autoescolaService.postStudent(student);
    }
}
