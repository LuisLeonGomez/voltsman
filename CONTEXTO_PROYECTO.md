# Contexto del proyecto: sitio web para microempresa de construcción

Este documento resume las decisiones y preferencias conversadas para que un agente de VS Code pueda continuar el trabajo sin pedir nuevamente el contexto.

## 1. Objetivo

Crear un sitio web sencillo, atractivo y funcional para una pequeña microempresa de construcción en Chile que busca dar a conocer sus servicios y captar clientes.

## 2. Perfil del desarrollador

- Tiene experiencia en desarrollo de software y conocimientos de Angular.
- Es su primera experiencia publicando un sitio de estas características y conectando dominio, hosting y despliegue automático.
- Trabajará desde Visual Studio Code y quiere mantener el código y su historial en GitHub.
- Necesita explicaciones claras y prácticas, sin asumir experiencia previa en hosting o DNS.

## 3. Prioridades y restricciones

- Mantener el costo para el cliente lo más bajo posible.
- Priorizar una solución simple de mantener.
- Evitar servidores administrados manualmente, bases de datos y backend salvo que una necesidad real los justifique. Excepción acordada: un backend mínimo en Python solo para enviar el formulario de contacto por correo (ver sección 4, "Backend para el formulario de contacto"); el desarrollador es backend Python y lo construye y mantiene él mismo.
- No es obligatorio usar WordPress: se acordó continuar con Angular como tecnología preferida.
- No agregar funcionalidades ni dependencias innecesarias.

## 4. Arquitectura propuesta

- Frontend: Angular.
- Publicación: compilar la aplicación y alojar sus archivos estáticos.
- Repositorio: GitHub.
- Hosting recomendado durante la conversación: Cloudflare Pages, comenzando con su plan gratuito, sujeto a sus condiciones y límites vigentes.
- Dominio deseado: un dominio .cl registrado y renovado en NIC Chile: https://www.nic.cl/.
- No se ha registrado un dominio ni configurado el hosting como parte de esta conversación.
- No hay nombre de empresa, repositorio o dominio definitivo confirmado.

### Backend para el formulario de contacto

El desarrollador es backend especializado en Python (y PySpark/AWS en su trabajo habitual, pero este proyecto se mantiene fuera de AWS). Se acordó agregar un backend ligero solo para el formulario de contacto:

- El formulario no puede enviar un WhatsApp de forma 100% automática sin intervención de la persona que completa el formulario: eso requeriría la API oficial de WhatsApp Business (Meta), que tiene costo y proceso de aprobación, fuera del alcance de este proyecto por ahora.
- En su lugar, el formulario envía un correo automático con los datos ingresados. Esto sí puede implementarse gratis.
- Además del formulario, se mantiene un botón directo de WhatsApp (enlace `wa.me/56963263751`) para contacto inmediato, sin backend de por medio.
- Backend propuesto: servicio en Python (FastAPI) que recibe los datos del formulario y envía el correo, usando SMTP o un proveedor de email con capa gratuita (por ejemplo Resend o Brevo; no verificado aún con precios/condiciones vigentes).
- Este backend necesita un hosting propio, distinto de Cloudflare Pages (que solo sirve archivos estáticos). Opciones a evaluar, ambas con capa gratuita y sin AWS: Render o Fly.io. No se ha elegido una todavía.
- Esto introduce un componente de backend en lo que originalmente se planteó como un sitio 100% estático; se acepta porque el desarrollador puede construirlo y mantenerlo él mismo, y porque el costo esperado sigue siendo $0 (salvo el dominio).

El dominio y el hosting son servicios diferentes. El dominio proporciona la dirección del sitio; el hosting publica sus archivos. Se pueden contratar por separado y conectar mediante DNS.

No es necesario comprar el dominio para comenzar: se puede desarrollar localmente y, posteriormente, probar el despliegue con la dirección que proporcione el hosting.

## 5. Flujo de desarrollo y publicación deseado

