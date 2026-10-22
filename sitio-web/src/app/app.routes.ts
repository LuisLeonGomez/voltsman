import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Empresa constructora | Electricidad, estructuras metálicas y gasfitería',
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/galeria/galeria.component').then((m) => m.GaleriaComponent),
    title: 'Galería de obras | Empresa constructora',
  },
  {
    path: 'galeria/:categoriaId',
    loadComponent: () => import('./pages/galeria/galeria.component').then((m) => m.GaleriaComponent),
    title: 'Galería de obras | Empresa constructora',
  },
  { path: '**', redirectTo: '' },
];
