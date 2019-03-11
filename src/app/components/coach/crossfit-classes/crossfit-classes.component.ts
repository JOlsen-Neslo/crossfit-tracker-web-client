import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { CoachService } from '../../../services/coach.service';

@Component({
    selector: 'app-crossfit-classes',
    templateUrl: './crossfit-classes.component.html',
    styleUrls: ['./crossfit-classes.component.css']
})
export class CrossfitClassesComponent {

    faPlus = faPlusSquare;

    name = '';
    classes = [];

    constructor(private route: ActivatedRoute, private coachService: CoachService, private router: Router) {
        this.route.paramMap.subscribe(params => this.getCoach(params.get('name')));
    }

    getCoach(name: string): void {
        this.coachService.retrieveCoachClasses(name).subscribe(response => {
            this.name = name;
            this.classes = response;
        }, error => {
            console.error(error);
        });
    }

    newClass(): void {
        this.router.navigate([`coach/${this.coachService.getName()}/class`]);
    }

}
