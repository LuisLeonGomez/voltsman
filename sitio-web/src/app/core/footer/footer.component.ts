import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EMPRESA, linkWhatsapp } from '../../shared/content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly empresa = EMPRESA;
  readonly anio = new Date().getFullYear();
  readonly linkWhatsapp = linkWhatsapp;
}
