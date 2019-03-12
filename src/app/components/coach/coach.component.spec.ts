import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachComponent } from './coach.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoachService } from '../../services/coach.service';
import { FetchClientService } from '../../services/fetch-client.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ClassService } from '../../services/class.service';

describe('CoachComponent', () => {
    let component: CoachComponent;
    let fixture: ComponentFixture<CoachComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoachComponent],
            imports: [FormsModule, FontAwesomeModule, HttpClientTestingModule, RouterTestingModule],
            providers: [CoachService, FetchClientService, LocalStorageService, ClassService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoachComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
