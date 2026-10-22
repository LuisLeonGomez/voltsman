import { Component, signal } from '@angular/core';

import { SERVICIOS } from '../../../../shared/content';

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent {
  readonly servicios = SERVICIOS;

  // Tarjetas abiertas por toque (móvil) o teclado; en escritorio además
  // se abren al acercar el mouse (puro CSS).
  readonly abiertas = signal<ReadonlySet<string>>(new Set());

  // Igual que en quienes-somos: mientras la foto no exista en
  // src/assets/images/servicios/<id>.jpeg se muestra el espacio reservado.
  readonly falladas = signal<ReadonlySet<string>>(new Set());

  alternar(id: string): void {
    this.abiertas.update((actuales) => {
      const siguientes = new Set(actuales);
      if (siguientes.has(id)) {
        siguientes.delete(id);
      } else {
        siguientes.add(id);
      }
      return siguientes;
    });
  }

  marcarFalla(id: string): void {
    this.falladas.update((actuales) => new Set(actuales).add(id));
  }
}
