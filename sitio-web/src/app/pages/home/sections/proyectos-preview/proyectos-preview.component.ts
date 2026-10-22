import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GALERIA } from '../../../../shared/gallery-data';

@Component({
  selector: 'app-proyectos-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyectos-preview.component.html',
  styleUrl: './proyectos-preview.component.css',
})
export class ProyectosPreviewComponent {
  // Una foto representativa de cada especialidad; cada tarjeta lleva a su
  // sección propia de la galería (/galeria/:categoriaId).
  readonly destacadas = GALERIA.map((categoria) => ({
    categoria,
    foto: categoria.fotos[0],
  }));
}
