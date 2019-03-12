import { TestBed } from '@angular/core/testing';

import { ClassService } from './class.service';
import { AuthGuard } from '../guards/auth.guard';
import { FetchClientService } from './fetch-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService } from './local-storage.service';

describe('ClassService', () => {

    let service: ClassService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthGuard, FetchClientService, LocalStorageService, ClassService]
        });
        service = TestBed.get(ClassService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have retrieveAthletes method', () => {
        expect(service.retrieveAthletes).toBeDefined();
    });

    it('should call the fetch client get method when retrieveAthletes is called', () => {
        spyOn((service as any).fetchClient, 'get');
        service.retrieveAthletes('test');
        expect((service as any).fetchClient.get).toHaveBeenCalled();
    });

});
