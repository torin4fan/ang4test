import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

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
    private http: Http,
    private defaultOptions: RequestOptions,
  ) {
  }

  get(url: string, search?: URLSearchParams): Observable<any> {
    return this.http
      .get(url, this.defaultOptions.merge({ url, search }))
      .catch(HttpService.onResponseFail)
      .map(HttpService.onResponseSuccess)
      .share();
  }

  post(url: string, body: object, search?: URLSearchParams): Observable<any> {
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
  }
}
