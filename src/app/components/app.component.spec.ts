import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule,
                FormsModule
            ]
        }).compileComponents();
    }));

    it('should create the <app-root>', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

});
