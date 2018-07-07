import{ Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { GLOBAL } from '../services/global';
import { DiscoService } from '../services/disco.service';
import { Disco } from '../models/disco';
import { Genero } from '../models/genero';

@Component({
	selector: 'create-disco',
	templateUrl: '../templates/create_disco/create_disco.component.html',
	styleUrls: ['../templates/create_disco/create_disco.component.css'],
	providers: [DiscoService]
})

export class CreateDiscoComponent{

 	public disco: Disco;
 	public form_disco: FormGroup;
 	public generos: Genero;
 	public message_error: Array<any>;

	constructor(
		private _disco_service: DiscoService,
		private _router: Router,
		private form_builder: FormBuilder
	){
		this.disco = new Disco(0,'','',0,'',new Date(),1);
		this.message_error = [
								{

								'nombre' : 'Nombre no valido',
							  	'autor' : 'Autor no valido',
							  	'genero' : 'Genero no valido',
							  	'album' : 'Album no valido'							  
							  	}
							 ];
		this.createFormDisco();
	}

	ngOnInit(){
		this.cargarGeneros();
 	}

 	onSubmit(){

		this.createDisco();

	}

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


	createFormDisco(){

 		this.form_disco = this.form_builder.group({

			'nombre': [ null, Validators.compose([
												Validators.required, 
												Validators.maxLength(25),
												Validators.minLength(5)
												])
			],	
			'autor' : [ null,Validators.compose([
												Validators.required, 
												Validators.maxLength(20),
												Validators.minLength(5)
												
												])
			],
			
			'genero': [ null,Validators.compose([
												Validators.required 
											   ])
			],
			'album': [ null,Validators.compose([ 
												Validators.required,
												Validators.minLength(3)
											   ])
			],
			'fecha_lanzamiento' : [ null ]		
		});
 	}

 	/*********************** End Method *************************/


 	 /******************* Crear Usuario ****************************/
	createDisco(){
		this._disco_service.createDisco(this.disco).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/home']);
					
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

 	

