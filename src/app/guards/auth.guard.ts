import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private storageService: LocalStorageService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token: string = this.storageService.get('token');

        if (token) {
            return true;
        }

        this.router.navigate(['']);
        return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(childRoute, state);
    }

}
