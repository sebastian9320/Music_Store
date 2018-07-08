import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DiscoService } from '../services/Disco.service';

import { Disco } from '../models/disco';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';



@Component({
	selector: 'discos',
	templateUrl: '../templates/discos/discos.component.html',
	styleUrls: ['../templates/discos/discos.component.css'],
	providers: [DiscoService]
})

export class DiscosComponent implements OnInit{
	public title: string;
	public numbers: Array<number>;
	public discos: Disco;
	public is_login: boolean;
	constructor(
			private _route:Router,
			private _router:ActivatedRoute,
			private _disco_service:DiscoService,
			private dialog: MatDialog		
	){
		
		this.title = "discos component";

	}
	ngOnInit(){
		this.validarLogin();
		this.getDiscos();

	}
	/*************************************************************/
	getDiscos(){
		
		this._disco_service.getDiscos().subscribe(
			result => {

				if(result){
					this.discos = result.data;			
					
				}else{
					this.discos = result.data;
				}
			},
			error => {
				console.log(<any>error);
			}
		);

	}

	validarLogin(){
		if(localStorage.getItem("currentUser") != null){
			this.is_login = true;
		}else{
			this.is_login = false;
		}
	}
	/**************************************************************/
	/*openDialogEdit(){
		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;

	//	this.dialog.open(CourseDialogComponent, dialogConfig);
	}

	openDialogDelete(){

	}
	*/
}