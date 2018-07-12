//-----------------------------------------------------------------------//
import { Component, OnInit, Inject } from '@angular/core';

// Importar Componentes de angular material referente a los dialog
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//importar componente de rutas para navegacion 
import { Router } from '@angular/router';

// Importar Snackbar de angular material para notificaciones
import { MatSnackBar } from '@angular/material';

// Importar Servicio del disco para hacer llamados a este y a la base de datos
import { DiscoService } from '../services/disco.service';
//-----------------------------------------------------------------------//



//-----------------------------------------------------------------------//
// Decorador Component
@Component({
  // Plantilla del dialog que se motrara a la hora de eliminar el disco
  template: `
    <h1 mat-dialog-title>Borrar Disco</h1>
    <mat-dialog-content>

      Esta seguro de eliminar este disco?

    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button color='primary' (click)="deleteDisco()" mat-dialog-close><mat-icon>done</mat-icon></button>
      <button mat-raised-button color='warn' mat-dialog-close><mat-icon>clear</mat-icon></button>
    </mat-dialog-actions>
  `,
  providers: [DiscoService]
})
//-----------------------------------------------------------------------//


//---------------- COMPONENTE DE ELIMINACION DE DISCO ------------------//
export class DeleteDialogComponent {

    //-----------------------------------------------------------------------//
    // Metodo Constructor
    //-----------------------------------------------------------------------//
    constructor(
        // Inyectar objetos de componentes externos que seran utilizados
        private _router: Router,
        private dialogRef: MatDialogRef<DeleteDialogComponent>,
        private notification: MatSnackBar,
        private _disco_service : DiscoService,
        @Inject(MAT_DIALOG_DATA) public data: any
        
    ){

    }

    //-----------------------------------------------------------------------//
    // BORRAR DISCO
    // encargado de conexion con el servicio y solicitud para eliminar disco   
    //-----------------------------------------------------------------------//
    deleteDisco() {
      // Llamada al metodo del servico y suscripcion al observable que retorna
      this._disco_service.deleteDisco(this.data.id_disco).subscribe(
        // Funcion Calback exitosa y almacenamiento de datos obtenidos
        result => {

          if(result.code == 200){
            // Notificacion y redireccion a otro componente  
            this.notification.open('Disco Borrado con exito¡','close',{
              panelClass: 'success-snackbar'
            });      
            this._router.navigate(['/create-disco']);  
            
          }else{

            // Notificacion de error
            this.notification.open('Error al borrar el disco','close',{
              panelClass: 'warn-snackbar'
            });
          }
        },
        // Funcion Callback erroronea 
        error => {
          console.log(<any>error);
        }
      );

    }
}
//-----------------------------------------------------------------------//


//------------------------ END COMPONENT ----------------------------//