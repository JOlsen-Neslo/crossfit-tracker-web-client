import { Athlete } from './athlete.model';
import { ApiEntity } from './api-entity.model';

export class CrossfitClass extends ApiEntity {

    date: Date;
    duration: number;
    athletes: Athlete[];

}
