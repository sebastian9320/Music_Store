import { Component } from '@angular/core';

// Decorador Component 
@Component({
	// Atributos asignados al componente 
	selector: 'error',
	templateUrl: '../templates/error/error.component.html',
	styleUrls: ['../templates/error/error.component.css']
})

//-----------------------------------------------------------------------//

//---------------------- COMPONENTE ERROR ---------------------------//
export class ErrorComponent {
	// Declaracion de variables
	public title: string;

	//-----------------------------------------------------------------------//
 	// Metodo Constructor
 	//-----------------------------------------------------------------------//
	constructor() {
		// Inicializacion de variables	
		this.title = "error component";	
	}
 	//-----------------------------------------------------------------------//
	

	//-----------------------------------------------------------------------//
	// Metodo ngOnInit
	// Ejecucion posterior al metodo constructor 
	//-----------------------------------------------------------------------//
	ngOnInit(){

	}
	//-----------------------------------------------------------------------//
}