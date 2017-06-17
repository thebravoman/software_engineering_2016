import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service'

@Injectable()
export class NotLoggedInGuard {

    constructor(private authService: AuthenticationService) {
    }

    canActivate(): Boolean {
        return this.authService.isLoggedIn();
    }   

}