1. Desarrollar y probar Angular en VS Code, en el equipo local.
2. Guardar cambios mediante commits y subirlos a una rama de desarrollo en GitHub.
3. Revisar los cambios antes de integrarlos a la rama de producción.
4. Integrar la rama de desarrollo a la rama principal.
5. Configurar Cloudflare Pages para que los cambios en la rama principal desencadenen automáticamente la compilación y publicación.
6. Si la compilación y el despliegue terminan correctamente, la nueva versión quedará disponible en el sitio.

Los nombres de ramas no están definidos: se mencionaron dev o desarrollo, y main o master como ejemplos. Confirmar los nombres reales del repositorio antes de configurar el despliegue.

Comandos mencionados:

- `ng serve`: desarrollo y pruebas locales.
- `ng build`: compilación de la aplicación.

Antes de configurar el hosting, revisar la versión y configuración reales de Angular, el comando de compilación y el directorio de salida. No asumir una ruta de salida genérica.

### Aclaración sobre vistas previas

Cloudflare Pages puede generar despliegues de vista previa para ramas secundarias si se configura para ello. No asumir que esos enlaces son privados: la privacidad requiere configurar los controles de acceso correspondientes.

## 6. Orden de trabajo acordado

La prioridad actual es construir la página y definir su apariencia y contenido antes de profundizar en la configuración del dominio y del hosting.

- Definir contenido y estructura.
- Construir y probar el sitio localmente.
- Mantener el proyecto versionado en GitHub desde el comienzo.
- Después, configurar y probar el despliegue automático.
- Finalmente, conectar el dominio definitivo cuando corresponda.

No se ha garantizado un tiempo específico para compilar, desplegar o configurar la publicación.

## 7. Estructura sugerida, pendiente de aprobación

Se propuso una landing page como punto de partida, con una sección adicional de galería, no como requisito definitivo:

- Cabecera: nombre de la empresa (pendiente), espacio reservado para el logo (pendiente), descripción breve y llamada a contactar.
- Servicios: descripción de los trabajos que realmente realiza la empresa, con el detalle técnico real entregado por el cliente (ver abajo).
- Cómo trabajamos / proyectos: contenido a definir con información verificable del cliente; se descartó usar los pasos y ejemplos del `.txt` de referencia porque no son reales.
- Galería de fotos: sección o pestaña separada de la landing, con las fotografías reales organizadas por especialidad (electricidad, estructuras metálicas, gasfitería y proyectos sanitarios). El desarrollador preseleccionará las mejores fotos de `fotografias_reales/` como propuesta; el cliente da el visto bueno final.
- Contacto: botón directo de WhatsApp (`wa.me/56963263751`) y formulario que envía un correo automático con los datos ingresados (ver sección 4).

No inventar testimonios, garantías, años de experiencia, certificaciones ni promesas comerciales. Los ejemplos comentados en el `.txt` de referencia no representan capacidades confirmadas de la empresa y no deben usarse como contenido final.

### Servicios reales confirmados por el cliente

**Electricidad**
- Canalización y montaje eléctrico: CAG, EMT, PVC.
- Instalaciones y tableros eléctricos: TDG, TDA, TDFYG, TCC, TCL.
- Emergencias eléctricas.
- Alumbrado, enchufes, tableros, recambio de cableado.
- Trabajos domiciliarios, industriales, en galpones y locales comerciales.

**Gasfitería y proyectos sanitarios**
- Redes de PPR, cobre, gas y agua.

**Estructuras metálicas**
- Pendiente: el cliente aún no detalló especificaciones técnicas propias para esta especialidad. Hasta que las confirme, no se agrega contenido equivalente al de electricidad y gasfitería; las fotos reales ya disponibles (galpones, mezzaninas, escalas) pueden usarse en la galería, pero el texto de servicios debe esperar confirmación.

Los términos técnicos (CAG, EMT, PVC, TDG, TDA, TDFYG, TCC, TCL, PPR) se muestran tal como los usa el cliente, sin agregar explicaciones o alcances que él no haya confirmado.

### Formulario de contacto

