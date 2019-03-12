import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ToastrConfig, ToastrModule } from 'ngx-toastr';
import { CoachService } from '../../services/coach.service';
import { FetchClientService } from '../../services/fetch-client.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Observable } from 'rxjs';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ToastrModule.forRoot()],
            providers: [CoachService, FetchClientService, LocalStorageService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have coach property', () => {
        expect(component.coach).toBeDefined();
    });

    it('should have register method', () => {
        expect(component.register).toBeDefined();
    });

    it('should call coach service when register is called', () => {
        spyOn((component as any).coachService, 'register').and.returnValue(Observable.create());
        component.register();
        expect((component as any).coachService.register).toHaveBeenCalled();
    });

});
