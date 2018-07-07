import { Component } from '@angular/core';

@Component({
	selector: 'error',
	templateUrl: '../templates/error/error.component.html',
	styleUrls: ['../templates/error/error.component.css']
})

export class ErrorComponent {
	public title: string;

	constructor() {
		this.title = "error component";	
	}
	ngOnInit(){

	}
}