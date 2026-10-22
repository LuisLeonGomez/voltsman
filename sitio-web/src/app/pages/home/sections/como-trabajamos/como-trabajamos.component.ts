import { Component } from '@angular/core';

import { COMO_TRABAJAMOS } from '../../../../shared/content';

@Component({
  selector: 'app-como-trabajamos',
  standalone: true,
  templateUrl: './como-trabajamos.component.html',
  styleUrl: './como-trabajamos.component.css',
})
export class ComoTrabajamosComponent {
  readonly pasos = COMO_TRABAJAMOS;
}
