//headers_list.append("Authorization",`Bearer `);

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Disco } from '../models/disco';
import { GLOBAL } from './global';

@Injectable()

export class DiscoService{

	public url = GLOBAL.url;

	constructor(private _http: HttpClient){

	}

	getDiscos(): Observable<any>{
		return this._http.get(this.url + '/discos')
				.pipe(map(
					res => {
						console.log(res);
						return res;
					},
					error => {
						console.log(error);	
					}
				));	
	}


	getGeneros(): Observable<any>{
		return this._http.get(this.url + '/generos')
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
		let headers_list = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded'
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
	
}