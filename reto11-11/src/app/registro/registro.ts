import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {
  nombre = '';
  programa = '';
  edad = 0;
  mensaje = '';
  estudiantes:{id: number; nombre: string; programa: string; edad: number} [] = [];

  siguiente = 1;
  registrar(){ 
    if (!this.nombre.trim() || !this.programa.trim() || this.edad <= 0 || !Number.isInteger(this.edad)){
      this.mensaje = 'Complete los campos...';
      return;
    }
    this.estudiantes.push({
      id: this.siguiente++,
      nombre: this.nombre,
      programa: this.programa,
      edad: this.edad
    });
    this.nombre= ''
    this.programa = ''
    this.edad = 0
    this.mensaje = 'Estudiante registrado...';
  }
}
