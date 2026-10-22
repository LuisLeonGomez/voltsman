import { Component } from '@angular/core';

import { EMPRESA, linkWhatsapp } from '../../../../shared/content';
import { WhatsappButtonComponent } from '../../../../shared/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [WhatsappButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly empresa = EMPRESA;
  readonly linkWhatsapp = linkWhatsapp;
}
