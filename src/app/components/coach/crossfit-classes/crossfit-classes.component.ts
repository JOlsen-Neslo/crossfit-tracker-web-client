import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from '../../../services/coach.service';

@Component({
    selector: 'app-crossfit-classes',
    templateUrl: './crossfit-classes.component.html',
    styleUrls: ['./crossfit-classes.component.css']
})
export class CrossfitClassesComponent {

    name = '';
    classes = [];

    constructor(private route: ActivatedRoute, private coachService: CoachService) {
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

}
