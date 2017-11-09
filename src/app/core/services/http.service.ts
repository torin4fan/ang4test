import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {

  public static onResponseSuccess(data: any): any {
    return data.json();
  }

  public static onResponseFail(data: any): any { // TODO VN tbt
    return Observable.throw({
      data: data.json(),
      status: data.status
    });
  }

  constructor(
    private http: HttpClient,
    private defaultOptions: RequestOptions,
  ) {
  }

  get(url: string): Observable<any> {
    return this.http
      .get(url).pipe(
        tap(_ => console.log(`get some info`)),
        catchError(this.handleError<any>('deleteHero'))
      );
  }

  /*get(url: string, search?: URLSearchParams): Observable<any> {
    return this.http
      .get(url, this.defaultOptions.merge({ url, search }))
      .catch(HttpService.onResponseFail)
      .map(HttpService.onResponseSuccess)
      .share();
  }*/

  /*post(url: string, body: object, search?: HttpParams): Observable<any> {
    return this.http
      .post(url, body, this.defaultOptions.merge({ url, search }))
      .catch(HttpService.onResponseFail)
      .map(HttpService.onResponseSuccess)
      .share();
  }

  put(url: string, body: object, search?: URLSearchParams): Observable<any> {
    return this.http
      .put(url, body, this.defaultOptions.merge({ url, search }))
      .catch(HttpService.onResponseFail)
      .map(HttpService.onResponseSuccess)
      .share();
  }

  delete(url: string, search?: URLSearchParams): Observable<any> {
    return this.http
      .delete(url, this.defaultOptions.merge({ url, search }))
      .catch(HttpService.onResponseFail)
      .map(HttpService.onResponseSuccess)
      .share();
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(error.message);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
