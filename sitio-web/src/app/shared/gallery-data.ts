export interface FotoGaleria {
  src: string;
  alt: string;
}

export interface CategoriaGaleria {
  id: 'electricidad' | 'estructuras-metalicas' | 'gasfiteria-sanitarios';
  titulo: string;
  fotos: FotoGaleria[];
  video?: string;
}

// Rutas generadas a partir de la preselección en fotografias_reales/seleccion_web/.
// Pendiente de aprobación final del cliente (ver MANIFEST.md en esa carpeta).
export const GALERIA: CategoriaGaleria[] = [
  {
    id: 'electricidad',
    titulo: 'Instalaciones eléctricas',
    video: 'assets/images/electricidad/electricidad-video-01.mp4',
    fotos: Array.from({ length: 12 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      return {
        src: `assets/images/electricidad/electricidad-${n}.jpeg`,
        alt: `Trabajo de electricidad ${n}`,
      };
    }),
  },
  {
    id: 'estructuras-metalicas',
    titulo: 'Estructuras metálicas',
    fotos: Array.from({ length: 4 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      return {
        src: `assets/images/estructuras-metalicas/estructuras-${n}.jpeg`,
        alt: `Estructura metálica ${n}`,
      };
    }),
  },
  {
    id: 'gasfiteria-sanitarios',
    titulo: 'Gasfitería y proyectos sanitarios',
    fotos: Array.from({ length: 10 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0');
      return {
        src: `assets/images/gasfiteria-sanitarios/gasfiteria-${n}.jpeg`,
        alt: `Trabajo de gasfitería ${n}`,
      };
    }),
  },
];
