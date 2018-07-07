import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GLOBAL } from '../services/global';
import { UsuarioService } from '../services/Usuario.service';
import { Usuario } from '../models/usuario';

/**************************************************************/
 @Component({
 	selector: 'registro',
 	templateUrl: '../templates/registro/registro.component.html',
 	styleUrls: ['../templates/registro/registro.component.css'],
 	providers: [UsuarioService]
 })
/***************************************************************/

 export class RegistroComponent{

 	public usuario: Usuario;
 	public form_registro: FormGroup;
 	public message_error: Array<any>;
 	public usuario_data: any;


 	constructor(
 		private _usuario_service: UsuarioService,
		private _router: Router,
		private form_builder: FormBuilder
	){
 		
		this.usuario = new Usuario(0,'','','','',0,'',0,'');
		this.message_error = [
								{

								'email' : 'Email no valido',
							  	'contrasena' : 'Contraseña no valida',
							  	'nombre' : 'Nombre no valido',
							  	'apellido' : 'Apellido no valido'
							  
							  	}
							 ];
		this.createFormRegistro();

 	}
 	/******************************end constructoer ************************/




 	/********************** Crear Formulario Registro **********************/

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
			'identificacion' : [ null ],
			'direccion' : [ null ],
			'telefono' : [ null ],
			'fecha_nacimiento' : [ null]
				
		});
 	}

 	/*********************** End Method *************************/



 	ngOnInit(){

 	}

 	onSubmit(){

		this.createUsuario();

	}


	 /******************* Crear Usuario ****************************/
	createUsuario(){
		this._usuario_service.createUsuario(this.usuario).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/login']);
					
				}else{
					console.log(response);
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
	/********************* end method ******************************/
 }



	

	