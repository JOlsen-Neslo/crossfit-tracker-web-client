import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { CoachService } from '../../../services/coach.service';
import { CrossfitClass } from '../../../models/crossfit-class.model';

@Component({
    selector: 'app-class-summary',
    templateUrl: './class-summary.component.html',
    styleUrls: ['./class-summary.component.css']
})
export class ClassSummaryComponent implements OnInit {

    faCheck = faCheck;
    faTimes = faTimes;

    completedClass: CrossfitClass;

    constructor(private coachService: CoachService, private router: Router, private location: Location) {
    }

    ngOnInit() {
        this.completedClass = this.coachService.getClass();
        this.completedClass.duration = Math.round(this.completedClass.duration);
    }

    register() {
        this.completedClass.dateTime = new Date(this.completedClass.dateTime).getTime();
        this.coachService.registerClass(this.completedClass).subscribe(response => {
            this.router.navigate([`coach/${this.coachService.getName()}/classes`]);
        }, error => {
            console.log(error);
        });
    }

}
