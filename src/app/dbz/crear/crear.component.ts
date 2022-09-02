import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() onCrearPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  crear(){
    if ( this.personajeCreado.nombre == "" ){
      return;
    }
    this.onCrearPersonaje.emit(this.personajeCreado);
    this.personajeCreado = {
      nombre: "",
      poder: 0
    }
  }

}
