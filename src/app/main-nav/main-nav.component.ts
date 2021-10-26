import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {AutoescolaService} from '../shared/autoescola.service';
import {Router} from '@angular/router';
import {StorageService} from '../shared/storage.service';
import {HourChange} from '../shared/hour-change/hour-change.model';
@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
    instructors: any;
    classes: any;
    employee: any;
    tables: any;
    franchise: any;
    isAdmin: any;

    constructor(private breakpointObserver: BreakpointObserver, private autoescolaservice: AutoescolaService,
                private router: Router, private storage: StorageService) {

        this.isAdmin = this.storage.getData('isAdmin');
        this.autoescolaservice.getInstructorList().subscribe(data => {
              this.instructors = data;
          });
        this.autoescolaservice.getClassList().subscribe(data => {
            this.classes = data;
        });
        this.autoescolaservice.getTableList().subscribe(data => {
          this.tables = data;
        });
        this.employee = this.storage.getData('name');
        this.autoescolaservice.getCity(this.storage.getData('franchise')).subscribe(data => {
          this.franchise = data;
        });
    }

    logout() {
      this.storage.clearData();
      this.router.navigateByUrl('');
    }
    changeFranchise() {
      this.router.navigateByUrl('franquia');
    }
}
