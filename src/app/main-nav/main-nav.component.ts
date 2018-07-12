import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements DoCheck {

  	public is_logged: boolean;
  	public name_usuario: string;
  	//@Input() is_logged: boolean;

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
	    .pipe(
	      map(result => result.matches)
	    );
	

	//----------------------------------------------------------------------------//
	//----------------------------------------------------------------------------//    
	constructor(
		private breakpointObserver: BreakpointObserver,
		private _router: Router,
		private notification: MatSnackBar

	) {

	}
	//----------------------------------------------------------------------------//



	//----------------------------------------------------------------------------//
	//----------------------------------------------------------------------------//

	ngOnInit(){
		this.validarLogin();
	}
	//----------------------------------------------------------------------------//



	//----------------------------------------------------------------------------//
	//----------------------------------------------------------------------------//
	ngDoCheck(){
		this.validarLogin();
	}
	//----------------------------------------------------------------------------//



	//----------------------------------------------------------------------------//
	//----------------------------------------------------------------------------//
	validarLogin(){
		if(localStorage.getItem("currentUser") != null){
			let logged_user = JSON.parse(localStorage.getItem("currentUser")).id_usuario;
			if(logged_user != "null"){
				this.is_logged = true;
				this.name_usuario = JSON.parse(localStorage.getItem("currentUser")).nombre_usuario;
			}else{
				this.is_logged = false;
				this.name_usuario = "Invitado";
			}	
		}else{
			this.is_logged = false;
			this.name_usuario = "Invitado";
		}
		
	}
	//----------------------------------------------------------------------------//



	//----------------------------------------------------------------------------//
	//----------------------------------------------------------------------------//
	logout(){
		
		localStorage.removeItem("currentUser");
		this.validarLogin();
		this.notification.open('Usted ha cerrado sesion','close',{
			panelClass: 'success-snackbar'
		});
		this._router.navigate(['/']);

	}
	//----------------------------------------------------------------------------//

}
