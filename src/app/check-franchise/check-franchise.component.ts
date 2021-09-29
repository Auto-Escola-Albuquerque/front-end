import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AutoescolaService} from '../shared/autoescola.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../shared/storage.service';

@Component({
  selector: 'app-check-franchise',
  templateUrl: './check-franchise.component.html',
  styleUrls: ['./check-franchise.component.scss']
})
export class CheckFranchiseComponent implements OnInit {
  form = new FormGroup({
    franchise: new FormControl('', [Validators.required])
  });
  franchises: any;

  constructor(public autoescolaservice: AutoescolaService, private router: Router,  private storageService: StorageService) { }

  ngOnInit() {
    this.autoescolaservice.getCityList().subscribe(data => {
      this.franchises = data;
    });
  }
  onSubmit() {
    this.storageService.setData('franchise', this.form.value.franchise);
    this.redirect();
  }
  redirect() {
    this.router.navigateByUrl('home');
  }
}
