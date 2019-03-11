import { Injectable } from '@angular/core';
import { FetchClientService } from './fetch-client.service';
import { Observable } from 'rxjs';

import { Coach } from '../models/coach.model';
import { Credentials } from '../models/credentials.model';
import { CrossfitClass } from '../models/crossfit-class.model';

@Injectable()
export class CoachService {

    private name = '';
    private class: CrossfitClass;

    constructor(private fetchClient: FetchClientService) {
    }

    authenticate(coach: Coach): Observable<Credentials> {
        return this.fetchClient.post<Credentials>('/coach/auth', coach);
    }

    register(coach: Coach): Observable<Coach> {
        return this.fetchClient.post<Coach>('/coach', coach);
    }

    retrieveCoachClasses(name: string): Observable<CrossfitClass[]> {
        this.name = name;
        return this.fetchClient.get<CrossfitClass[]>(`/coach/${name}/class`);
    }

    retrieveClass(id: string | number): Observable<CrossfitClass> {
        return this.fetchClient.get<CrossfitClass>(`/coach/${this.name}/class/${id}`);
    }

    registerClass(aClass: CrossfitClass): Observable<CrossfitClass> {
        return this.fetchClient.post<CrossfitClass>(`/coach/${this.name}/class`, aClass);
    }

    setClass(aClass: CrossfitClass): void {
        this.class = aClass;
    }

    getName(): string {
        return this.name;
    }

    getClass(): CrossfitClass {
        return this.class;
    }

    clearAll() {
        delete this.name;
        delete this.class;
    }

}
