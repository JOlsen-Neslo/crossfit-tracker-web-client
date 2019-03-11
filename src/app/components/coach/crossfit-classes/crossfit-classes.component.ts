import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { CoachService } from '../../../services/coach.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-crossfit-classes',
    templateUrl: './crossfit-classes.component.html',
    styleUrls: ['./crossfit-classes.component.css']
})
export class CrossfitClassesComponent {

    faPlus = faPlusSquare;

    name = '';
    classes = [];

    constructor(private route: ActivatedRoute, private coachService: CoachService, private router: Router, private toastr: ToastrService) {
        this.route.paramMap.subscribe(params => this.getCoach(params.get('name')));
    }

    getCoach(name: string): void {
        this.coachService.retrieveCoachClasses(name).subscribe(response => {
            this.toastr.success('Successfully retrieved the coaches classes!', 'Retrieve Classes');
            this.name = name;
            this.classes = response;
        }, error => {
            this.toastr.error(error.error.error, 'Retrieve Classes');
        });
    }

    newClass(): void {
        this.router.navigate([`coach/${this.coachService.getName()}/class`]);
    }

}
