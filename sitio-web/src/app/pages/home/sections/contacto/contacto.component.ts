import { Component } from '@angular/core';

import { EMPRESA, linkWhatsapp } from '../../../../shared/content';
import { ContactFormComponent } from '../../../../shared/contact-form/contact-form.component';
import { WhatsappButtonComponent } from '../../../../shared/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ContactFormComponent, WhatsappButtonComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  readonly empresa = EMPRESA;
  readonly linkWhatsapp = linkWhatsapp;
}
