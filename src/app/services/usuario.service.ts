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
		let token = this.getToken();
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
		let token = this.getToken();
		let headers_list = new HttpHeaders({
			'Authorization' : `Bearer ${token}`
		})
		return this._http.get(this.url + '/usuario/'+id,{
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
	// ****************************************************************************** //
	
	updateUsuario(id: number, usuario: Usuario): Observable<any>{
		let json = JSON.stringify(usuario);
		console.log(json);
		let params = 'json='+json;
		let token = this.getToken();
		let headers_list = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded',
			'Authorization' : `Bearer ${token}`
		});

		return this._http.put(this.url + '/update-usuario/'+id, params, {
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

	getToken(){
		let usuario = JSON.parse(localStorage.getItem("currentUser"));
		if(usuario){
			return usuario.token_auth_usuario;
		}else{
			return false;
		}
	}
	
}
