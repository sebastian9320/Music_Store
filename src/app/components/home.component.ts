import {Component} from '@angular/core';

//-----------------------------------------------------------------------//
// Decorador Component y atributos del componente 
//-----------------------------------------------------------------------//
@Component({
	selector: 'home',
	templateUrl: '../templates/home/home.component.html',
	styleUrls: ['../templates/home/home.component.css']
})
//-----------------------------------------------------------------------//

//------------------------ COMPONENTE HOME ------------------------------//
export class HomeComponent {
	// Declaracion de variables
	public title: string;

	//-----------------------------------------------------------------------//
 	// Metodo Constructor
 	//-----------------------------------------------------------------------//
	constructor(){
		// Inicializacion de variables
		this.title = "home component";
	}
	//-----------------------------------------------------------------------//

	//-----------------------------------------------------------------------//
	// Metodo ngOnInit
	// Ejecucion posterior al metodo constructor 
	//-----------------------------------------------------------------------//
	ngOnInit(){
		console.log(this.title);
	}
	//-----------------------------------------------------------------------//

}