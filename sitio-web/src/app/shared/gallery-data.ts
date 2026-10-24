export interface FotoGaleria {
  src: string;
  alt: string;
}

export interface CategoriaGaleria {
  id: 'electricidad' | 'estructuras-metalicas' | 'gasfiteria-sanitarios' | 'tabiqueria';
  titulo: string;
  fotos: FotoGaleria[];
  video?: string;
}

function generarFotos(carpeta: string, prefijo: string, cantidad: number, etiqueta: string): FotoGaleria[] {
  return Array.from({ length: cantidad }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return {
      src: `assets/images/${carpeta}/${prefijo}-${n}.jpeg`,
      alt: `${etiqueta} ${n}`,
    };
  });
}

// Se muestran TODAS las fotos que envió el cliente por especialidad (a su
// pedido explícito), sin preselección. Rutas generadas desde
// fotografias_reales/seleccion_web/ (ver MANIFEST.md en esa carpeta).
export const GALERIA: CategoriaGaleria[] = [
  {
    id: 'electricidad',
    titulo: 'Instalaciones eléctricas',
    video: 'assets/images/electricidad/electricidad-video-01.mp4',
    fotos: generarFotos('electricidad', 'electricidad', 29, 'Trabajo de electricidad'),
  },
  {
    id: 'estructuras-metalicas',
    titulo: 'Estructuras metálicas',
    fotos: generarFotos('estructuras-metalicas', 'estructuras', 11, 'Estructura metálica'),
  },
  {
    id: 'gasfiteria-sanitarios',
    titulo: 'Gasfitería y proyectos sanitarios',
    fotos: generarFotos('gasfiteria-sanitarios', 'gasfiteria', 22, 'Trabajo de gasfitería'),
  },
  {
    id: 'tabiqueria',
    titulo: 'Tabiquería',
    fotos: generarFotos('tabiqueria', 'tabiqueria', 6, 'Trabajo de tabiquería'),
  },
];
