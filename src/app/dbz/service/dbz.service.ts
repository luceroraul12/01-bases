import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    constructor(){
        
    }

  private _listaPersonajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    }
  ];

  get listaPersonajes(): Personaje[]{
    return [...this._listaPersonajes];
  }

  crearPersonaje(personaje: Personaje): void{
    this._listaPersonajes.push(personaje);
  }

}