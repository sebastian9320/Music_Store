//-----------------------------------------------------------------------//
import { Component } from '@angular/core';

// Importar componentes de rutas para navegacion
import { Router, ActivatedRoute, Params } from '@angular/router';

// Importar componentes de formularios para creacion interaccion y valiadacion
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importar variable global del servicio
import { GLOBAL } from '../services/global';

// Importar servicio del usuario
import { UsuarioService } from '../services/usuario.service';

// Modelo o clase Usuario para instanciar objeto en determinado caso
import { Usuario } from '../models/usuario';

// Componente Snackbar de angular material para notificacion
import { MatSnackBar } from '@angular/material';

//--------------------------------------------------------------------------//
 @Component({
 	selector: 'registro',
 	templateUrl: '../templates/registro/registro.component.html',
 	styleUrls: ['../templates/registro/registro.component.css'],
 	providers: [UsuarioService]
 })
//--------------------------------------------------------------------------//

//---------------------- COMPONENTE DE REGISTRO ----------------------------//

export class RegistroComponent{

 	public usuario: Usuario;
 	public form_registro: FormGroup;
 	public message_error: Array<any>;
 	public usuario_data: any;

 	//-----------------------------------------------------------------------//
 	// Metodo Constructor
 	//-----------------------------------------------------------------------//
 	constructor(
 		// Inyectar objetos que se utilizaran mas adelante
 		private _usuario_service: UsuarioService,
		private _router: Router,
		private form_builder: FormBuilder,
		private notification: MatSnackBar
	){
 		// Inicializacion de variables
		this.usuario = new Usuario(0,'','','','',0,'',0,'');
		this.message_error = [{

			'email' : 'Email no valido',
		  	'contrasena' : 'Contraseña no valida',
		  	'nombre' : 'Nombre no valido',
		  	'apellido' : 'Apellido no valido'

		}];
		

 	}
 	//-----------------------------------------------------------------------//





 	//-----------------------------------------------------------------------//
	// CREAR FORMULARIO DE REGISTRO
	// crear el formulario y adicionar los controles que este manejara con sus
	// validaciones
	//-----------------------------------------------------------------------//
 	createFormRegistro(){

 		this.form_registro = this.form_builder.group({

			'nombre': [ null, Validators.compose([
												Validators.required, 
												Validators.maxLength(25),
												Validators.minLength(5)
												//Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
												])
			],	
			'apellido' : [ null,Validators.compose([
												Validators.required, 
												Validators.maxLength(20),
												Validators.minLength(5)
												])
			],
			
			'email': [ null,Validators.compose([ 
												Validators.required,
												Validators.email,
												Validators.maxLength(50)
											   ])
			],
			'contrasena': [ null,Validators.compose([ 
												Validators.required,
												Validators.minLength(5)
											   ])
			],
			// Controles que no requieren validacion
			'identificacion' : [ null ],
			'direccion' : [ null ],
			'telefono' : [ null ],
			'fecha_nacimiento' : [ null]
				
		});

 	}
 	//-----------------------------------------------------------------------//



 	//-----------------------------------------------------------------------//
	// Metodo ngOnInit
	// Ejecucion posterior al metodo constructor 
	//-----------------------------------------------------------------------//
 	ngOnInit(){
 		this.createFormRegistro();
 	}
 	//-----------------------------------------------------------------------//


 	//-----------------------------------------------------------------------//
 	// METODO onSubmit
 	// Encargado de ejercutar funciones en el evento submit del formulario
 	//-----------------------------------------------------------------------//
 	onSubmit(){
		this.createUsuario();
	}
	//-----------------------------------------------------------------------//



	//-----------------------------------------------------------------------//
 	// CREAR USUARIO
 	// Creacion del usuario en la base de datos
 	//-----------------------------------------------------------------------//
	createUsuario(){

		// Lamado al metodo del servicio y suscripcion al observable que retorna
		this._usuario_service.createUsuario(this.usuario).subscribe(
			// Funcion Callback exitosa y almacenamiento de datos
			response => {
				if(response.code == 200){
					// Redireccion al inicio y notificacion
					this._router.navigate(['/login']);
					this.notification.open('Registro Exitoso!','close',{
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



	

	