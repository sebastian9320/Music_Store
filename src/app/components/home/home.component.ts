import {Component} from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
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