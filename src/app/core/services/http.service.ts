import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.http
      .get(url).pipe(
        catchError(this.handleError<any>())
      );
  }

  post(url: string, body: object, search?: HttpParams): Observable<any> {
    return this.http
      .post(url, body)
      .pipe(
        catchError(this.handleError<any>())
      );
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
