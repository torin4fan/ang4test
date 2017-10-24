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

  clearData(key: string): void {
    if (window.localStorage) {
      localStorage.removeItem(key);
    }
  }

  checkLocalStorage(): boolean {
    return (localStorage.getItem('user') === 'q');
  }

}
