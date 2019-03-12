import { TestBed } from '@angular/core/testing';

import { CoachService } from './coach.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuard } from '../guards/auth.guard';
import { FetchClientService } from './fetch-client.service';
import { CrossfitClass } from '../models/crossfit-class.model';
import { Coach } from '../models/coach.model';
import { LocalStorageService } from './local-storage.service';

describe('CoachService', () => {

    let service: CoachService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthGuard, FetchClientService, LocalStorageService, CoachService]
        });
        service = TestBed.get(CoachService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have retrieveClass method', () => {
        expect(service.retrieveClass).toBeDefined();
    });

    it('should have clearAll method', () => {
        expect(service.clearAll).toBeDefined();
    });

    it('should have setClass method', () => {
        expect(service.setClass).toBeDefined();
    });

    it('should have getClass method', () => {
        expect(service.getClass).toBeDefined();
    });

    it('should have retrieveCoachClasses method', () => {
        expect(service.retrieveCoachClasses).toBeDefined();
    });

    it('should have getName method', () => {
        expect(service.getName).toBeDefined();
    });

    it('should have authenticate method', () => {
        expect(service.authenticate).toBeDefined();
    });

    it('should have register method', () => {
        expect(service.register).toBeDefined();
    });

    it('should have registerClass method', () => {
        expect(service.registerClass).toBeDefined();
    });

    it('should call the fetch client get method when registerClass is called', () => {
        spyOn((service as any).fetchClient, 'post');
        service.registerClass(new CrossfitClass());
        expect((service as any).fetchClient.post).toHaveBeenCalled();
    });

    it('should call the fetch client get method when authenticate is called', () => {
        spyOn((service as any).fetchClient, 'post');
        service.authenticate(new Coach('12', '12'));
        expect((service as any).fetchClient.post).toHaveBeenCalled();
    });

    it('should call the fetch client get method when retrieveCoachClasses is called', () => {
        spyOn((service as any).fetchClient, 'get');
        service.retrieveCoachClasses('name');
        expect((service as any).fetchClient.get).toHaveBeenCalled();
    });

    it('should call the fetch client get method when register is called', () => {
        spyOn((service as any).fetchClient, 'post');
        service.register(new Coach());
        expect((service as any).fetchClient.post).toHaveBeenCalled();
    });

    it('should remove all properties from the service when clearAll is called', () => {
        service.setClass(new CrossfitClass());
        expect(service.getClass()).toBeDefined();
        expect(service.getClass()).not.toBeNull();
        service.clearAll();
        expect(service.getClass()).toBeUndefined();
    });

});
