import { async, TestBed } from '@angular/core/testing';

import { ClassSummaryComponent } from './class-summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoachService } from '../../../services/coach.service';
import { FetchClientService } from '../../../services/fetch-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService } from '../../../services/local-storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ClassService } from '../../../services/class.service';
import { CrossfitClass } from '../../../models/crossfit-class.model';
import { Observable } from 'rxjs';

describe('ClassSummaryComponent', () => {
    let component: ClassSummaryComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FontAwesomeModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
            declarations: [ClassSummaryComponent],
            providers: [CoachService, FetchClientService, LocalStorageService, ClassService]
        }).compileComponents();
    }));

    beforeEach(() => {
        const service = TestBed.get(CoachService);
        spyOn(service, 'getClass').and.returnValue(new CrossfitClass());

        const fixture = TestBed.createComponent(ClassSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have icon properties', () => {
        expect(component.faCheck).toBeDefined();
        expect(component.faTimes).toBeDefined();
    });

    it('should have completedClass property', () => {
        expect(component.completedClass).toBeDefined();
    });

    it('should have register method', () => {
        expect(component.register).toBeDefined();
    });

    it('should have ngOnInit method', () => {
        expect(component.ngOnInit).toBeDefined();
    });

    it('should call coach service when register is called', () => {
        spyOn((component as any).coachService, 'registerClass').and.returnValue(Observable.create());
        component.register();
        expect((component as any).coachService.registerClass).toHaveBeenCalled();
    });

});
