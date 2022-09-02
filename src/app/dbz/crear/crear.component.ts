import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

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


  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  crear(){
    if ( this.personajeCreado.nombre == "" ){
      return;
    }
    
    this.dbzService.crearPersonaje(this.personajeCreado)

    this.personajeCreado = {
      nombre: "",
      poder: 0
    }
  }

}
