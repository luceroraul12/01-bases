import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  public nombre: string = "Raul";
  public edad: number = 24;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre =  "erwt";
  }

  cambiarEdad(): void {
    this.edad = 42;
  }

}
