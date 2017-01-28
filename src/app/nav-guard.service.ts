import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable()
export class NavGuardService implements CanActivateChild {

    constructor() {}

    canActivateChild() {
        console.log('AuthGuard#canActivate called');
        return true;
    }
}
