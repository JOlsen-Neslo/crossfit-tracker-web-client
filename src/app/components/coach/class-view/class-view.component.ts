import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { CoachService } from '../../../services/coach.service';
import { ClassService } from '../../../services/class.service';
import { CrossfitClass } from '../../../models/crossfit-class.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-class-view',
    templateUrl: './class-view.component.html',
    styleUrls: ['./class-view.component.css', '../coach.component.css']
})
export class ClassViewComponent implements OnInit {

    faCheck = faCheck;
    faTimes = faTimes;

    selectedClass = new CrossfitClass();

    constructor(private route: ActivatedRoute, private location: Location,
                private coachService: CoachService, private classService: ClassService, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => this.getClass(params.get('id')));
    }

    getClass(id: string | number): void {
        this.coachService.retrieveClass(id).subscribe(response => {
            this.toastr.success('Successfully retrieved the class details!', 'Retrieve Class Details');
            this.selectedClass = response;
            delete this.selectedClass.athletes;
            this.getAthletes(id);
        }, error => {
            this.toastr.error(error.error.error, 'Retrieve Classes');
        });
    }

    getAthletes(id: string | number): void {
        this.classService.retrieveAthletes(id).subscribe(response => {
            this.toastr.success('Successfully retrieved the athletes that took part in this class!', 'Retrieve Athletes');
            this.selectedClass.athletes = response;
        }, error => {
            this.toastr.error(error.error.error, 'Retrieve Classes');
        });
    }

}
