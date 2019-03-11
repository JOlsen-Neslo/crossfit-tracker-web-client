import { Athlete } from './athlete.model';
import { ApiEntity } from './api-entity.model';

export class CrossfitClass extends ApiEntity {

    dateTime: number|string;
    duration: number;
    athletes: Athlete[];

    constructor() {
        super();

        this.dateTime = new Date().getTime();
        this.duration = 0;
        this.athletes = [];
    }

}
