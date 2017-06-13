import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ValeursService {

  // Resolve HTTP using the constructor
  constructor (private http: Http) {}

  getData(): Observable<string> {
    return this.http.get(this.getServerUrl() + '/test')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getServerUrl(): string {
    return 'https://' + window.location.hostname + ':3003';
  }

  private extractData(res: Response) {
    return res.text();
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}