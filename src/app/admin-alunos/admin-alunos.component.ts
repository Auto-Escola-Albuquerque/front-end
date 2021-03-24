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
    formStudent: FormGroup;
    students = [];
    student = new Student();
    hide = true;


    constructor(private autoescolaService: AutoescolaService) { }

    ngOnInit() {
        this.formStudent = new FormGroup({
            name: new FormControl(this.student.name, [Validators.required]),
            cpf: new FormControl(this.student.cpf, [Validators.required, Validators.maxLength(11)]),
            registration: new FormControl(this.student.registrationDate, [Validators.required]),
            gender: new FormControl(this.student.gender),
            dayClasses: new FormControl(this.student.dayClasses),
            nigthClasses: new FormControl(this.student.nigthClasses),
            subject1: new FormControl(this.student.subjects[0]),
            subject2: new FormControl(this.student.subjects[1]),
            subject3: new FormControl(this.student.subjects[2]),
            subject4: new FormControl(this.student.subjects[3]),
            subject5: new FormControl(this.student.subjects[4]),
        });

    }

    createStudent() {
        console.log(this.autoescolaService.postStudent(this.student));
    }

    getEmployeeList() {
        this.students = this.autoescolaService.getStudentList();
    }

    getErrorMessage() {
        if(this.formStudent.hasError('required')) {
            return 'Este campo não pode ser vazio';
        }

        return this.formStudent.hasError('maxLength') ? 'CPF deve conter apenas 11 dígitos':'';
    }

    disabledButton() {
        if(this.student.name == undefined|| this.student.cpf == undefined || this.student.registrationDate == undefined) {
            return true;
        }
        return false;    
    }
}