Decidido: sí se incluye un formulario. Envía los datos ingresados por correo electrónico de forma automática mediante un backend en Python (ver sección 4). No reemplaza el botón directo de WhatsApp, que sigue disponible para contacto inmediato.

## 8. Información pendiente

Ya confirmado (no pedir de nuevo):
- WhatsApp real: +56 9 6326 3751.
- Zona de cobertura: todo Chile, de Arica a Punta Arenas.
- Servicios técnicos reales de electricidad y de gasfitería/sanitarios (ver sección 7).
- Fotografías reales disponibles, organizadas por especialidad en `fotografias_reales/`.

Pendiente real:
- Nombre de la empresa (se deja placeholder y espacio reservado para el logo).
- Logo, colores y estilo visual.
- Detalle técnico real de estructuras metálicas (el cliente no lo ha entregado aún).
- Correo de contacto real (si existe uno, o si todo el contacto será solo por WhatsApp/formulario).
- Permisos de uso confirmados sobre las fotografías.
- Si el dueño necesita editar textos y fotos por su cuenta o si el desarrollador se encargará de las actualizaciones.
- Estructura definitiva: landing page u otras páginas adicionales, además de la galería ya acordada.
- Estado del entorno local y versión de Angular.
- Existencia del repositorio y nombres reales de las ramas.
- Dominio disponible y precio vigente de registro y renovación.
- Elección final de proveedor de email (SMTP propio, Resend o Brevo) y de hosting del backend (Render o Fly.io).

## 9. Costos y verificaciones

- La preferencia es comenzar con hosting gratuito y pagar únicamente el dominio si el alcance lo permite.
- No se verificaron en este documento tarifas actuales ni condiciones vigentes de los proveedores.
- No tomar los precios aproximados mencionados previamente como una cotización vigente.
- Verificar límites y condiciones de uso comercial antes de contratar o elegir definitivamente un plan.
- No se necesita contratar un hosting tradicional pagado solo para registrar un dominio .cl.

## 10. Instrucciones para el agente de VS Code

- Usar este archivo como contexto, no como evidencia de que ya exista código o infraestructura.
- Antes de modificar el proyecto, inspeccionar los archivos existentes y su configuración real.
- No inicializar otro proyecto ni sobrescribir archivos sin comprobar qué existe.
- Respetar Angular y la preferencia por una arquitectura estática y económica.
- Resolver el trabajo en pasos pequeños y explicar las decisiones importantes.
- Solicitar los datos faltantes cuando sean necesarios; no inventarlos.
- No introducir un CMS, backend, base de datos o servicios de pago sin justificarlo y consultarlo.
- Leer este documento aporta contexto al agente, pero no sincroniza automáticamente el historial del chat.

## 11. ESTADO ACTUAL DEL TRABAJO — leer esto primero (actualizado al 17-oct-2026)

Este documento es el punto de reanudación para un nuevo chat. Resume exactamente dónde quedó el trabajo y qué falta.

### Lo que YA está hecho

