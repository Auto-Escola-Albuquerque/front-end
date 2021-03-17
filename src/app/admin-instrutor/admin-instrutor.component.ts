import { Component, OnInit } from '@angular/core';
import { Instructor } from '../shared/instructor/instructor.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-instrutor',
  templateUrl: './admin-instrutor.component.html',
  styleUrls: ['./admin-instrutor.component.scss']
})
export class AdminInstrutorComponent implements OnInit {
    formInstructor: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  createForm(instructor: Instructor) {
    this.formInstructor = new FormGroup({
        name: new FormControl(instructor.name),
        cpf: new FormControl(instructor.cpf),
        type: new FormControl(instructor.type),
        city: new FormControl(instructor.city)
    });
  }

}
