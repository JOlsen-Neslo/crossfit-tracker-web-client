import { ApiEntity } from './api-entity.model';

export class Coach extends ApiEntity {

    name: string;
    password: string;

    constructor(name?: string, password?: string) {
        super();

        this.name = name;
        this.password = password;
    }

}
