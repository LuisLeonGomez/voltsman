import { Component } from '@angular/core';

import { FAQ } from '../../../../shared/content';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  readonly preguntas = FAQ;
}
