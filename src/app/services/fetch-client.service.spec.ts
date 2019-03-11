import { TestBed } from '@angular/core/testing';

import { FetchClientService } from './fetch-client.service';

describe('FetchClientService', () => {

    let service: FetchClientService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(FetchClientService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have methods', () => {
        expect(service.get).toBeDefined();
        expect(service.post).toBeDefined();
        expect(service.put).toBeDefined();
        expect(service.delete).toBeDefined();
        expect((service as any).createHeaders).toBeDefined();
    });

});
