import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_ENDPOINT } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class FetchClientService {

    constructor(private http: HttpClient, private storageService: LocalStorageService) {
    }

    get<T>(path: string, headers?: HttpHeaders): Observable<T> {
        return this.http.get<T>(API_ENDPOINT + path, {headers: this.createHeaders(headers)});
    }

    post<T>(path: string, payload: any, headers?: HttpHeaders): Observable<T> {
        return this.http.post<T>(API_ENDPOINT + path, payload, {headers: this.createHeaders(headers)});
    }

    put<T>(path: string, payload: any, headers?: HttpHeaders): Observable<T> {
        return this.http.put<T>(API_ENDPOINT + path, payload, {headers: this.createHeaders(headers)});
    }

    delete<T>(path: string, headers?: HttpHeaders): Observable<T> {
        return this.http.delete<T>(API_ENDPOINT + path, {headers: this.createHeaders(headers)});
    }

    private createHeaders(headers?: HttpHeaders) {
        if (!headers) {
            headers = new HttpHeaders();
        }

        headers = headers.set('Authorization', `Bearer ${this.storageService.get('token')}`);
        return headers;
    }

}
