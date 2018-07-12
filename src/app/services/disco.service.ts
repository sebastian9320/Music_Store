//headers_list.append("Authorization",`Bearer `);

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Disco } from '../models/disco';
import { GLOBAL } from './global';

@Injectable()

export class DiscoService{

	public url: string;

	constructor(private _http: HttpClient){
		this.url = GLOBAL.url
	}

	

	getDiscoPorId(id: number): Observable<any>{
		return this._http.get(this.url + '/disco/'+id)
				.pipe(map(
					res => {
						return res;
					},
					error => {
						console.log(error);	
					}
				));
	}

	getGeneros(): Observable<any>{
		let token = this.getToken();
		let headers_list = new HttpHeaders({
			'Authorization' : `Bearer ${token}`
		})	
		return this._http.get(this.url + '/generos',{headers : headers_list})
				.pipe(map(
					res => {
						return res;
					},
					error => {
						console.log(error);	
					}
				));	
	}

	searchDisco(field: string): Observable<any>{
		
		let json = JSON.stringify(field);
		let params = 'json='+json;
		let headers_list = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded'
		});
		return this._http.post(this.url + '/search-disco', params, {headers: headers_list})
				.pipe(map(
					res => {
						return res;
					},
					error => {
						console.log(error);	
					}
				));
	}

	createDisco(disco: Disco):Observable<any>{
		let json = JSON.stringify(disco);
		let params = 'json='+json;
		let token = this.getToken();
		let headers_list = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded',
			'Authorization' : `Bearer ${token}`
		});
		return this._http.post(this.url + '/create-disco', params, {headers: headers_list})
				.pipe(map(
					res => {
						return res;
					},
					error => {
						console.log(error);	
					}
				));											
	}
	
	getDiscos(): Observable<any>{
		return this._http.get(this.url + '/discos')
				.pipe(map(
					res => {
						
						return res;
					},
					error => {
						console.log(error);	
					}
				));	
	}

	updateDisco(id: number, disco: Disco): Observable<any>{
		let json = JSON.stringify(disco);
		let params = 'json='+json;
		let token = this.getToken();
		let headers_list = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded',
			'Authorization' : `Bearer ${token}`
		});

		return this._http.put(this.url + '/update-disco/'+id, params, {
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

	deleteDisco(id: number): Observable<any>{
		let token = this.getToken();
		let headers_list = new HttpHeaders({
			'Authorization' : `Bearer ${token}`
		})	
		return this._http.delete(this.url+'/delete-disco/'+id, {headers: headers_list})
			.pipe(
				map(
					res => {
						return res;	
					},
					error => {
						console.log(<any>error);
					}
			))
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