import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivateChild {


  canActivateChild() {
    console.log('AuthGuard#canActivateChild called');
    return true;
  }
}
