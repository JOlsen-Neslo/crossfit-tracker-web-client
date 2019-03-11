import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from '../../services/local-storage.service';
import { CoachService } from '../../services/coach.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    title = 'Crossfit Tracker';
    faPlus = faPlusSquare;

    constructor(private router: Router, private storageService: LocalStorageService, private coachService: CoachService) {
    }

    navigate(path: string): void {
        this.router.navigate([path.replace(':name', this.coachService.getName())]);
    }

    logout(): void {
        this.storageService.clear();
        this.coachService.clearAll();
        this.router.navigate(['']);
    }
}
