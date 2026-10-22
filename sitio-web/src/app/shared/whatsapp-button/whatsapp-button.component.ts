import { Component, Input } from '@angular/core';

import { linkWhatsapp } from '../content';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  template: `
    <a class="whatsapp-btn" [href]="link" target="_blank" rel="noopener">
      <ng-content>Escríbenos por WhatsApp</ng-content>
    </a>
  `,
  styleUrl: './whatsapp-button.component.css',
})
export class WhatsappButtonComponent {
  @Input() mensaje = '';

  get link(): string {
    return linkWhatsapp(this.mensaje);
  }
}
