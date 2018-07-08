export class Usuario{
	constructor(
		public id: number,
		public email: string,
		public contrasena:string,
		public nombre: string,
		public apellido: string,
		public identificacion: number,
		public direccion: string,
		public telefono: number,
		public fecha_nacimiento: any
	){
		
	}
}