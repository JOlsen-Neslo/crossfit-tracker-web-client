import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { CoachService } from '../../../services/coach.service';
import { ClassService } from '../../../services/class.service';
import { CrossfitClass } from '../../../models/crossfit-class.model';

@Component({
    selector: 'app-class-view',
    templateUrl: './class-view.component.html',
    styleUrls: ['./class-view.component.css', '../coach.component.css']
})
export class ClassViewComponent implements OnInit {

    faCheck = faCheck;
    faTimes = faTimes;

    selectedClass: CrossfitClass;

    constructor(private route: ActivatedRoute, private location: Location,
                private coachService: CoachService, private classService: ClassService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => this.getClass(params.get('id')));
    }

    getClass(id: string | number): void {
        this.coachService.retrieveClass(id).subscribe(response => {
            this.selectedClass = response;
            delete this.selectedClass.athletes;
            this.getAthletes(id);
        }, error => {
            console.error(error);
        });
    }

    getAthletes(id: string | number): void {
        console.log("here");
        this.classService.retrieveAthletes(id).subscribe(response => {
            this.selectedClass.athletes = response;
        }, error => {
            console.error(error);
        });
    }

}
