import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoachService } from '../../services/coach.service';
import { FetchClientService } from '../../services/fetch-client.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                FormsModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
            providers: [CoachService, FetchClientService, LocalStorageService]
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

    it('should have login method', () => {
        expect(component.login).toBeDefined();
    });

    it('should have called coachService when login is called', () => {
        spyOn((component as any).coachService, 'authenticate').and.returnValue(Observable.create());
        component.login();
        expect((component as any).coachService.authenticate).toHaveBeenCalled();
    });

});
