import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  nombreDeAlumnos: string[] = [
    "Raul", "Juan", "Pepe", "Franco"
  ];

  personaBorrada: string = "";


  borrarAlumno(nombre: string){
    this.personaBorrada = nombre;
      this.nombreDeAlumnos.splice(
        this.nombreDeAlumnos.indexOf(nombre), 1
      )
  }
}
