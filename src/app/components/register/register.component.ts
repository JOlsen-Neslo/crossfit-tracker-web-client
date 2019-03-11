import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Coach } from '../../models/coach.model';

import { CoachService } from '../../services/coach.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    coach: Coach = new Coach();

    constructor(private coachService: CoachService, private router: Router, private location: Location) {
    }

    register() {
        this.coachService.register(this.coach).subscribe(response => {
            this.router.navigate(['']);
        }, error => {
            console.error(error);
        });
    }

}
