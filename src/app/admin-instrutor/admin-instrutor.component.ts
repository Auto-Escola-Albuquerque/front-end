import { Component, OnInit } from '@angular/core';
import { Instructor } from '../shared/instructor/instructor.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoescolaService } from '../shared/autoescola.service';

@Component({
    selector: 'app-admin-instrutor',
    templateUrl: './admin-instrutor.component.html',
    styleUrls: ['./admin-instrutor.component.scss']
})
export class AdminInstrutorComponent implements OnInit {
    formInstructor: FormGroup;
    instructors = [];
    instructor = new Instructor();

    constructor(private autoescolaService: AutoescolaService) { }

    ngOnInit() {
        this.formInstructor = new FormGroup({
            name: new FormControl(this.instructor.name, [Validators.required]),
            cpf: new FormControl(this.instructor.cpf, [Validators.required, Validators.maxLength(11)]),
            type: new FormControl(this.instructor.type, [Validators.required]),
            city: new FormControl(this.instructor.city, [Validators.required])
        });
    }

    createInstructor(instructor: Instructor) {
        // console.log(this.autoescolaService.post(this.instructor))

    }

    getInstructor() {

    }

    getInstructorList() {

    }

    disabledButton() {

    }

    getErrorMessage() {
        if (this.formInstructor.hasError('required')) {
            return 'Este campo não pode ser vazio';
        }

        return this.formInstructor.hasError('maxLength') ? 'CPF deve conter apenas 11 dígitos' : '';
    }

}
