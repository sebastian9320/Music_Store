import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GLOBAL } from '../services/global';
import { UsuarioService } from '../services/Usuario.service';
import { Usuario } from '../models/usuario';

@Component({
 	selector: 'login',
 	templateUrl: '../templates/login/login.component.html',
 	styleUrls: ['../templates/login/login.component.css'],
 	providers: [UsuarioService]
 })
 export class LoginComponent{

 	public form_login: FormGroup;
 	public usuario: Usuario;
 	public message_error: Array<any>;

 	constructor(
 		private _usuario_service: UsuarioService,
 		private _router: Router,
 		private form_builder: FormBuilder
 	){
 		
 		this.createFormLogin();
 		this.usuario = new Usuario(0,'','','','',0,'',0,'');
 		this.message_error = [
								{

								'email' : 'Email no valido',
							  	'contrasena' : 'Contraseña no valida'
							  
							  	}
							 ];
 	}
 	ngOnInit(){

 	}
 	onSubmit(){
 		this.iniciarSesion();
 		
 	}
 	createFormLogin(){
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



 	iniciarSesion(){
 		
 		this._usuario_service.iniciarSesionUsuario(this.usuario).subscribe(
 			response => {
 				if((response.status == "success") && (response.code == 200)){

 					localStorage.setItem('currentUser',response.data.id_usuario);
 					localStorage.setItem('currentUserEmail',response.data.email_usuario);				
 					localStorage.setItem('currentUserName',response.data.nombre_usuario);

 					this._router.navigate(['/home']);
 				}else{
 					
 					alert("Error al iniciar sesion");
 				}
 				
 			},
 			error => {
 				console.info(error);
 			}
 		);
 		
 		

 	}


 }