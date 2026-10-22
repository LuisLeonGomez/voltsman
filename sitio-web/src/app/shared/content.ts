/**
 * Contenido del sitio en un solo lugar.
 *
 * IMPORTANTE: gran parte de este texto es un BORRADOR pendiente de validación por el
 * cliente real de la empresa. Se usó como base el copy de referencia que trajo el
 * desarrollador (archivo "Empresa constructora.txt", generado por otra IA), ajustado
 * con los datos y servicios que el cliente SÍ confirmó. Antes de publicar el sitio,
 * cada sección marcada como "// TODO cliente" debe ser revisada y aprobada por el
 * dueño real de la empresa. No se deben dejar afirmaciones no confirmadas
 * (garantías, años de experiencia, certificaciones, testimonios) sin su validación.
 *
 * Ver CONTEXTO_PROYECTO.md para el detalle de qué está confirmado y qué no.
 */

export const EMPRESA = {
  // TODO cliente: nombre real de la empresa. Mientras tanto se usa un placeholder visible.
  nombre: 'Nombre de la empresa (pendiente)',
  eslogan: 'Electricidad, estructuras metálicas y proyectos sanitarios',
  whatsapp: '56963263751', // confirmado por el cliente
  whatsappDisplay: '+56 9 6326 3751',
  // TODO cliente: correo de contacto real, si existe.
  correo: '',
  cobertura: 'Todo Chile, de Arica a Punta Arenas',
};

export function linkWhatsapp(mensaje = ''): string {
  const base = `https://wa.me/${EMPRESA.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export interface Servicio {
  id: 'electricidad' | 'estructuras-metalicas' | 'gasfiteria-sanitarios';
  titulo: string;
  resumen: string;
  detalle: string[];
  pendiente?: boolean;
}

// Detalle técnico tal como lo entregó el cliente. No se agregan alcances ni
// explicaciones adicionales que él no haya confirmado.
export const SERVICIOS: Servicio[] = [
  {
    id: 'electricidad',
    titulo: 'Instalaciones eléctricas',
    resumen: 'Canalización, tableros, iluminación y mantención eléctrica.',
    detalle: [
      'Canalización y montaje eléctrico: CAG, EMT, PVC',
      'Instalaciones y tableros eléctricos: TDG, TDA, TDFYG, TCC, TCL',
      'Emergencias eléctricas',
      'Alumbrado, enchufes, tableros y recambio de cableado',
      'Trabajos domiciliarios, industriales, en galpones y locales comerciales',
    ],
  },
  {
    id: 'estructuras-metalicas',
    titulo: 'Estructuras metálicas',
    resumen: 'Fabricación y montaje de estructuras de acero.',
    // TODO cliente: aún no entregó el detalle técnico de esta especialidad
    // (equivalente al de electricidad y gasfitería). No inventar alcances.
    detalle: [],
    pendiente: true,
  },
  {
    id: 'gasfiteria-sanitarios',
    titulo: 'Gasfitería y proyectos sanitarios',
    resumen: 'Redes de agua, gas y sistemas sanitarios.',
    detalle: ['Redes de PPR, cobre, gas y agua'],
  },
];

export interface PasoTrabajo {
  numero: string;
  titulo: string;
  // TODO cliente: estos pasos vienen del copy de referencia (.txt de otra IA) y
  // describen un flujo típico del rubro, pero no han sido confirmados como el
  // proceso real de esta empresa. Validar o reemplazar antes de publicar.
  descripcion: string;
}

export const COMO_TRABAJAMOS: PasoTrabajo[] = [
  {
    numero: '01',
    titulo: 'Visita y cotización',
    descripcion: 'Revisamos el lugar y el estado actual. Entregamos una cotización detallada por partidas, con plazos.',
  },
  {
    numero: '02',
    titulo: 'Planificación y permisos',
    descripcion: 'Definimos materiales, coordinamos las intervenciones y gestionamos los permisos y declaraciones que exige la normativa.',
  },
  {
    numero: '03',
    titulo: 'Ejecución en obra',
    descripcion: 'Un encargado asignado coordina al equipo, informa el avance y cuida el recinto durante los trabajos.',
  },
  {
    numero: '04',
    titulo: 'Entrega y pruebas',
    descripcion: 'Probamos todo en conjunto, corregimos lo que aparezca y entregamos con las pruebas correspondientes.',
  },
];

export interface PreguntaFrecuente {
  pregunta: string;
  // TODO cliente: respuestas en borrador, deben validarse con información real.
  respuesta: string;
}

export const FAQ: PreguntaFrecuente[] = [
  {
    pregunta: '¿Atienden obras pequeñas o solo proyectos grandes?',
    respuesta: 'Escríbenos por WhatsApp contándonos tu proyecto y te confirmamos si podemos tomarlo.',
  },
  {
    pregunta: '¿Cuánto demora una cotización?',
    respuesta: 'Depende del proyecto. Te contactamos a la brevedad después de recibir tu solicitud.',
  },
  {
    pregunta: '¿Se hacen cargo de los permisos y la normativa?',
    respuesta: 'Gestionamos los permisos y declaraciones que exige la normativa para cada obra.',
  },
  {
    pregunta: '¿Qué pasa si algo falla después de la entrega?',
    respuesta: 'Escríbenos por WhatsApp y revisamos tu caso: te contamos cómo lo resolvemos.',
  },
  {
    pregunta: '¿En qué zonas trabajan?',
    respuesta: EMPRESA.cobertura + '.',
  },
];
