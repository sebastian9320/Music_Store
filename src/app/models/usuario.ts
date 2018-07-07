export class Usuario{
	constructor(
		public id: number,
		public email: string,
		public contraseña:string,
		public nombre: string,
		public apellido: string,
		public identificacion: number,
		public direccion: string,
		public telefono: number,
		public fecha_nacimiento: any
	){
		
	}
}