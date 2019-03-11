import { Injectable } from '@angular/core';
import { FetchClientService } from './fetch-client.service';
import { Observable } from 'rxjs';

import { Coach } from '../models/coach.model';
import { Credentials } from '../models/credentials.model';
import { CrossfitClass } from '../models/crossfit-class.model';

@Injectable()
export class CoachService {

    private name = '';

    constructor(private fetchClient: FetchClientService) {
    }

    authenticate(coach: Coach): Observable<Credentials> {
        return this.fetchClient.post<Credentials>('/coach/auth', coach);
    }

    retrieveCoachClasses(name: string): Observable<CrossfitClass[]> {
        this.name = name;
        return this.fetchClient.get<CrossfitClass[]>(`/coach/${name}/class`);
    }

    getName(): string {
        return this.name;
    }

    clearAll() {
        delete this.name;
    }

}
