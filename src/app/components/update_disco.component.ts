import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DiscoService } from '../services/disco.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Disco } from '../models/disco';
import { Genero } from '../models/genero';

@Component({
	selector: 'update-disco',
	templateUrl: '../templates/create_disco/create_disco.component.html',
	styleUrls: ['../templates/create_disco/create_disco.component.css'],
	providers: [DiscoService]
})


export class UpdateDiscoComponent{
	public titulo: string;
	public disco: Disco;
	public generos: Genero;
	public is_update: boolean;
	public message_error: Array<any>;
	public form_disco: FormGroup;
	public data;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _disco_service: DiscoService,
		private form_builder: FormBuilder
	){
		this.titulo = "editar disco";
		this.disco = new Disco(0,'','',1,'',new Date(),1);
		this.is_update = true;
		this.message_error = [
								{

								'nombre' : 'Nombre no valido',
							  	'autor' : 'Autor no valido',
							  	'genero' : 'Genero no valido',
							  	'album' : 'Album no valido'							  
							  	}
							 ];
		
	}

	ngOnInit(){
		this.createFormDisco();
		this.getDiscoPorId();
		this.cargarGeneros();
	}

	onSubmit(){
		this.updateDisco();
	}

	createFormDisco(){
		 	
		 	this.form_disco = this.form_builder.group({

			'nombre': [ null, Validators.compose([
												Validators.required, 
												Validators.maxLength(25),
												Validators.minLength(5)
												])
			],	
			'autor' : [ null, Validators.compose([
												Validators.required, 
												Validators.maxLength(20),
												Validators.minLength(5)
												
												])
			],
			
			'genero': [ null, Validators.compose([
												Validators.required 
											   ])
			],
			'album': [ null ,Validators.compose([ 
												Validators.required,
												Validators.minLength(3)
											   ])
			],
			'fecha_lanzamiento' : [ null ]		
		});
 	}

 	/*********************** End Method *************************/

 	cargarGeneros(){
		this._disco_service.getGeneros().subscribe(
			result => {

				if(result){
					this.generos = result.data;			
					
				}else{
					this.generos = result.data;
				}
			},

			error => {
				console.log(<any>error);
			}
		);
	}


 	//------------------------------------------------------------------------//

	getDiscoPorId(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			
			this._disco_service.getDiscoPorId(id).subscribe(
				response => {
					if(response){
						this.data = response.data;

						
						
					}else{
						this._router.navigate(['/home']);
					}	
				},
				error => {
					console.log(<any>error);
				}
			);

		});
		
	}

	updateDisco(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._disco_service.updateDisco(id, this.disco).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/disco/'+id]);
						
					}else{
						console.log(response);
					}
				},
				error => {
					console.log(<any>error);
				}
			);	
		});
	}
	
}
