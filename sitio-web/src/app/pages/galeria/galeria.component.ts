import { Component, Input, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { GALERIA } from '../../shared/gallery-data';

type IdCategoria = (typeof GALERIA)[number]['id'];
type FiltroGaleria = 'todas' | IdCategoria;

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
})
export class GaleriaComponent {
  readonly categorias = GALERIA;
  readonly filtro = signal<FiltroGaleria>('todas');
  readonly visibles = computed(() => {
    const filtro = this.filtro();
    return filtro === 'todas' ? this.categorias : this.categorias.filter((c) => c.id === filtro);
  });

  // Viene de /galeria/:categoriaId (withComponentInputBinding).
  @Input()
  set categoriaId(valor: string | undefined) {
    const valido = GALERIA.some((c) => c.id === valor);
    this.filtro.set(valido ? (valor as IdCategoria) : 'todas');
  }
}
