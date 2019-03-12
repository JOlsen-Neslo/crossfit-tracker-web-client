import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RegisterClassComponent } from './register-class.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoachService } from '../../../services/coach.service';
import { FetchClientService } from '../../../services/fetch-client.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ClassService } from '../../../services/class.service';

describe('RegisterClassComponent', () => {
    let component: RegisterClassComponent;
    let fixture: ComponentFixture<RegisterClassComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterClassComponent],
            imports: [FormsModule, FontAwesomeModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
            providers: [CoachService, FetchClientService, LocalStorageService, ClassService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterClassComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create <app-register-class>', () => {
        expect(component).toBeTruthy();
    });

    it('should have property class', () => {
        expect(component.class).toBeDefined();
        expect(component.class.dateTime).toBeDefined();
        expect(component.class.athletes).toBeDefined();
        expect(component.class.duration).toBeDefined();
    });

    it('should have property athlete', () => {
        expect(component.athlete).toBeDefined();
        expect(component.athlete.name).toBeDefined();
        expect(component.athlete.member).toBeDefined();
    });

    it('should have property adding', () => {
        expect(component.adding).toBeDefined();
        expect(component.adding).toBeFalsy();
    });

    it('should have method addAthlete', () => {
        expect(component.addAthlete).toBeDefined();
    });

    it('should have method ngOnInit', () => {
        expect(component.ngOnInit).toBeDefined();
    });

    it('should have method cancel', () => {
        expect(component.cancel).toBeDefined();
    });

    it('should have cancel changeContext', () => {
        expect(component.changeContext).toBeDefined();
    });

    it('should have cancel fixDate', () => {
        expect(component.fixDate).toBeDefined();
    });

    it('should have cancel next', () => {
        expect(component.next).toBeDefined();
    });

    it('should have cancel removeAthlete', () => {
        expect(component.removeAthlete).toBeDefined();
    });

    it('should add new athlete to class when addAthlete is called', () => {
        expect(component.addAthlete).toBeDefined();
        expect(component.class.athletes).toEqual([]);
        component.addAthlete();
        expect(component.class.athletes).not.toEqual([]);
    });

});
