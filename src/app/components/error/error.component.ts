import { Component } from '@angular/core';

@Component({
	selector: 'error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.css']
})

export class ErrorComponent {
	public title: string;

	constructor() {
		this.title = "error component";	
	}
	ngOnInit(){

	}
}