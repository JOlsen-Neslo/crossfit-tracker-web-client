import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfitClassesComponent } from './crossfit-classes.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CrossfitClassesComponent', () => {
    let component: CrossfitClassesComponent;
    let fixture: ComponentFixture<CrossfitClassesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrossfitClassesComponent],
            imports: [RouterTestingModule]
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

    it('should have name property', () => {
        expect(component.name).toBeDefined();
        expect(component.name).toEqual('Jordan');
    });

    it('should have classes property', () => {
        expect(component.classes).toBeDefined();
        expect(component.classes).not.toEqual([]);
    });

    it('should have ngOnInit method', () => {
        expect(component.ngOnInit).toBeDefined();
    });

});
