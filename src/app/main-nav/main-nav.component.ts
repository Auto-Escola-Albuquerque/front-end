import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AutoescolaService} from '../shared/autoescola.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

    panelOpenState = false;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
    instructors: any;
    classes: any;
    constructor(private breakpointObserver: BreakpointObserver, private autoescolaservice: AutoescolaService,
                private router: Router) {
        this.autoescolaservice.getInstructorList().subscribe(data => {
            this.instructors = data;
        });
        this.autoescolaservice.getClassList().subscribe(data => {
            this.classes = data;
        });
    }
}
