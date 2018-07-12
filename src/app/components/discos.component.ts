//-----------------------------------------------------------------------//
import { Component, OnInit, Inject} from '@angular/core';

// Importar componentes de rutas para navegacion
import { Router, ActivatedRoute, Params} from '@angular/router';

// Importar servicio del disco
import { DiscoService } from '../services/disco.service';

// Modelo o clase disco para instanciar objeto en determinado caso
import { Disco } from '../models/disco';

// Importar componentes del angular material referente al dialog 
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';

// Importar componente de borrar el disco 
import { DeleteDialogComponent } from './delete_dialog.component';

// Componente Snackbar de angular material para notificacion
import { MatSnackBar } from '@angular/material';
//-----------------------------------------------------------------------//


//-----------------------------------------------------------------------//
// Decorador Component y atributos del componente 
//-----------------------------------------------------------------------//
@Component({
	selector: 'discos',
	templateUrl: '../templates/discos/discos.component.html',
	styleUrls: ['../templates/discos/discos.component.css'],
	providers: [DiscoService]
})
//-----------------------------------------------------------------------//

//---------------------- COMPONENTE CREAR DISCO ---------------------------//

export class DiscosComponent implements OnInit{
	//Declaracion de variables
	public title: string;
	public numbers: Array<number>;
	public discos: Disco;
	public searched_disco: string;
	public is_logged: boolean;
	public id_card: number;
	public dialog_ref: MatDialogRef<DeleteDialogComponent>;
	
	//-----------------------------------------------------------------------//
 	// Metodo Constructor
 	//-----------------------------------------------------------------------//
	constructor(
		// Inyectar objetos que se utilizaran mas adelante
		private _route:Router,
		private _router:ActivatedRoute,
		private _disco_service:DiscoService,
		private dialog: MatDialog,
		private notification: MatSnackBar		
	){
		// Inicializacion de variables	
		this.title = "discos component";
		
	}

	//-----------------------------------------------------------------------//
	// Metodo ngOnInit
	// Ejecucion posterior al metodo constructor 
	//-----------------------------------------------------------------------//
	ngOnInit(){
		// Llamado de metodos para validar el estado de login y para obtener
		// informacion de los discos
		this.validarLogin();
		this.getDiscos();

	}
	//-----------------------------------------------------------------------//



	//-----------------------------------------------------------------------//
	// OBTENER TODOS LOS DISCOS
	//-----------------------------------------------------------------------//
	getDiscos(): void{
		// Lamado al metodo del servicio y suscripcion al observable que retorna
		this._disco_service.getDiscos().subscribe(
			// Funcion Callback exitosa y almacenamiento de datos
			result => {

				if(result){
					this.discos = result.data;			
				}else{
					this.discos = result.data;
				}
			},
			// Funcion Calback erronea y registro de esta
			error => {
				console.log(<any>error);
			}
		);

	}
	//-----------------------------------------------------------------------//


	//-----------------------------------------------------------------------//
	// VALIDAR ESTADO DE LOGIN
	// validacion para permitir el acceso a distintas 
	// funcionalidades y opciones dentro de la plantilla
	//-----------------------------------------------------------------------//

	validarLogin(): void{
		let usuario_logged = JSON.stringify(localStorage.getItem("currentUser"));
		
		if(usuario_logged != "null"){
			this.is_logged = true;
		}else{
			this.is_logged = false;
		}
		
	}

	//-----------------------------------------------------------------------//
	

	//-----------------------------------------------------------------------//
	// MOSTRAR DIALOGO DE BORRAR DISCO
	// uso del componente asociado para borrar el disco 
	//-----------------------------------------------------------------------//
	showDialogDelete(id): void {
	    // Almacenar la id de la card para 
	    this.id_card = id;
		// Uso del componente para borrar como refencia y 
		// enviar de id del disco para borrarlo
		this.dialog_ref = this.dialog.open(DeleteDialogComponent,{
	  		data: {
	    		id_disco: id
			}
	  	});
		  
	}
	//-----------------------------------------------------------------------//


	//-----------------------------------------------------------------------//
	// BUSCAR DISCO
	// permite obetener los discos por medio de la busqueda 
	// con datos como (Autor, Genero, Titulo, Album )
	//-----------------------------------------------------------------------//
	searchDisco(): void{
		// Lamado al metodo del servicio y suscripcion al observable que retorna
		this._disco_service.searchDisco(this.searched_disco).subscribe(
			// Funcion Callback exitosa y almacenamiento de datos
			result => {
				if(result){
					this.discos = result.data;			
				}else{
					this.discos = result.data;
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


