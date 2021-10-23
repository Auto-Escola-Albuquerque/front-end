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
    isAdmin: any;

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
    // console.log(this.storageService.getData('name'), this.storageService.getData('isAdmin'), this.storageService.getData('token'));

    // let em = new Employee();
    // em.username = 'admin';
    // em.email = 'admin@gmail.com';
    // em.password = '123';
    // em.isAdmin = true;
    // this.autoescolaservice.postEmployee(em).subscribe();
  }
  onSubmit() {
    this.autoescolaservice.login(this.form.value.login, this.form.value.password).subscribe(data => {
      this.token = data;
      this.addTokenInStorage();
      this.autoescolaservice.getEmployeeName(this.form.value.login).subscribe(result => {
        this.username = result['username'];
        this.isAdmin = result['isAdmin'];
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
    this.storageService.setData('isAdmin', this.isAdmin);
  }
  clearData() {
    this.storageService.clearData();
  }
  redirect() {
    this.router.navigateByUrl('franquia');
  }
}
