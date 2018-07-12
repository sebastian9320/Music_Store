//-----------------------------------------------------------------------//
import { Component } from '@angular/core';

// Importar componentes de rutas para navegacion
import { Router, ActivatedRoute, Params} from '@angular/router';

// Importar servicio del disco
import { DiscoService } from '../services/disco.service';

// Modelo o clase disco para instanciar objeto en determinado caso
import { Disco } from '../models/disco';
//-----------------------------------------------------------------------//


//-----------------------------------------------------------------------//
// Decorador Component y atributos del componente 
//-----------------------------------------------------------------------//

@Component({
	selector: 'detail-disco',
	templateUrl: '../templates/detail_disco/detail_disco.component.html',
	styleUrls: ['../templates/detail_disco/detail_disco.component.css'],
	providers: [DiscoService]
})

//-----------------------------------------------------------------------//

//---------------------- COMPONENTE DETALLE DISCO ---------------------------//

export class DetailDiscoComponent{
	// Declaracion de variables
	public id_disco: number;
	public disco : Disco;

	//-----------------------------------------------------------------------//
 	// Metodo Constructor
 	//-----------------------------------------------------------------------//
	constructor(
		// Inyectar objetos que se utilizaran mas adelante
		private _route: ActivatedRoute,
		private _router: Router,
		private _disco_service: DiscoService
	){
		
		
	}

	//-----------------------------------------------------------------------//
	// Metodo ngOnInit
	// Ejecucion posterior al metodo constructor 
	//-----------------------------------------------------------------------//
	ngOnInit(){
		// Llamado de metodos para cargar informacion del disco 
		this.getDiscoPorId();
	}
	//-----------------------------------------------------------------------//


	//-----------------------------------------------------------------------//
	// OBTERNER INFORMACION DISCO POR ID
	//-----------------------------------------------------------------------//
	getDiscoPorId(){
		// Obterner parametros por medio de la ruta o url
		this._route.params.forEach((params: Params) => {
			// Almacenar Id obtenido como parametro
			let id = params['id'];
			// Llamado al metodo del servicio y suscripcion al observable que retorna
			this._disco_service.getDiscoPorId(id).subscribe(
				// Funcion de Callback exitosa y retorno de datos
				res => {
					if(res){
						this.disco = res.data;	
						console.log(this.disco);	
					}else{
						this.disco = res.data;
					}
				},
				// Funcion de Calback erronea y registro de esta
				error => {
					console.log(<any>error);
				}
			);
		});
		
	}
	//-----------------------------------------------------------------------//



	//-----------------------------------------------------------------------//
	// VALIDAR DISCO
	// valida si el disco existe para poder mostrarlo por interpolacion en la 
	// plantilla
	//-----------------------------------------------------------------------//

	validarDisco(disco){
		if(disco){
			return Object.keys(disco).length > 0;			
		}
		return false;	
	}
	//-----------------------------------------------------------------------//
}

