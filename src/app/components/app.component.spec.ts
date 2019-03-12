import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalStorageService } from '../services/local-storage.service';
import { CoachService } from '../services/coach.service';
import { FetchClientService } from '../services/fetch-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                FontAwesomeModule,
                HttpClientTestingModule
            ],
            providers: [
                LocalStorageService,
                CoachService,
                FetchClientService
            ]
        }).compileComponents();
    }));

    it('should create the <app-root>', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

});
