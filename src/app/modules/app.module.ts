import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../components/app.component';
import { LoginComponent } from '../components/login/login.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
