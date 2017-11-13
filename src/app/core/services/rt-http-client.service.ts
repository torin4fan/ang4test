import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/operator/finally';


interface ICustomOptions {
    showSpinner: boolean;
}

@Injectable()
export class RtHttpClient extends HttpClient {
    constructor(
        private httpHandler: HttpHandler
    ) {
        super(httpHandler);
    }

    get(url: string, options?, customOptions?: ICustomOptions): Observable<any> {
        return this.sendRequest(() => super.get(url, options), customOptions);
    }

    post(url: string, body?, options?, customOptions?: ICustomOptions): Observable<any> {
        return this.sendRequest(() => super.post(url, body, options), customOptions);
    }

    put(url: string, body?, options?, customOptions?: ICustomOptions): Observable<any> {
        return this.sendRequest(() => super.put(url, body, options), customOptions);
    }

    delete(url: string, options?, customOptions?: ICustomOptions): Observable<any> {
        return this.sendRequest(() => super.delete(url, options), customOptions);
    }

    private sendRequest(requestCb, options: ICustomOptions = { showSpinner: true }): Observable<any> {
        if (options.showSpinner) {
          console.log('spinner-show');
          return requestCb()
                .finally(() => {
                  console.log('spinner-hide');
                });
        }
        return requestCb();
    }
}
