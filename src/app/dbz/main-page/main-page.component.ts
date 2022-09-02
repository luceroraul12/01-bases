import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajeCreado: Personaje = {
    nombre: "Yochi",
    poder: -900
  }


  addPersonaje(personajeRecibido: Personaje){

    this.listaDePersonajesCreados.push(personajeRecibido);

  }

}
