import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-control',
  styleUrl: './control.css',
  templateUrl: './control.html',
})
export class Control {
  nombre = '';
  cantidad= 0;
  precio = 0;
  mensaje = '';

  productos: {id: number; nombre: string; cantidad: number; precio: number}[] = [];
  
  next = 1;
  agregar(){
    if(!this.nombre.trim() || this.cantidad < 0 || this.precio < 0){
      this.mensaje = 'Ingrese productos...';
      return;
    }
    this.productos.push({
      id: this.next++,
      nombre: this.nombre,
      cantidad: this.cantidad,
      precio: this.precio
    });
    this.nombre = '';
    this.cantidad = 0;
    this.precio = 0;
    this.mensaje = 'Se ha registrado el producto...';
  }
  eliminar(id: number){
    this.productos = this.productos.filter(p => p.id !==id);
  }
}
