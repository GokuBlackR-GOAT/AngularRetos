import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {
  color = '';
  mensaje = '';
  
  cambiarrojo(){
    this.color = 'red';
    this.mensaje = 'alto...';
  }
  cambiaramarillo(){
    this.color = 'yellow';
    this.mensaje = 'prepararse...';
  }
  cambiarverde(){
    this.color = 'green';
    this.mensaje = 'avance...';
  }
}
