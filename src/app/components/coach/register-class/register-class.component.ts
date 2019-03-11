import { Component, OnInit } from '@angular/core';
import { formatDate, Location } from '@angular/common';
import { Router } from '@angular/router';
import { faCheck, faPlusCircle, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

import { CoachService } from '../../../services/coach.service';
import { CrossfitClass } from '../../../models/crossfit-class.model';
import { Athlete } from '../../../models/athlete.model';

@Component({
    selector: 'app-register-class',
    templateUrl: './register-class.component.html',
    styleUrls: ['./register-class.component.css', '../coach.component.css']
})
export class RegisterClassComponent implements OnInit {

    faCheck = faCheck;
    faTimes = faTimes;
    faPlus = faPlusCircle;
    faTrash = faTrash;

    athlete = new Athlete();
    class = new CrossfitClass();

    adding = false;

    constructor(private router: Router, private coachService: CoachService, private location: Location) {
        this.fixDate();
    }

    ngOnInit(): void {
        const serviceClass = this.coachService.getClass();
        if (serviceClass) {
            this.class = serviceClass;
        }
        this.fixDate();
    }

    fixDate(): void {
        const date = new Date(this.class.dateTime);
        this.class.dateTime = formatDate(date, 'yyyy-MM-dd\THH:mm:ss', 'en-ZA');
    }

    addAthlete() {
        this.class.athletes.push(this.athlete);
        this.athlete = new Athlete();
        this.changeContext();
    }

    removeAthlete(athlete: Athlete): void {
        this.class.athletes = this.class.athletes.filter(anAthlete => anAthlete.name !== athlete.name);
    }

    next() {
        this.coachService.setClass(this.class);
        this.router.navigate([`/coach/${this.coachService.getName()}/class/timer`]);
    }

    changeContext(): void {
        this.adding = !this.adding;
    }

    cancel() {
        this.athlete = new Athlete();
        this.changeContext();
    }

}
