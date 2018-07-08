import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from '../services/Usuario.service';

import { Usuario } from '../models/usuario';
import {MatSnackBar} from '@angular/material';



@Component({
	selector: 'perfil-usuario',
	templateUrl: '../templates/perfil/perfil.component.html',
	styleUrls: ['../templates/perfil/perfil.component.css'],
	providers: [UsuarioService]
})

export class PerfilComponent implements OnInit{
	public title: string;
	public numbers: Array<number>;
	public usuario: Usuario;
	public is_login: boolean;
	constructor(
			private _route:Router,
			private _router:ActivatedRoute,
			private _usuario_service:UsuarioService,
			private notification: MatSnackBar		
	){
		
		this.title = "Perfil de " + localStorage.getItem("currentUserName");

	}
	ngOnInit(){
		
		this.getUsuarioPorId();

	}
	/*************************************************************/
	getUsuarioPorId(){
		let id = parseInt(localStorage.getItem("currentUser"));

		this._usuario_service.getUsuarioPorId(id).subscribe(
			result => {

				if(result){
					this.usuario = result.data;		
					
				}else{
					this.usuario = result.data;
				}
			},
			error => {
				console.log(<any>error);
			}
		);

	}

	openSnackBar() {
         this.notification.open('Message archived','close', {
  			panelClass: ['success-snackbar']
		});
  	}
}