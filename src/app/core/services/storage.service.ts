import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
  }

  setData(key: string, value: any): void {
    if (window.localStorage) {
      localStorage.setItem(key, value);
    }
  }

  checkLocalStorage(): boolean {
    return (localStorage.getItem('user') === 'q');
  }

}
