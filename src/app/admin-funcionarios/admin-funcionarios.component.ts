import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../shared/employee/employee.model';
import { AutoescolaService } from '../shared/autoescola.service';


@Component({
    selector: 'app-admin-funcionarios',
    templateUrl: './admin-funcionarios.component.html',
    styleUrls: ['./admin-funcionarios.component.scss']
})
export class AdminFuncionariosComponent implements OnInit {

    formEmployee = new FormGroup({
        name: new FormControl('', [Validators.required]),
        cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
        password: new FormControl('', [Validators.required]),
    });
    
    employees = [];
    employee = new Employee();


    constructor(private autoescolaService: AutoescolaService) {
    }

    ngOnInit() {
    }

    getEmployeeList() {
        // this.employees = this.autoescolaService.getEmployeeList();
    }

    getErrorMessage() {
        if(this.formEmployee.hasError('required')) {
            return 'Este campo não pode ser vazio';
        }

        return this.formEmployee.hasError('maxLength') ? 'CPF deve conter apenas 11 dígitos':'';
    }

    disabledButton() {
        if(this.employee.name && this.employee.cpf)
            return true;
        return false;    
    }

    onClickSubmit() {
        let employee = new Employee();
        
        employee.name = this.formEmployee.value.name;
        employee.cpf = this.formEmployee.value.cpf;
        employee.password = this.formEmployee.value.password;

        this.autoescolaService.postEmployee(employee);
    }
}
