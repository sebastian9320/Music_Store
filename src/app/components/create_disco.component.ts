//-----------------------------------------------------------------------//
import{ Component } from '@angular/core';

// Importar componentes de rutas para navegacion
import { Router, ActivatedRoute, Params } from '@angular/router';

// Importar componentes de formularios para creacion interaccion y valiadacion
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
 // Importar variable global del servicio
import { GLOBAL } from '../services/global';

// Importar servicio del disco
import { DiscoService } from '../services/disco.service';

// Modelo o clase disco para instanciar objeto en determinado caso
import { Disco } from '../models/disco';

// Modelo o clase Genero para instanciar objeto en determinado caso
import { Genero } from '../models/genero';

// Componente Snackbar de angular material para notificacion
import { MatSnackBar } from '@angular/material';
//-----------------------------------------------------------------------//


//-----------------------------------------------------------------------//
// Decorador Component y atributos del componente 
//-----------------------------------------------------------------------//

@Component({
	selector: 'create-disco',
	templateUrl: '../templates/create_disco/create_disco.component.html',
	styleUrls: ['../templates/create_disco/create_disco.component.css'],
	providers: [DiscoService]
})
//-----------------------------------------------------------------------//

//---------------------- COMPONENTE CREAR DISCO ---------------------------//

export class CreateDiscoComponent{
	// Declaracion de variables
	public titulo: string;
 	public disco: Disco;
 	public id_usuario: number;
 	public form_disco: FormGroup;
 	public generos: Genero;
 	public message_error: Array<any>;


 	//-----------------------------------------------------------------------//
 	// Metodo Constructor
 	//-----------------------------------------------------------------------//
	constructor(
		// Inyectar objetos que se utilizaran mas adelante
		private _disco_service: DiscoService,
		private _router: Router,
		private form_builder: FormBuilder,
		private notification: MatSnackBar
		
	){
		// Inicializacion de variables
		this.titulo = "crear disco";
		// Obtencion del id del usuario previamente almacenado en localStorage
		this.id_usuario = JSON.parse(localStorage.getItem("currentUser")).id_usuario;
		this.disco = new Disco(0,'','',0,'',new Date(),this.id_usuario);
		
		this.message_error = 
		[{
			'nombre' : 'Nombre no valido',
		  	'autor' : 'Autor no valido',
		  	'genero' : 'Genero no valido',
		  	'album' : 'Album no valido'							   	
		}];
		

	}
	//-----------------------------------------------------------------------//




	//-----------------------------------------------------------------------//
	// Metodo ngOnInit
	// Ejecucion posterior al metodo constructor 
	//-----------------------------------------------------------------------//
	ngOnInit(){
		// Llamado de metodos para cargar informacion y crear formulario 
		this.cargarGeneros();
		this.createFormDisco();
 	}
 	//-----------------------------------------------------------------------//



 	//-----------------------------------------------------------------------//
 	// METODO onSubmit
 	// Encargado de ejercutar funciones en el evento submit del formulario
 	//-----------------------------------------------------------------------//
 	onSubmit(){
		this.createDisco();
	}
	//-----------------------------------------------------------------------//




	//-----------------------------------------------------------------------//
	// CARGAR GENEROS MUSICALES
	// obtiene generos musicales de la base de datos
	//-----------------------------------------------------------------------//

	cargarGeneros(){
		// Llamado al metodo del servicio y suscripcion al observable que retorna
		this._disco_service.getGeneros().subscribe(
			// Funcion de Callback exitosa y retorno de datos
			result => {

				if(result){
					this.generos = result.data;			
					
				}else{
					this.generos = result.data;
				}
			},
			// Funcion de Calback erronea y registro de esta
			error => {
				console.log(<any>error);
			}
		);
	}
	//-----------------------------------------------------------------------//




	//-----------------------------------------------------------------------//
	// CREAR FORMULARIO DE DISCO
	// crear el formulario y adicionar los controles que este manejara con sus
	// validaciones
	//-----------------------------------------------------------------------//
	createFormDisco(){

		// Asinar grupo de controles con sus grupo de validaciones
 		this.form_disco = this.form_builder.group({

			'nombre': [ null, Validators.compose(
				[
					Validators.required, 
					Validators.maxLength(25),
					Validators.minLength(5)
				])
			],	
			'autor' : [ null,Validators.compose(
				[
					Validators.required, 
					Validators.maxLength(20),
					Validators.minLength(5)	
				])
			],
			
			'genero': [ null,Validators.compose(
				[
					Validators.required 
		     	])
			],

			'album': [ null,Validators.compose(
				[ 
					Validators.required,
					Validators.minLength(3)
			    ])
			],
			'fecha_lanzamiento' : [ null ]		
		});
 	}
 	//-----------------------------------------------------------------------//




 	//-----------------------------------------------------------------------//
 	// CREAR DISCO 
 	// Creacion del disco en la base de datos
 	//-----------------------------------------------------------------------//
	createDisco(){
		
		// Lamado al metodo del servicio y suscripcion al observable que retorna
		this._disco_service.createDisco(this.disco).subscribe(
			// Funcion Callback exitosa y almacenamiento de datos
			response => {
				
				if(response.code == 200){
					// Redireccion al inicio y notificacion
					this._router.navigate(['/home']);
					this.notification.open('Disco registrado con exito!','close',{
						panelClass: 'success-snackbar'
					});
				}else{
					console.log(response);
				}
			},
			// Funcion Calback erronea y registro de esta
			error => {
				console.log(<any>error);
			}
		);
	}
	//-----------------------------------------------------------------------//


} 
//----------------------------- END COMPONENT -------------------------------//
 	

