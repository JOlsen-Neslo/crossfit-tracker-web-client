import { inject, TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from '../services/local-storage.service';

describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [AuthGuard, LocalStorageService]
        });
    });

    it('should call canActivate if called on a child', inject([AuthGuard], (guard: AuthGuard) => {
        spyOn(guard, 'canActivate');
        guard.canActivateChild(new ActivatedRouteSnapshot(), null);
        expect(guard.canActivate).toHaveBeenCalled();
    }));

    it('should return false if a token is NOT found', inject([AuthGuard], (guard: AuthGuard) => {
        spyOn(guard, 'canActivate');
        spyOn((guard as any).storageService, 'get').and.returnValue(undefined);
        expect(guard.canActivate(new ActivatedRouteSnapshot(), null)).toBeFalsy();
    }));

    it('should return true if a token is found', inject([AuthGuard], (guard: AuthGuard) => {
        spyOn(guard, 'canActivate');
        spyOn((guard as any).storageService, 'get').and.returnValue('token');
        expect(guard.canActivate(new ActivatedRouteSnapshot(), null)).toBeFalsy();
    }));

});
