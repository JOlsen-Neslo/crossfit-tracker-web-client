import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                FormsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create <app-login>', () => {
        expect(component).toBeTruthy();
    });

    it('should have name property', () => {
        expect(component.name).toBeDefined();
        expect(component.name).toEqual('');
    });

    it('should have password property', () => {
        expect(component.password).toBeDefined();
        expect(component.password).toEqual('');
    });

});
