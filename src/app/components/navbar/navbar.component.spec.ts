import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the <app-navbar>', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'Crossfit Tracker'`, () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Crossfit Tracker');
    });

});
