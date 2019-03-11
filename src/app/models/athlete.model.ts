import { ApiEntity } from './api-entity.model';
import { CrossfitClass } from './crossfit-class.model';

export class Athlete extends ApiEntity {

    name: string;
    member: boolean;
    classes: CrossfitClass[];

    constructor() {
        super();

        this.name = '';
        this.member = false;
    }

}
