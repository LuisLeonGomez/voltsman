import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css',
})
export class QuienesSomosComponent {
  // Igual que en servicios: si la imagen no existe aún se muestra el espacio
  // reservado. La imagen se dibuja SIEMPRE debajo del recuadro y aparece con
  // transición al terminar de cargar (sin depender del orden de eventos).
  readonly rutaImagen = 'assets/images/equipo/quienes-somos.jpeg';
  readonly imagenLista = signal(false);
  readonly imagenRota = signal(false);

  imagenOk(): void {
    this.imagenLista.set(true);
    this.imagenRota.set(false);
  }

  imagenFallo(): void {
    this.imagenRota.set(true);
  }
}
