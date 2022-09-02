import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  get listaDePersonajesCreados(): Personaje[]{
    return this.dbzService.listaPersonajes;
  }

  constructor(private dbzService: DbzService) {
   }

  ngOnInit(): void {
  }

  
}
