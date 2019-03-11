import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { CoachService } from '../../../services/coach.service';
import { CrossfitClass } from '../../../models/crossfit-class.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-class-summary',
    templateUrl: './class-summary.component.html',
    styleUrls: ['./class-summary.component.css']
})
export class ClassSummaryComponent implements OnInit {

    faCheck = faCheck;
    faTimes = faTimes;

    completedClass: CrossfitClass;

    constructor(private coachService: CoachService, private router: Router, private location: Location, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.completedClass = this.coachService.getClass();
        this.completedClass.duration = Math.round(this.completedClass.duration);
    }

    register() {
        this.completedClass.dateTime = new Date(this.completedClass.dateTime).getTime();
        this.coachService.registerClass(this.completedClass).subscribe(response => {
            this.coachService.setClass(undefined);
            this.toastr.success('Successfully registered the class!', 'Register Class');
            this.router.navigate([`coach/${this.coachService.getName()}/classes`]);
        }, error => {
            this.toastr.error(error.error.error, 'Register Class');
        });
    }

}
