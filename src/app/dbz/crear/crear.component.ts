import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  @Input('personaje') personajeCreado: Personaje = {
    nombre: "",
    poder: 0
  };

  @Input('lista') listaPersonajes: Personaje[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  crear(){
    if ( this.personajeCreado.nombre == "" ){
      return;
    }
    this.listaPersonajes.push(this.personajeCreado);
    this.personajeCreado = {
      nombre: "",
      poder: 0
    }
  }

}
