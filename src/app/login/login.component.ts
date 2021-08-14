import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  form = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
                     private router: Router,
                    ) {

        this.createForm();
   }

  ngOnInit() {
  }
  onSubmit() {
  }
  createForm() {
  }

}
