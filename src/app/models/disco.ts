// Clase o modelo disco
export class Disco{
	// Metodo Constructor de la clase
	constructor(
		// variables o atributos de la clase para su instancia
		public id: number,
		public nombre: string,
		public autor:string,
		public genero: number,
		public album: string,
		public fecha_lanzamiento: any,
		public registro_usuario: number
	){
		
	}
}