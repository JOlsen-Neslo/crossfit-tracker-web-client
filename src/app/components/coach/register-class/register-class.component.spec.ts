import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RegisterClassComponent } from './register-class.component';

describe('RegisterClassComponent', () => {
    let component: RegisterClassComponent;
    let fixture: ComponentFixture<RegisterClassComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterClassComponent],
            imports: [FormsModule]
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

    it('should have method addAthlete', () => {
        expect(component.addAthlete).toBeDefined();
    });

    it('should add new athlete to class when addAthlete is called', () => {
        expect(component.addAthlete).toBeDefined();
        expect(component.class.athletes).toEqual([]);
        component.addAthlete();
        expect(component.class.athletes).not.toEqual([]);
    });

});
