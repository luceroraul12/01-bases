import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
class DbzService {

  private _listaPersonajes: Personaje[] = [];

  get listaPersonajes(): Personaje[]{
    return [...this._listaPersonajes];
  }

  crearPersonaje(personaje: Personaje): void{
    this._listaPersonajes.push(personaje);
  }

}