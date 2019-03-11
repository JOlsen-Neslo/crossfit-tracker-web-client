import { Component } from '@angular/core';

@Component({
    selector: 'app-register-class',
    templateUrl: './register-class.component.html',
    styleUrls: ['./register-class.component.css']
})
export class RegisterClassComponent {

    athlete = {
        name: '',
        member: false
    };
    class = {
        dateTime: new Date(),
        duration: 0,
        athletes: []
    };

    addAthlete() {
        this.class.athletes.push(this.athlete);
        this.athlete = {
            name: '',
            member: false
        };
    }

}
