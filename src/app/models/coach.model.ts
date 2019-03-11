import { ApiEntity } from './api-entity.model';

export class Coach extends ApiEntity {

    name: string;
    password: string;

    constructor(name, password) {
        super();

        this.name = name;
        this.password = password;
    }

}
