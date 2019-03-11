import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { CoachService } from '../services/coach.service';
import { FetchClientService } from '../services/fetch-client.service';

import { AppComponent } from '../components/app.component';
import { LoginComponent } from '../components/login/login.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CrossfitClassesComponent } from '../components/coach/crossfit-classes/crossfit-classes.component';
import { RegisterClassComponent } from '../components/coach/register-class/register-class.component';
import { ClassViewComponent } from '../components/coach/class-view/class-view.component';
import { LocalStorageService } from '../services/local-storage.service';
import { CoachComponent } from '../components/coach/coach.component';
import { AuthGuard } from '../guards/auth.guard';
import { ClassSummaryComponent } from '../components/coach/class-summary/class-summary.component';
import { ClassService } from '../services/class.service';
import { RegisterComponent } from '../components/register/register.component';
import { TimerComponent } from '../components/coach/timer/timer.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        CrossfitClassesComponent,
        RegisterClassComponent,
        ClassViewComponent,
        CoachComponent,
        ClassSummaryComponent,
        RegisterComponent,
        TimerComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        FontAwesomeModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        FetchClientService,
        CoachService,
        LocalStorageService,
        ClassService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
