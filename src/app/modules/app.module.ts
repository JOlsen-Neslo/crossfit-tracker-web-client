import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../components/app.component';
import { LoginComponent } from '../components/login/login.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CrossfitClassesComponent } from '../components/crossfit-classes/crossfit-classes.component';
import { RegisterClassComponent } from '../components/register-class/register-class.component';
import { ClassViewComponent } from '../components/class-view/class-view.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        CrossfitClassesComponent,
        RegisterClassComponent,
        ClassViewComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        FontAwesomeModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
