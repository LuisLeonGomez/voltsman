import { Component } from '@angular/core';

import { EMPRESA, linkWhatsapp } from '../../../../shared/content';
import { WhatsappButtonComponent } from '../../../../shared/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-banda-obra',
  standalone: true,
  imports: [WhatsappButtonComponent],
  templateUrl: './banda-obra.component.html',
  styleUrl: './banda-obra.component.css',
})
export class BandaObraComponent {
  readonly empresa = EMPRESA;
  readonly linkWhatsapp = linkWhatsapp;
}
