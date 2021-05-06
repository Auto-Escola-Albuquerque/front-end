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
    formInstructor = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      type: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
    instructors = [];
    instructor = new Instructor();

    constructor(private autoescolaService: AutoescolaService) { }

    ngOnInit() {

    }


    onSubmit() {
      const instructor = new Instructor();
      instructor.name = this.formInstructor.value.name;
      instructor.cpf = this.formInstructor.value.cpf;
      instructor.type = this.formInstructor.value.type;

      this.autoescolaService.postInstructor(instructor);
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
