import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {StorageService} from '../shared/storage.service';
import {AutoescolaService} from '../shared/autoescola.service';
import {Employee} from '../shared/employee/employee.model';
import {MainNavComponent} from '../main-nav/main-nav.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: any;
    token: any;

  form = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
                     private router: Router, private storageService: StorageService, public autoescolaservice: AutoescolaService) {

   }
  ngOnInit() {
  }
  onSubmit() {
    this.autoescolaservice.login(this.form.value.login, this.form.value.password).subscribe(data => {
      this.token = data;
      this.addTokenInStorage();
      this.autoescolaservice.getEmployeeName(this.form.value.login).subscribe(result => {
        this.username = result;
        this.addUserInStorage();
      });
      this.redirect();
    });
  }
  addTokenInStorage() {
    this.storageService.setData('token', this.token);
  }
  addUserInStorage() {
    this.storageService.setData('name', this.username);
  }
  deleteUserStorage() {
    this.storageService.clearData();
  }
  redirect() {
    this.router.navigateByUrl('franquia');
  }
}
