import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { SERVICIOS } from '../content';

interface DatosFormulario {
  nombre: string;
  telefono: string;
  correo: string;
  servicio: string;
  mensaje: string;
}

type EstadoEnvio = 'inicial' | 'enviando' | 'exito' | 'error' | 'sin-backend';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  private readonly http = inject(HttpClient);

  readonly servicios = SERVICIOS;
  readonly estado = signal<EstadoEnvio>('inicial');

  datos: DatosFormulario = {
    nombre: '',
    telefono: '',
    correo: '',
    servicio: this.servicios[0]?.id ?? '',
    mensaje: '',
  };

  enviar(): void {
    // Mientras el backend de Python (FastAPI) no esté desplegado, no hay a
    // dónde enviar el formulario. Se evita simular un envío exitoso falso.
    if (!environment.apiUrl) {
      this.estado.set('sin-backend');
      return;
    }

    this.estado.set('enviando');
    this.http.post(`${environment.apiUrl}/contacto`, this.datos).subscribe({
      next: () => {
        this.estado.set('exito');
        this.datos = { nombre: '', telefono: '', correo: '', servicio: this.servicios[0]?.id ?? '', mensaje: '' };
      },
      error: () => this.estado.set('error'),
    });
  }
}
