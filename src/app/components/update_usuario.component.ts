import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Importar Servicio de Usuario para peticiones a este y a la base de datos
import { UsuarioService } from '../services/usuario.service';

// Importar componentes para el uso formularios como creacion, interaccion y validacion
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importar componente snackbar de angular material para mostrar notificaciones
import { MatSnackBar } from '@angular/material';

// Importar modelo usuario para instacias dentro del componente
import { Usuario } from '../models/usuario';

// Decorador Component
@Component({
	// Atributos del componente como selector, plantillas y servicios que utilizara
	selector: 'update-usuario',
	templateUrl: '../templates/update_usuario/update_usuario.component.html',
	styleUrls: ['../templates/update_usuario/update_usuario.component.css'],
	providers: [UsuarioService]
})


export class UpdateUsuarioComponent{
	
	// Declaracion de variables
	public titulo: string;
	public usuario: Usuario;
	public message_error: Array<any>;
	public form_usuario: FormGroup;


	//----------------------------------------------------------------------------//
	// Metodo constructor 
	// Inyectar objetos de distinto tipo para utilizarlos dentro del componente
	//----------------------------------------------------------------------------//
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _usuario_service: UsuarioService,
		private form_builder: FormBuilder,
		private notification: MatSnackBar
	){
		// Inicializacion de variables
		this.titulo = "editar Usuario";
		// Instancia de la clase usuario 
		this.usuario = new Usuario(1,'','','','',1,'',0,new Date());
		// Mensajes de error para validacion de formulario
		this.message_error = [
			{
			'nombre' : 'Nombre no valido',
		  	'apellido' : 'Apellido no valido',
		  	'email' : 'Email no valido',
		  	'contrasena' : 'Contrasena no valida'							  
		  	}
		];
	}
	//----------------------------------------------------------------------------//



	//------------------------------------------------------------------------------//
	// METODO ngOnInit
	// Encargado de la ejecucion de tareas iniciales del componente
	//------------------------------------------------------------------------------//
	ngOnInit(){
		// Llamado de metodos a cargar principalmente
		this.getUsuarioPorId();
		this.createFormUsuario();

	}
	//------------------------------------------------------------------------------//



	//------------------------------------------------------------------------------//
	// METODO onSubmit
	// Ejecutado en el evento submit del formulario de actualizacion
	//------------------------------------------------------------------------------//
	onSubmit(){

		// Llamado al metodo actualizar usuario
		this.updateUsuario();
	}
	//------------------------------------------------------------------------------//





	//------------------------------------------------------------------------------//
	// CREAR FORMULARIO USUARIO
	// Metodo encargado de crear el formulario para la actualizacion del usuario
	//------------------------------------------------------------------------------//
	createFormUsuario(){
		// Asignar grupo de controles y validadores 
		// correspondientes para la creacion del formulario 	
		this.form_usuario = this.form_builder.group({

			'nombre': [ null, Validators.compose([
				Validators.required, 
				Validators.maxLength(25), 
				Validators.minLength(5)
			])],	
			
			'apellido' : [ null, Validators.compose([
				Validators.required, 
				Validators.maxLength(20),
				Validators.minLength(5)								
			])],
			
			'email': [ null, Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
		    ])],

			'contrasena': [ null ,Validators.compose([ 
				Validators.required,
				Validators.minLength(3)
		   	])]	
		});
 	}

 
 	//------------------------------------------------------------------------------//





 	//------------------------------------------------------------------------------//
 	// OBTENER USUARIO POR ID
	// Metodo encargado de obtener la informacion del usuario de acuerdo a su id
 	//------------------------------------------------------------------------------//
	getUsuarioPorId(){
		// Asignacion de valor almacenado en localStorage para obtener el id del usuario
		let id_usuario = JSON.parse(localStorage.getItem("currentUser")).id_usuario;
		
		// llamado al metodo del servicio y suscripcion al observable que este retorna
		this._usuario_service.getUsuarioPorId(id_usuario).subscribe(
			// Funcion Callback de respuesta exitosa y obtencion de datos
			res => {

				if(res){
					this.usuario = res.data[0];
				}else{
					this.usuario = res.data[0];
				}
			},
			// Funcion Callback de respuesta erronea y registro de este
			error => {
				console.log(<any>error);
			}
		);
		
	}

	//------------------------------------------------------------------------------//





	//------------------------------------------------------------------------------//
	// ACTUALIZAR USUARIO
	// metodo encargado de actulizar los datos del usuario registrado
	//------------------------------------------------------------------------------//
	updateUsuario(){
		// Asignacion de valor almacenado en localStorage para obtener el id del usuario
		let id_usuario = JSON.parse(localStorage.getItem("currentUser")).id_usuario;
		
		// Lamada al metodo del servico y suscripcion al observable que este retorna
		this._usuario_service.updateUsuario(id_usuario, this.usuario).subscribe(

			// Funcion Callback de respuesta exitosa y obtencion de datos
			response => {
				if(response.code == 200){
					// Redireccion al componente perfil por medio de la ruta
					this._router.navigate(['/perfil']);

					// Notificacion de exito en la operacion
					this.notification.open('Usuario Actualizado','close', {
							panelClass: ['success-snackbar']
					});
				}else{
					console.log(response);
				}
			},
			// Funcion Callback de respuesta exitosa y obtencion de datos
			error => {
				console.log(<any>error);
			}
		);	
	
	}
	//------------------------------------------------------------------------------//
	
}