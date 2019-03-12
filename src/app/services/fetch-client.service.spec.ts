import { TestBed } from '@angular/core/testing';

import { FetchClientService } from './fetch-client.service';
import { LocalStorageService } from './local-storage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FetchClientService', () => {

    let service: FetchClientService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocalStorageService, FetchClientService],
            imports: [
                HttpClientTestingModule
            ]
        });
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

    it('should call corresponding http methods when methods are called', () => {
        spyOn((service as any).http, 'get');
        spyOn((service as any).http, 'delete');
        spyOn((service as any).http, 'post');
        spyOn((service as any).http, 'put');

        service.get('');
        expect((service as any).http.get).toHaveBeenCalled();

        service.delete('');
        expect((service as any).http.delete).toHaveBeenCalled();

        service.post('', {});
        expect((service as any).http.post).toHaveBeenCalled();

        service.put('', {});
        expect((service as any).http.put).toHaveBeenCalled();
    });

});
