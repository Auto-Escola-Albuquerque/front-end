import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AutoescolaService} from '../shared/autoescola.service';
import {Router} from '@angular/router';
import {StorageService} from '../shared/storage.service';

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

    constructor(private breakpointObserver: BreakpointObserver, private autoescolaservice: AutoescolaService,
                private router: Router, private storage: StorageService) {
        this.autoescolaservice.getInstructorList().subscribe(data => {
            this.instructors = data;
        });
        this.autoescolaservice.getClassList().subscribe(data => {
            this.classes = data;
        });
        this.autoescolaservice.getTableList().subscribe(data =>{
          this.tables = data;
        });
        this.employee = this.storage.getData('name');
    }
    logout() {
      this.storage.clearData();
      this.router.navigateByUrl('login');
    }
}
