import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewComponent } from './class-view.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClassViewComponent', () => {
    let component: ClassViewComponent;
    let fixture: ComponentFixture<ClassViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClassViewComponent],
            imports: [RouterTestingModule]
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

    it('should have classes property', () => {
        expect(component.classes).toBeDefined();
        expect(component.classes).not.toEqual([]);
    });

    it('should have selectedClass property', () => {
        expect(component.selectedClass).toBeDefined();
        expect(component.selectedClass).not.toBeNull();
    });

    it('should have ngOnInit method', () => {
        expect(component.ngOnInit).toBeDefined();
    });

});
