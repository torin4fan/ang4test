import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

import { StorageService } from './storage.service';

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  canActivateChild() {

    if (this.storageService.checkLocalStorage()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
