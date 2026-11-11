import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculadora } from './calculadora/calculadora';
import { Catalogo } from './catalogo/catalogo';
import { Registro } from './registro/registro';
import { Semaforo } from './semaforo/semaforo';
import { Control } from './control/control';

@Component({
  imports: [RouterOutlet, Calculadora, Catalogo, Registro, Semaforo, Control],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reto11-11');
}
