import { Injectable } from '@angular/core';
import { FetchClientService } from './fetch-client.service';
import { Observable } from 'rxjs';
import { Athlete } from '../models/athlete.model';

@Injectable()
export class ClassService {

    constructor(private fetchClient: FetchClientService) {
    }

    retrieveAthletes(id: string | number): Observable<Athlete[]> {
        return this.fetchClient.get<Athlete[]>(`/class/${id}/athletes`);
    }

}
