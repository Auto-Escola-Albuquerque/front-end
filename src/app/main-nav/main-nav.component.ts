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
    router: Router;

    constructor(private breakpointObserver: BreakpointObserver, private autoescolaservice: AutoescolaService) {
        this.autoescolaservice.getInstructorList().subscribe(data => {
            this.instructors = data;
        });
    }

    changeRoute(url: any) {
        this.router.navigateByUrl('/dummy', { skipLocationChange: true });
        setTimeout(() => this.router.navigate(url));
    }

}
