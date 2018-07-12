import { Component, OnInit } from '@angular/core';
// Importar componentes de rutas para navegacion
import { Router, ActivatedRoute, Params} from '@angular/router';

// Importar servicio del usuario
import { UsuarioService } from '../services/usuario.service';

// Modelo o clase Genero para instanciar objeto en determinado caso
import { Usuario } from '../models/usuario';

// Componente Snackbar de angular material para notificacion
import {MatSnackBar} from '@angular/material';


//-----------------------------------------------------------------------//
// Decorador Component y atributos del componente 
//-----------------------------------------------------------------------//
@Component({
	selector: 'perfil-usuario',
	templateUrl: '../templates/perfil/perfil.component.html',
	styleUrls: ['../templates/perfil/perfil.component.css'],
	providers: [UsuarioService]
})
//-----------------------------------------------------------------------//

//----------------------- COMPONENTE PERFIL -----------------------------//

export class PerfilComponent implements OnInit{

	// Declaracion de variables
	public title: string;
	public usuario: Usuario;
	public is_login: boolean;
	
	//-----------------------------------------------------------------------//
 	// Metodo Constructor
 	//-----------------------------------------------------------------------//
	constructor(
			private _route:Router,
			private _router:ActivatedRoute,
			private _usuario_service:UsuarioService,
			private notification: MatSnackBar		
	){
		let nombre_usuario = localStorage.getItem("currentUserName");
		this.title = "Perfil de " + nombre_usuario;

	}
	//-----------------------------------------------------------------------//




	//-----------------------------------------------------------------------//
	// Metodo ngOnInit
	// Ejecucion posterior al metodo constructor 
	//-----------------------------------------------------------------------//
	ngOnInit(){
		// Obtener datos del usuario 
		this.getUsuarioPorId();

	}
	//-----------------------------------------------------------------------//




	//-----------------------------------------------------------------------//
 	// ODTENER DATOS DEL USUARIO
 	// Obtener datos del usuario por medio del id que posee
 	//-----------------------------------------------------------------------//
	getUsuarioPorId(){
		// Obtener el id del usuario por medio de los datos del LocalStorage
		let id = JSON.parse(localStorage.getItem("currentUser")).id_usuario;

		// Llamado al metodo del servicio y suscripcion al observable que retorna
		this._usuario_service.getUsuarioPorId(id).subscribe(
			// Funcion de Callback exitosa y retorno de datos
			result => {

				if(result){
					this.usuario = result.data;		
					
				}else{
					this.usuario = result.data;
				}
			},
			// Funcion de Calback erronea y registro de esta
			error => {
				console.log(<any>error);
			}
		);

	}
	//-----------------------------------------------------------------------//
	
}