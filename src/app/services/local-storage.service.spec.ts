import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuard } from '../guards/auth.guard';
import { FetchClientService } from './fetch-client.service';

describe('LocalStorageService', () => {

    let service: LocalStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthGuard, FetchClientService, LocalStorageService]
        });
        service = TestBed.get(LocalStorageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have add method', () => {
        expect(service.add).toBeDefined();
    });

    it('should have clear method', () => {
        expect(service.clear).toBeDefined();
    });

    it('should have remove method', () => {
        expect(service.remove).toBeDefined();
    });

    it('should have get method', () => {
        expect(service.get).toBeDefined();
    });

});
