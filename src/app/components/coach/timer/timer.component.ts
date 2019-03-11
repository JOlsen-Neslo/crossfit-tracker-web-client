import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoachService } from '../../../services/coach.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent {

    timerRef: any;
    time = 0;
    running = false;

    constructor(private router: Router, private coachService: CoachService, private location: Location) {
    }

    startTimer() {
        this.running = true;
        const startTime = Date.now() - (this.time || 0);
        this.timerRef = setInterval(() => {
            this.time = Date.now() - startTime;
        });
    }

    pauseTimer() {
        this.running = false;
        clearInterval(this.timerRef);
    }

    complete() {
        const theClass = this.coachService.getClass();
        theClass.duration = this.time / 1000 / 60;

        this.coachService.setClass(theClass);
        this.router.navigate([`/coach/${this.coachService.getName()}/class/summary`]);
    }

}
