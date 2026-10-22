import { Component } from '@angular/core';

import { HeroComponent } from './sections/hero/hero.component';
import { QuienesSomosComponent } from './sections/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './sections/servicios/servicios.component';
import { BandaObraComponent } from './sections/banda-obra/banda-obra.component';
import { ComoTrabajamosComponent } from './sections/como-trabajamos/como-trabajamos.component';
import { ProyectosPreviewComponent } from './sections/proyectos-preview/proyectos-preview.component';
import { FaqComponent } from './sections/faq/faq.component';
import { ContactoComponent } from './sections/contacto/contacto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    BandaObraComponent,
    ComoTrabajamosComponent,
    ProyectosPreviewComponent,
    FaqComponent,
    ContactoComponent,
  ],
  template: `
    <app-hero />
    <app-quienes-somos />
    <app-servicios />
    <app-banda-obra />
    <app-como-trabajamos />
    <app-proyectos-preview />
    <app-faq />
    <app-contacto />
  `,
})
export class HomeComponent {}
