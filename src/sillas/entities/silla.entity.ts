export class Silla {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  uso_id: number;

  constructor(
    id: number,
    nombre: string,
    marca: string,
    precio: number,
    uso_id: number,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.uso_id = uso_id;
  }
}
