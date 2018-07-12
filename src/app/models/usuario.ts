// Clase o modelo usuario
export class Usuario{
	// Metodo constructor de la clase
	constructor(
		// variables o atributos de la clase para su instancia
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