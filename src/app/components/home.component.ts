import {Component} from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: '../templates/home/home.component.html',
	styleUrls: ['../templates/home/home.component.css']
})

export class HomeComponent {
	public title: string;
	constructor(){
		this.title = "home component";
	}
	ngOnInit(){
		console.log(this.title);
	}
}