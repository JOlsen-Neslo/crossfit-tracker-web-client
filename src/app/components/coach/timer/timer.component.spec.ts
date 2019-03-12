import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoachService } from '../../../services/coach.service';
import { FetchClientService } from '../../../services/fetch-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalStorageService } from '../../../services/local-storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ClassService } from '../../../services/class.service';

describe('TimerComponent', () => {
    let component: TimerComponent;
    let fixture: ComponentFixture<TimerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimerComponent],
            imports: [FontAwesomeModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
            providers: [CoachService, FetchClientService, LocalStorageService, ClassService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have properties', () => {
        expect(component.time).toBeDefined();
        expect(component.running).toBeDefined();
        expect(component.timerRef).toBeUndefined();
    });

    it('should have methods', () => {
        expect(component.complete).toBeDefined();
        expect(component.pauseTimer).toBeDefined();
        expect(component.startTimer).toBeDefined();
    });

});
