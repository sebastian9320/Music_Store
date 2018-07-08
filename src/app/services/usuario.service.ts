import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { GLOBAL } from './global';

@Injectable()

export class UsuarioService{
	
	public url:string;

	constructor(
		public _http: HttpClient
	){
		this.url = GLOBAL.url;
	}
	
	// ****************************************************************************** //
	
	createUsuario(usuario: Usuario):Observable<any>{
		let json = JSON.stringify(usuario);
		let params = 'json='+json;
		let headers_list = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded'
		});
		return this._http.post(this.url + '/create-usuario', params, {headers: headers_list})
				.pipe(map(
					res => {
						return res;
					},
					error => {
						console.log(error);	
					}
				));											
	}
	
	// ****************************************************************************** //

	iniciarSesionUsuario(usuario: Usuario):Observable<any>{

		let json = JSON.stringify(usuario);
		let params = 'json='+json;
		let headers_list = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded'
		});
		return this._http.post(this.url + '/inicio-sesion',params, {
			headers: headers_list})
				.pipe(map(
					res => {
						return res;
					},
					error => {
						console.log(error);	
					}
				));	
	}
	
	getUsuarioPorId(id: number): Observable<any>{
		return this._http.get(this.url + '/usuario/'+id)
				.pipe(map(
					res => {
						return res;
					},
					error => {
						console.log(error);	
					}
				));	
	}
	// ****************************************************************************** //
	/*
	updateUsuario(id, usuario: Usuario): Observable<any>{
		let json = JSON.stringify(usuario);
		let params = 'json='+json;
		let headers_list = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded'
		});
		//headers_list.append("Authorization",`Bearer `);
		
		return this._http.post(this.url + 'update-usuario/'+id, params, {
			headers: headers_list})
				.pipe(map(
					res => {
						console.info(res);
						return res;
					},
					error => {
						console.log(error);	
					}
				));	
	}
	
	*/

	/*
	deleteusuario(id: number):Observable<any>{

		return this._http.get(this.url+'delete-usuario/'+id)
								.pipe(map(
									res => {
										return res;
									},
									error => {
										console.log(error);	
									}
								));	
								
	}*/

}
