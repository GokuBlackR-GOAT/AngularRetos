import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  productos = [
    {id: 1, nombre: 'computador', categoria: 'tecnologico', precio: 1800000},
    {id: 2, nombre: 'mouse', categoria: 'accesorios', precio: 50000},
    {id: 3, nombre: 'teclado', categoria: 'accesorios', precio: 100000},
    {id: 4, nombre: 'monitor', categoria: 'tecnologico', precio: 250000},
    {id: 5, nombre: 'audifonos', categoria: 'accesorios', precio: 30000}
  ]
}
