import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let currentUser = JSON.parse(localStorage.getItem("currentUser")).id_usuario;
	  	if( currentUser === null ){
	  		this._router.navigate(['/login']);
	  		return false;
	  	}else{
	    	return true;
	  	}
  	}
}
