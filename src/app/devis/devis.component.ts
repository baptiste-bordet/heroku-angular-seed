import {Component} from '@angular/core';
import {Devis} from './devis';
import {DevisService} from './devis.service';

@Component({
	selector: 'devis',
	templateUrl: 'devis.component.html'
})

export class DevisComponent {

	constructor(private devisService: DevisService) {
	}

	model = new Devis();

	natures = [
		'Essais de réception - sorbonnes de laboratoire',
		'Essais de routine - sorbonnes de laboratoire',
		'Hottes - Armoires ventilées - Bras aspirants',
		'Audit aéraulique - réseau de ventilation',
		'Formation'
	];

	captchaResponse = null;
	formError = null;

	resolved(captchaResponse: string) {
		this.captchaResponse = captchaResponse;
	}

	onSubmit() {

		this.devisService.submitForm({
			form: this.model,
			captchaResponse: this.captchaResponse
		}).subscribe(
			formError => this.formError = formError.toString()
		);

		console.log('formError = ' + this.formError);
	}

	// TODO: Remove this when we're done
	get errors() {
		return JSON.stringify(this.model);
	}

}
