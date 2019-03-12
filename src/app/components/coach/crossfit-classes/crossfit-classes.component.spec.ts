import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfitClassesComponent } from './crossfit-classes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoachService } from '../../../services/coach.service';
import { FetchClientService } from '../../../services/fetch-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ToastrModule } from 'ngx-toastr';
import { ClassService } from '../../../services/class.service';
import { Observable } from 'rxjs';

describe('CrossfitClassesComponent', () => {
    let component: CrossfitClassesComponent;
    let fixture: ComponentFixture<CrossfitClassesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrossfitClassesComponent],
            imports: [RouterTestingModule, FontAwesomeModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
            providers: [CoachService, FetchClientService, LocalStorageService, ClassService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrossfitClassesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create <app-crossfit-classes>', () => {
        expect(component).toBeTruthy();
    });

    it('should have icon property', () => {
        expect(component.faPlus).toBeDefined();
    });

    it('should have name property', () => {
        expect(component.name).toBeDefined();
        expect(component.name).toEqual('');
    });

    it('should have classes property', () => {
        expect(component.classes).toBeDefined();
        expect(component.classes).toEqual([]);
    });

    it('should have newClass method', () => {
        expect(component.newClass).toBeDefined();
    });

    it('should have getCoach method', () => {
        expect(component.getCoach).toBeDefined();
    });

    it('should have called retrieveCoachClasses service when getCoach method is called', () => {
        spyOn((component as any).coachService, 'retrieveCoachClasses').and.returnValue(Observable.create());
        component.getCoach('12');
        expect((component as any).coachService.retrieveCoachClasses).toHaveBeenCalled();
    });

});