1. **Idea y decisiones refinadas** (secciones 1-9 de este documento, ya validadas con el desarrollador).
2. **Preselección de fotos** hecha y aprobada su organización: carpeta `fotografias_reales/seleccion_web/` con `MANIFEST.md` (traza foto renombrada → original). Subcarpetas por especialidad: `electricidad/` (12 fotos + 1 video), `gasfiteria-sanitarios/` (10), `estructuras-metalicas/` (4). Los originales de WhatsApp siguen intactos en sus carpetas de origen.
3. **Esqueleto del proyecto Angular iniciado a mano** (porque Node/npm NO están instalados en este equipo, no se pudo usar `ng new`): carpeta `sitio-web/`. Es Angular 18, standalone components, sin backend, listo para `npm install && ng serve` cuando se instale Node. Estructura ya creada y con contenido:
   - Config base: `package.json`, `angular.json`, `tsconfig.json`, `tsconfig.app.json`, `src/index.html`, `src/main.ts`, `src/app/app.config.ts` (router + HttpClient), `src/app/app.routes.ts` (ruta `/` home, `/galeria`).
   - `src/app/shared/content.ts`: TODO el texto del sitio centralizado aquí (nombre placeholder, WhatsApp real +56963263751, servicios reales confirmados, pasos "cómo trabajamos" y FAQ en borrador marcados con `// TODO cliente`).
   - `src/app/shared/gallery-data.ts`: rutas de las fotos de la galería por especialidad.
   - `src/app/shared/whatsapp-button/`: botón reutilizable con `wa.me`.
   - `src/app/shared/contact-form/`: formulario standalone, apunta a `environment.apiUrl`; mientras esté vacío muestra "sin backend" y NO simula envío (no hay backend todavía).
   - `src/environments/`: `apiUrl` vacío en dev y prod (pendiente backend FastAPI en Render/Fly.io).
   - `src/app/core/header/` y `src/app/core/footer/`: completos, con placeholder de logo y menú responsive.
   - `src/app/pages/home/sections/hero/` y `.../quienes-somos/`: completos (ts+html+css).
   - Fotos ya copiadas dentro de `sitio-web/src/assets/images/{electricidad,estructuras-metalicas,gasfiteria-sanitarios}/` (26 fotos + 1 video).

### Lo que FALTA (orden sugerido para retomar)

1. **Terminar las secciones de home que faltan** (crear carpeta + ts + html + css de cada una, siguiendo el mismo patrón de `hero`):
   - `sections/servicios/` — consumir `SERVICIOS` de `shared/content.ts` (los 3 servicios, con `estructuras-metalicas` mostrando "detalle pendiente" porque el cliente no lo ha dado).
   - `sections/como-trabajamos/` — consumir `COMO_TRABAJAMOS`.
   - `sections/proyectos-preview/` — 3-4 fotos destacadas + link a `/galeria`.
   - `sections/faq/` — consumir `FAQ`.
   - `sections/contacto/` — consumir `ContactFormComponent` + botón WhatsApp + datos de `EMPRESA`.
2. **Crear `src/app/pages/home/home.component.ts`** (aún NO existe) que importe y ordene las secciones, y **`src/app/pages/galeria/galeria.component.ts`** (tampoco existe) que consuma `GALERIA` de `shared/gallery-data.ts` con filtro por especialidad. Las rutas ya apuntan a estos archivos, así que el proyecto NO compila hasta crearlos.
3. **Crear `public/favicon.ico`** (o quitar el link de `index.html`).
4. **Instalar Node.js (LTS)** en el equipo, luego `npm install` dentro de `sitio-web/` y verificar `npm start` y `npm run build` (esto nunca se ha ejecutado: el esqueleto está escrito a mano y SIN VERIFICAR por compilador).
5. **Copiar el resto del texto borrador** del archivo de referencia `Empresa constructora.txt` (raíz del proyecto) a `shared/content.ts` donde falte, marcando siempre con `// TODO cliente` lo que sea afirmación no confirmada (garantías, permisos, años de experiencia, etc.). NO copiar datos falsos de contacto (teléfono/correo de ejemplo del .txt); los reales ya están en `EMPRESA`.
6. **Pendientes del cliente** (sección 8): nombre y logo, detalle técnico de estructuras metálicas, correo de contacto, aprobación de la preselección de fotos y del texto borrador.
7. Después: GitHub (ramas dev/main), despliegue Cloudflare Pages, backend FastAPI para el formulario (Render/Fly.io), dominio .cl.

### Advertencias para el nuevo chat

- Node/npm no están instalados: cualquier verificación de compilación requerirá instalarlos primero.
- `content.ts` y las secciones ya creadas contienen texto BORRADOR de otra IA (`.txt` de referencia): tratarlo como reemplazable, no como verdad confirmada.
- No borrar ni reorganizar `fotografias_reales/`: los originales son la única copia; `seleccion_web/` es solo una copia preseleccionada.
- Estilos: CSS plano por componente, paleta azul marino (#0f172a) + acento verde WhatsApp (#22c55e), sin frameworks de UI.
