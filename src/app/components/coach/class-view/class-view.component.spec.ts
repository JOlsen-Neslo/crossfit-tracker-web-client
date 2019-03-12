import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewComponent } from './class-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoachService } from '../../../services/coach.service';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FetchClientService } from '../../../services/fetch-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ClassService } from '../../../services/class.service';
import { CrossfitClass } from '../../../models/crossfit-class.model';
import { Observable } from 'rxjs';

describe('ClassViewComponent', () => {
    let component: ClassViewComponent;
    let fixture: ComponentFixture<ClassViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClassViewComponent],
            imports: [RouterTestingModule, ToastrModule.forRoot(), FontAwesomeModule, HttpClientTestingModule, RouterTestingModule, ToastrModule],
            providers: [CoachService, FetchClientService, LocalStorageService, ClassService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClassViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create <app-class-view>', () => {
        expect(component).toBeTruthy();
    });

    it('should have icon properties', () => {
        expect(component.faCheck).toBeDefined();
        expect(component.faTimes).toBeDefined();
    });

    it('should have selectedClass property', () => {
        expect(component.selectedClass).toBeDefined();
        expect(component.selectedClass).not.toBeNull();
    });

    it('should have ngOnInit method', () => {
        expect(component.ngOnInit).toBeDefined();
    });

    it('should have getClass method', () => {
        expect(component.getClass).toBeDefined();
    });

    it('should have getAthletes method', () => {
        expect(component.getAthletes).toBeDefined();
    });

    it('should have called retrieveAthletes service when getAthletes method is called', () => {
        spyOn((component as any).classService, 'retrieveAthletes').and.returnValue(Observable.create());
        component.getAthletes('12');
        expect((component as any).classService.retrieveAthletes).toHaveBeenCalled();
    });

    it('should have called retrieveClass service when getClass method is called', () => {
        spyOn((component as any).coachService, 'retrieveClass').and.returnValue(Observable.create());
        component.getClass('12');
        expect((component as any).coachService.retrieveClass).toHaveBeenCalled();
    });

});
