import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  	public is_login: boolean;
  	public name_usuario: string;
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
	    .pipe(
	      map(result => result.matches)
	    );
	    
	constructor(private breakpointObserver: BreakpointObserver) {
		
		
	}
	ngOnInit(){
		this.validarLogin();
		
	}
	validarLogin(){
		
		if(localStorage.getItem("currentUser") != null){
			this.is_login = true;
			this.name_usuario = localStorage.getItem("currentUserName");
		}else{
			this.is_login = false;
			this.name_usuario = "Invitado";
		}
	}
	
}
