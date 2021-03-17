import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../shared/employee/employee.model';
import { AutoescolaService } from '../shared/autoescola.service';


@Component({
    selector: 'app-admin-funcionarios',
    templateUrl: './admin-funcionarios.component.html',
    styleUrls: ['./admin-funcionarios.component.scss']
})
export class AdminFuncionariosComponent implements OnInit {
    formEmployee: FormGroup;
    employees = [];
    employee = new Employee();
    constructor(private autoescolaService: AutoescolaService) { }

    ngOnInit() {
        this.formEmployee = new FormGroup({
            name: new FormControl(this.employee.name),
            cpf: new FormControl(this.employee.cpf),
            password: new FormControl(this.employee.password),
        })
    }

    createEmployee() {
        console.log(this.autoescolaService.postEmployee(this.employee))
    }

    getEmployeeList() {
        this.employees = this.autoescolaService.getEmployeeList();
    }
}
