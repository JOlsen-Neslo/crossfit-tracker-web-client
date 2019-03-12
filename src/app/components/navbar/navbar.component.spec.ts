import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar.component';
import { CoachService } from '../../services/coach.service';
import { FetchClientService } from '../../services/fetch-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService } from '../../services/local-storage.service';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            imports: [RouterTestingModule, FontAwesomeModule, HttpClientTestingModule],
            providers: [CoachService, FetchClientService, LocalStorageService]
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

    it(`should have a title as 'Crossfit Tracker'`, () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Crossfit Tracker');
    });

    it('should have icon property', () => {
        expect(component.faPlus).toBeDefined();
    });

    it('should have navigate method', () => {
        expect(component.navigate).toBeDefined();
    });

    it('should have logout method', () => {
        expect(component.logout).toBeDefined();
    });

});
