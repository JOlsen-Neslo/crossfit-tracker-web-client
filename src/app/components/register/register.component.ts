import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Coach } from '../../models/coach.model';

import { CoachService } from '../../services/coach.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    coach: Coach = new Coach();

    constructor(private coachService: CoachService, private router: Router, private location: Location, private toastr: ToastrService) {
    }

    register() {
        this.coachService.register(this.coach).subscribe(response => {
            this.toastr.success('Successfully registered a new coach!', 'Coach Registration');
            this.router.navigate(['']);
        }, error => {
            this.toastr.error(error.error.error, 'Coach Registration');
        });
    }

}
