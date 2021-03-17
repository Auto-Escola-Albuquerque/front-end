import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../shared/employee/employee.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    // submitted = false;
    // onSubmit() { this.submitted = true; }

  constructor() {
        this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    let employee = new Employee();
    this.loginForm = new FormGroup({
        cpf: new FormControl(employee.cpf),
        password: new FormControl(employee.password)
    });
  }

  

}
