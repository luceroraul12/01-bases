import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  contador: number = 0;
  base: number = 5;

  acumular( cantidad: number): void {
      this.contador += cantidad;
  }
}
