import { Component } from '@angular/core';

import { CoachService } from '../../services/coach.service';

import { Coach } from '../../models/coach.model';
import { LocalStorageService } from '../../services/local-storage.service';
import { Credentials } from '../../models/credentials.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    name = '';
    password = '';

    constructor(private coachService: CoachService, private router: Router,
                private storageService: LocalStorageService) {
    }

    login() {
        const coach = new Coach(this.name, this.password);
        this.coachService.authenticate(coach).subscribe((response: Credentials) => {
            if (response.token) {
                this.storageService.add('token', response.token);
                this.router.navigate([`/coach/${coach.name}/classes`]);
            }
        }, error => {
            console.error(error);
        });
    }

}
