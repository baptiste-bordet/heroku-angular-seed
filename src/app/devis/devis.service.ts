import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DevisService {

	submitResponse;

	// Resolve HTTP using the constructor
	constructor(private http: Http) {
		this.submitResponse = {};
	}

	submitForm(data: Object): Observable<string> {
		return this.http.post(this.getServerUrl() + '/submitDevis', {data})
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error || 'Server error'));
	}

	getServerUrl(): string {
		return 'http://' + window.location.hostname + ':3003';
	}

}