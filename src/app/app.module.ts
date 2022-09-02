import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './heroe/listado/listado.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
