import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css',
})
export class QuienesSomosComponent {
  // La imagen se muestra directamente. Solo si falla la carga (404, archivo
  // dañado, etc.) se reemplaza por el espacio reservado.
  readonly rutaImagen = 'assets/images/equipo/quienes-somos.jpeg';
  readonly imagenRota = signal(false);

  imagenFallo(): void {
    this.imagenRota.set(true);
  }
}
