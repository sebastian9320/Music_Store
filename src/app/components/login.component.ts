import { Component } from '@angular/core';

// Importar componentes de rutas para navegacion
import { Router, ActivatedRoute, Params } from '@angular/router';

// Importar componentes de formularios para creacion interaccion y valiadacion
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importar variable global del servicio
import { GLOBAL } from '../services/global';

// Importar usuario del disco
import { UsuarioService } from '../services/usuario.service';

// Modelo o clase usuario para instanciar objeto en determinado caso
import { Usuario } from '../models/usuario';

// Componente Snackbar de angular material para notificacion
import { MatSnackBar } from '@angular/material';

//-----------------------------------------------------------------------//
// Decorador Component y atributos del componente 
//-----------------------------------------------------------------------//
@Component({
 	selector: 'login',
 	templateUrl: '../templates/login/login.component.html',
 	styleUrls: ['../templates/login/login.component.css'],
 	providers: [UsuarioService]
 })
//-----------------------------------------------------------------------//

//---------------------- COMPONENTE LOGIN DE USUARIO -------------------------//
export class LoginComponent{
	// Declaracion de variables
 	public form_login: FormGroup;
 	public usuario: Usuario;
 	public message_error: Array<any>;

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
 		this.createFormLogin();
 		this.usuario = new Usuario(0,'','','','',0,'',0,'');
 		this.message_error = [
			{
			'email' : 'Email no valido',
		  	'contrasena' : 'Contraseña no valida'
		  	}
		 ];
 	}
 	//-----------------------------------------------------------------------//



 	//-----------------------------------------------------------------------//
	// Metodo ngOnInit
	// Ejecucion posterior al metodo constructor 
	//-----------------------------------------------------------------------//
 	ngOnInit(){

 	}
 	//-----------------------------------------------------------------------//


 	 	//-----------------------------------------------------------------------//
 	// METODO onSubmit
 	// Encargado de ejercutar funciones en el evento submit del formulario
 	//-----------------------------------------------------------------------//
 	onSubmit(){
 		// Llamado para validar informacion e iniciar sesion
 		this.iniciarSesion();
 		
 	}
 	//-----------------------------------------------------------------------//


 	//-----------------------------------------------------------------------//
	// CREAR FORMULARIO DE LOGIN
	// crear el formulario y adicionar los controles que este manejara con sus
	// validaciones
	//-----------------------------------------------------------------------//
 	createFormLogin(){

 		// Asinar grupo de controles con sus grupo de validaciones
 		this.form_login = this.form_builder.group({

			'email': [ null, Validators.compose([
						Validators.required, 
						Validators.maxLength(50),
						Validators.minLength(10)
					])
			],	
			'contrasena' : [ null,Validators.compose([
						Validators.required, 
						Validators.minLength(5)
					])
			],
		});
 	}
 	//-----------------------------------------------------------------------//


 	//-----------------------------------------------------------------------//
 	// CREAR DISCO 
 	// Creacion del disco en la base de datos 
 	//-----------------------------------------------------------------------//
 	iniciarSesion(){

 		// Lamado al metodo del servicio y suscripcion al observable que retorna
 		this._usuario_service.iniciarSesionUsuario(this.usuario).subscribe(
 			// Funcion Callback exitosa y almacenamiento de datos
 			response => {
 				if((response.status == "success") && (response.code == 200)){	
 					// Asignar valores obtenidos a un nuevo elemento del localStorage
 					localStorage.setItem('currentUser',JSON.stringify(response.data));
 					// Asignar nombr del usuario por medio de los datos en el local storage
 					let nombre_usuario = JSON.parse(localStorage.getItem("currentUser")).nombre_usuario;	
 					// Redireccion al inicio y notificacion
 					this.notification.open('Bienvenido ' + nombre_usuario +'!','close', {
			  			panelClass: ['success-snackbar']
					});
 					this._router.navigate(['/home']);
 				}else{
 					// Notificacion de error
 					this.notification.open('Error al iniciar Sesion','close');
 				}
 				
 			},
 			// Funcion Calback erronea y registro de esta
 			error => {
 				console.info(error);
 			}
 		);
 	}

 	//-----------------------------------------------------------------------//
 }