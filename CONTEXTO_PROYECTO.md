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
- Reseñas de clientes (2 líneas) para una eventual sección de testimonios.
- Fotos del equipo y de servicios (los espacios ya están reservados en la página: ver sección 11).
- Permisos de uso confirmados sobre las fotografías.
- Si el dueño necesita editar textos y fotos por su cuenta o si el desarrollador se encargará de las actualizaciones.
- Estructura definitiva: landing page u otras páginas adicionales, además de la galería ya acordada.
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

## 11. ESTADO ACTUAL DEL TRABAJO — leer esto primero (actualizado al 23-oct-2026)

Este documento es el punto de reanudación para un nuevo chat. Resume exactamente dónde quedó el trabajo y qué falta.

**Nota:** la sección 11.ter (más abajo) es la más reciente (24-oct: CI/CD completo con GitHub Actions + deploy nativo de Cloudflare, limpieza del repo, protección de `main`); 11.bis tiene el detalle del 17 al 23 de octubre (nombre real, certificación SEC, corrección de un bug real de visibilidad de fotos, banco de fotos decorativas y estado de las fotos de servicios). Estas secciones 11 y 11.bis originales se dejan tal cual como referencia histórica; para el estado más reciente, ir directo a 11.ter.

### Lo que YA está hecho

1. **Idea y decisiones refinadas** (secciones 1-9 de este documento, ya validadas con el desarrollador).
2. **Preselección de fotos** hecha y aprobada su organización: carpeta `fotografias_reales/seleccion_web/` con `MANIFEST.md` (traza foto renombrada → original). Subcarpetas por especialidad: `electricidad/` (12 fotos + 1 video), `gasfiteria-sanitarios/` (10), `estructuras-metalicas/` (4). Los originales de WhatsApp siguen intactos.
3. **Proyecto Angular completo y VERIFICADO**: el esqueleto escrito a mano quedó terminado y compila sin errores. Al 17-oct-2026: `npm install` + `npm run build` exitosos (bundle inicial 286 kB, 80 kB transferibles; home y galería como chunks lazy) y `npm start` verificado con HTTP 200 en todas las rutas.
4. **Node.js v24.22.0 + npm 11.19.1 instalados** con winget (17-oct-2026, confirmado por el desarrollador). OJO: la shell POSIX (BusyBox ash) NO ve `node` en PATH — usar PowerShell, o la ruta completa `"C:\Program Files\nodejs\npm.cmd"`.
5. **Home completa, con todas sus secciones** (cada una con ts+html+css, patrón standalone): `hero` (foto real de obra + `100svh` + animación de entrada), `quienes-somos` (2 columnas + espacio reservado para foto del equipo), `servicios` (tarjetas con foto, título abajo, y al hover/toque la imagen se corre hacia arriba y aparece el detalle), `banda-obra` (banda fotográfica con CTA a WhatsApp), `como-trabajamos`, `proyectos-preview` (3 tarjetas, una por especialidad, cada una enlaza a su página de galería), `faq` (5 preguntas con acordeón) y `contacto`.
6. **Galería dividida en tres rutas reales**: `/galeria` (vista general con las tres especialidades), `/galeria/electricidad`, `/galeria/estructuras-metalicas`, `/galeria/gasfiteria-sanitarios`. Las pestañas son enlaces (`routerLink` + `routerLinkActive`); una categoría inválida en la URL cae a la vista general. Requiere `withComponentInputBinding()` (ya agregado en `app.config.ts`).
7. **Diseño y móvil aplicados** (skills emil-design-eng, apple-design, mobile-native): tokens de diseño en `src/styles.css` (paleta navy #0f172a + verde #22c55e), tipografía con `clamp()`, header sticky translúcido con blur, hover solo con puntero fino (evita estados pegados en táctil), estados `:active` en botones, `prefers-reduced-motion`, inputs de 16px (evita auto-zoom de iOS), `viewport-fit=cover` + safe-area, sin flash gris al tocar, `scroll-padding-top` por el header sticky. `public/favicon.ico` generado con la paleta (python puro, sin Pillow). `tsconfig.json` con `"rootDir": "./src"` (corrige el error del IDE).
8. **Espacios reservados para fotos del cliente** (mientras no exista el archivo se muestra un recuadro punteado; al soltarlo, la foto aparece sola sin tocar código):
   - `src/assets/images/equipo/quienes-somos.jpeg` — foto del equipo u obra (sección Quiénes somos).
   - `src/assets/images/servicios/electricidad.jpeg`, `.../estructuras-metalicas.jpeg`, `.../gasfiteria-sanitarios.jpeg` — una por tarjeta de servicios.
9. **Texto**: FAQ completa en borrador (5 preguntas, 2 extraídas del `.txt` de referencia: permisos y post-entrega). Todo lo no confirmado lleva `// TODO cliente` en `shared/content.ts` y en las plantillas. NO se copiaron los datos de contacto falsos del `.txt`.

### Lo que FALTA (orden sugerido para retomar)

1. **Contenido real del cliente** — la tarea inmediata. Al desarrollador ya se le entregaron 8 preguntas para el cliente (marca y logo, contacto visible, años+equipo, detalle de estructuras metálicas, permisos/garantía, pasos reales de trabajo, reseñas y envío de fotos). Con las respuestas: redactar los textos finales, reemplazar los `// TODO cliente` de `shared/content.ts` y las plantillas, y recompilar.
2. **Fotos del cliente** (rutas exactas en el punto 8 de "YA está hecho") y aprobación final de la preselección (`fotografias_reales/seleccion_web/MANIFEST.md`).
3. **Sección de testimonios** — solo si el cliente entrega reseñas reales (pregunta 8). No inventar nunca.
4. **GitHub** — el repositorio AÚN NO existe: iniciar repo en `sitio-web/` (o en la raíz), primer commit, ramas dev/main, conectar con Cloudflare Pages. Directorio publicable del build: `dist/sitio-web-constructora/browser`.
5. **Backend FastAPI del formulario** (Render/Fly.io, proveedor de email por elegir) y luego llenar `apiUrl` en `src/environments/`.
6. **Dominio .cl** en NIC Chile al final.

### Advertencias para el nuevo chat

- El texto visible sigue siendo BORRADOR de otra IA (`.txt` de referencia): los `// TODO cliente` marcan lo que falta confirmar. No tratarlo como contenido final.
- No borrar ni reorganizar `fotografias_reales/`: los originales son la única copia; `seleccion_web/` es solo una copia preseleccionada.
- `ng serve` escucha en IPv6 (`http://localhost:4200`); si un curl falla contra `127.0.0.1`, probar `http://[::1]:4200`. Si el servidor no responde, relanzar `npm run start` en `sitio-web/`.
- Estilos: CSS plano por componente con tokens en `src/styles.css` (paleta azul marino #0f172a + acento verde #22c55e), sin frameworks de UI.
- El MCP de Magnific sugerido por el desarrollador es de Claude Code (otra herramienta, no conectable aquí) y genera imágenes con IA: NO usarlas como "obras reales" del cliente; solo como ambiente decorativo si trae una con licencia.

## 11.bis ESTADO ACTUAL DEL TRABAJO — actualizado al 23-oct-2026

### Lo que se avanzó desde el 17-oct

1. **Nombre real confirmado por el cliente: "Volstman"**. Ya actualizado en `shared/content.ts` (`EMPRESA.nombre`), se refleja automáticamente en header, hero, footer y todo el sitio. El repositorio en GitHub se llama `voltsman` (con "t", nota la diferencia de ortografía respecto al nombre comercial "Volstman"; no se ha unificado, no es bloqueante pero queda anotado).

2. **Certificación SEC confirmada y agregada**: el cliente es Técnico Electricista certificado por la Superintendencia de Electricidad y Combustibles (SEC). Se agregó:
   - Logo oficial de la SEC en `src/assets/images/sec-logo.jpg` (provisto por el cliente en `banco_fotos/sec.jpg`).
   - Texto de certificación en `EMPRESA.certificado` (`shared/content.ts`).
   - Bloque visible en el footer (`core/footer/`) con el logo y el texto, separado del resto por una línea divisoria.

3. **Bug real encontrado y corregido: la foto de "Quiénes somos" no se veía**. La causa NO era el archivo, el servidor ni la caché del navegador (todo eso se verificó correcto): era un bug de especificidad CSS. La regla `.quienes-somos__media img { opacity: 0; }` tenía más especificidad que `.quienes-somos__img--visible { opacity: 1; }`, así que la imagen quedaba invisible aunque cargara perfectamente. Se simplificó el patrón en `pages/home/sections/quienes-somos/`: ahora la imagen se muestra directamente con `<img [src]="rutaImagen">`, sin juego de opacidad ni eventos `(load)`; el recuadro punteado solo aparece si la carga realmente falla (`(error)`). El componente de `servicios` ya usaba el patrón correcto (sin el bug) y no necesitó cambios.

4. **Repositorio Git ya existe** (lo creó el desarrollador, no se hizo desde este chat): rama `dev` sobre rama principal `main`, remoto `https://github.com/LuisLeonGomez/voltsman`, con commits `adf860a` (Initial commit) y `f44e555` ("feat: primera version del sitio"). El punto 4 de la lista de pendientes del 17-oct ("GitHub no existe") queda resuelto; falta solo confirmar con el desarrollador el flujo de PRs dev→main y conectar Cloudflare Pages (sección 5 y 9 de este documento siguen pendientes).

5. **Banco de fotos decorativas (`banco_fotos/`, carpeta fuera de `sitio-web/`, con fotos de stock que el cliente consiguió)**: se usaron 3, comprimidas y copiadas a `src/assets/images/decorativas/` (de 10-15 MB bajaron a 130-234 KB cada una):
   - `hero-fondo.jpg` → fondo del título principal (hero).
   - `electricidad-detalle.jpg` → fondo de la banda de CTA ("banda-obra").
   - `planificacion.jpg` → foto nueva junto al título de "Cómo trabajamos".
   
   **Regla aplicada y que debe mantenerse**: estas fotos de banco son solo decorativas/ambientales (fondos, texturas). NUNCA deben presentarse como fotos de obras reales de la empresa — ese rol lo cumple exclusivamente `fotografias_reales/`, usada en la galería y en `proyectos-preview`. El resto de `banco_fotos/` (hay ~17 archivos, varios en formato `.avif`/`.webp`) sigue sin usar; estas fotos siguen sin trackear en git.

6. **Fotos de servicios (`src/assets/images/servicios/`): 2 de 3 ok, 1 con problema de formato**. El cliente ya colocó las tres:
   - `estructuras-metalicas.jpeg` y `gasfiteria-sanitarios.jpeg`: son JPEG reales y válidos (verificado por los bytes de cabecera del archivo), el servidor las sirve con HTTP 200 — deberían verse bien.
   - `electricidad.jpeg`: **el archivo no es un JPEG real**, es un AVIF (probablemente una de las fotos de `banco_fotos/*.avif`) al que solo le cambiaron la extensión a `.jpeg` sin convertir el contenido. El navegador puede no mostrarlo de forma confiable. No hay herramienta de conversión AVIF→JPEG disponible en este entorno (sin ImageMagick, sin soporte AVIF en Python/GDI+). **Pendiente: el cliente/desarrollador debe volver a exportar esa foto específica como JPEG real** (por ejemplo con la app Fotos de Windows, "Guardar como" eligiendo JPEG) y reemplazar el archivo.

### Estado de la build y el servidor

- `npm run build` compila sin errores con todos los cambios de esta sección (último build: bundle inicial ~287 kB / ~80 kB transferible).
- Hay un `ng serve` corriendo en segundo plano en `http://localhost:4200` (IPv6: `http://[::1]:4200`) para pruebas locales del desarrollador.
- Toda la verificación de este período se hizo por HTTP (status code, content-type, tamaño y cabecera de bytes de archivo) y por compilación exitosa; el agente NO tiene herramienta de navegador/captura de pantalla, por lo que la confirmación visual final siempre la debe dar el desarrollador recargando con Ctrl+F5.

### Pendientes (vigentes, no repetir lo ya resuelto arriba)

1. **Reemplazar `servicios/electricidad.jpeg` por un JPEG real** (ver punto 6 arriba). El archivo actual es un AVIF con extensión falsa; necesita ser exportado como JPEG verdadero desde la app Fotos de Windows o similar.

2. **Las 8 preguntas al cliente**: revisar cuáles ya se respondieron (nombre "Volstman" ✓, certificación SEC ✓; falta confirmar el resto) y actualizar `// TODO cliente` en `shared/content.ts` y las plantillas a medida que lleguen respuestas.

3. **Aprobación final de la preselección de fotos reales** (`fotografias_reales/seleccion_web/MANIFEST.md`).

4. **Confirmar y documentar el flujo real de ramas** (dev/main) y conectar Cloudflare Pages para despliegue automático.

5. **Backend FastAPI del formulario de contacto**: PAUSADO. Decisión pendiente: ¿repositorio separado (`voltsman-backend`) o monorepo (carpeta `backend/` dentro de `voltsman`)? Una vez decidido, crear la estructura y el código. Dominio .cl sigue sin registrar.

6. **Git**: los cambios de este chat (nombre, SEC, corrección de bug de foto, fotos decorativas) están en el working directory local. El desarrollador decide cuándo commitear. Nota: el repositorio ya tiene commits posteriores al 17-oct (c0edbbf, 7287bab, f71441f, f44e555, adf860a), lo que indica que hubo trabajo adicional no documentado en este chat — revisar el historial de commits en GitHub para sincronizar el contexto si es necesario.

## 11.ter ESTADO ACTUAL DEL TRABAJO — actualizado al 24-oct-2026

### Backend del formulario: EN PAUSA (decisión pendiente)

El desarrollador preguntó si el backend FastAPI del formulario debe ir en otro repositorio y otro workspace. Se le explicaron dos opciones (repo separado tipo `voltsman-backend`, o monorepo con carpeta `backend/` dentro de `voltsman`), sin inclinarse por ninguna. **Queda pausado hasta que el desarrollador decida**; no construir nada de esto sin que lo pida explícitamente.

### Cambio de criterio importante: mostrar TODAS las fotos, no una selección curada

El cliente pidió expresamente mostrar todas las fotos que ha enviado (fue mandando más con el tiempo, guardadas por el desarrollador fuera de `fotografias_reales/` y luego movidas ahí). Esto reemplaza el criterio anterior ("el desarrollador preselecciona las mejores, el cliente aprueba", sección 7 de este documento). Aplicado:

- `fotografias_reales/seleccion_web/` ya NO es una curación: es una copia 1:1 renombrada de absolutamente todas las fotos de cada carpeta de origen. Su `MANIFEST.md` se actualizó para reflejar esto.
- `sitio-web/src/assets/images/<categoria>/` se regeneró con el mismo criterio: **electricidad (29 fotos + 1 video), gasfitería-sanitarios (22 fotos), estructuras-metálicas (11 fotos)**. Si el cliente manda fotos nuevas más adelante, hay que repetir el proceso completo (copiar TODO de nuevo desde `fotografias_reales/<categoria>/`, no solo agregar las nuevas) para no dejar ninguna fuera.
- `shared/gallery-data.ts` se reescribió con una función `generarFotos()` para no repetir el patrón a mano por categoría.

### Categoría nueva: "Tabiquería"

El cliente pidió agregar esta especialidad. Como el código ya era genérico (ningún componente tenía las categorías hardcodeadas, solo leían los arrays `SERVICIOS`/`GALERIA`), agregarla fue solo cuestión de datos:

- `shared/content.ts`: nuevo `Servicio` con `id: 'tabiqueria'`, `detalle: []` y `pendiente: true` (el cliente aún no entregó el detalle técnico, igual que pasa con estructuras metálicas).
- `shared/gallery-data.ts`: nueva `CategoriaGaleria` con sus 6 fotos (`fotografias_reales/tabiqueria/`), ruta `/galeria/tabiqueria` funciona sola (las rutas en `app.routes.ts` son genéricas con `:categoriaId`).
- Las tarjetas de "Servicios" y "Proyectos" en la home muestran la nueva categoría automáticamente (son `@for` sobre los arrays).
- **Pendiente**: foto para la tarjeta de servicio en `src/assets/images/servicios/tabiqueria.jpeg` (mientras no exista, se ve el recuadro placeholder "Foto de Tabiquería", sin errores) y el detalle técnico real de este servicio.
- Textos genéricos ajustados: "Trabajos en nuestras tres especialidades" → "Trabajos en nuestras especialidades"; subtítulo de Servicios ahora menciona electricidad, estructuras metálicas, tabiquería y proyectos sanitarios; `<title>` de las rutas pasó de "Empresa constructora" a "Volstman".

### Limpieza de `fotografias_reales/estructuras metalicas/`

Esa carpeta tenía basura ajena al proyecto: un HTML guardado de **Relume.ai** (herramienta de diseño, visitada por error) y su carpeta `_files/` (~19 MB de JS/CSS/imágenes de esa página). El desarrollador la eliminó a mano. También existía una subcarpeta `WhatsApp Unknown 2026-10-16.../` con las fotos reales; tras la limpieza quedaron 11 fotos directas en `estructuras metalicas/`, ya usadas.

### Ubicación definitiva de las fotos fuente: `C:\Users\luisl\Downloads\fotos\`

Resuelto (24-oct-2026): el desarrollador creó `C:\Users\luisl\Downloads\fotos\`, FUERA del repositorio git (`proyecto construcciones enrique\`), y movió ahí todo lo que antes vivía en `fotografias_reales/` y `banco_fotos/`: las carpetas de origen por especialidad (`electricidad/`, `estructuras metalicas/`, `gasfiteria y proyectos sanitarios/`, `tabiqueria/`), el `banco_fotos/` de imágenes de stock, y la carpeta `seleccion_web/` (la copia renombrada 1:1 que sí se usa como fuente para copiar a `sitio-web/src/assets/images/`). La carpeta `fotografias_reales/` dentro del repo quedó vacía y se eliminó. El `.gitignore` ya no necesita reglas para estas carpetas porque physically no están dentro del repo. El `MANIFEST.md` de `seleccion_web/` se actualizó con las rutas nuevas.

Flujo a futuro cuando el cliente mande fotos nuevas: agregarlas en `Downloads/fotos/<categoria>/`, regenerar `Downloads/fotos/seleccion_web/<categoria>/` (renombrar y copiar TODO, no solo lo nuevo) y copiar ese resultado a `sitio-web/src/assets/images/<categoria>/` dentro del repo.

### Pendientes nuevos (sumar a los de la sección 11.bis)

1. Foto de tarjeta de servicio para Tabiquería (`servicios/tabiqueria.jpeg`).
2. Detalle técnico real de Tabiquería (y seguir pendiente el de Estructuras metálicas).
3. Confirmar con el cliente si las 11 fotos de estructuras metálicas (antes se usaban solo 4, ahora se muestran las 11 completas) son apropiadas para mostrar todas — por ejemplo, algunas eran "de obra general" donde el acero solo aparecía de fondo.
4. El desarrollador debe mover `fotografias_reales/` fuera del repo cuando pueda (ya no se subirá por accidente gracias al `.gitignore`, pero sigue físicamente dentro de la carpeta del repo hasta que la mueva).

## 11.ter ESTADO ACTUAL DEL TRABAJO — actualizado al 24-oct-2026 (CI/CD completo y funcionando)

Esta sección reemplaza como "estado vigente" a las anteriores. El punto 4 de pendientes del 17-oct (GitHub + despliegue automático) quedó **RESUELTO**. Detalle completo abajo.

### Infraestructura CI/CD implementada (todo verificado funcionando)

**Pipeline de calidad con GitHub Actions** (`.github/workflows/ci-cd.yml`):
- Un solo job `ci` que corre en cada push y PR a `main` y `dev`: checkout → Node 20 con caché de npm → `npm ci` → `npm run lint` → `npm run test:ci` → `npm run build` → sube el artefacto del build (7 días de retención).
- El job NO despliega: el deploy lo hace Cloudflare de forma nativa (ver abajo). Se intentó primero con `cloudflare/wrangler-action@v3` y se abandonó por problemas de versión de Wrangler y permisos del token.
- `working-directory: sitio-web` en el workflow: los comandos corren ahí dentro.

**Tests configurados por primera vez**:
- `sitio-web/karma.conf.js` (launcher `ChromeHeadlessCI` con `--no-sandbox --disable-gpu --disable-dev-shm-usage`), `tsconfig.spec.json`, y un smoke test en `app.component.spec.ts` (verifica que se renderiza el título). Todo pasa (1 test SUCCESS).
- `package.json`: script `test:ci` = `ng test --watch=false --browsers=ChromeHeadlessCI`.
- ESLint con `@angular-eslint` (generado con `ng add`), config en `sitio-web/eslint.config.js`, lint pasa.

**Deploy: Cloudflare Workers con static assets, conectado por Git** (NO GitHub Actions, NO Pages clásico):
- Cloudflare fusionó Pages en "Workers & Pages": el proyecto es un **Worker** llamado `voltsman` (no un proyecto Pages). URL de producción: `https://voltsman.luisleongomez98.workers.dev/`.
- `sitio-web/wrangler.jsonc` (en AMBAS ramas, debe ser idéntico): `{"name":"voltsman","compatibility_date":"2026-10-24","assets":{"directory":"./dist/sitio-web-constructora/browser","not_found_handling":"single-page-application"},"previews":{}}`. El bloque `"previews": {}` es obligatorio para que `wrangler preview` funcione (se descubrió por error en el preview de dev; ese fix está en `dev` y aún no se fusionó a `main` — pendiente).
- Conexión: botón "Connect to a repository" del propio Worker en Cloudflare. Production branch: `main`. Preview builds activados para el resto de ramas (`dev` genera preview deploy automático). Path: `/`.
- Commands configurados en el dashboard de Cloudflare (Settings → Build) — la regla es que CADA comando debe hacer `cd sitio-web &&` porque el "Path" global es la raíz del repo:
  - Build: `cd sitio-web && npm install && npm run build`
  - Deploy: `cd sitio-web && npx wrangler deploy`
  - Preview: `cd sitio-web && npx wrangler preview`
- Errores ya resueltos (para no repetir): "Missing entry-point" = Wrangler v3 no soporta config solo-assets (usar v4+); "Unknown argument: deploy." = punto final copiado de más en el comando; "Could not detect a directory containing static files" = wrangler no encuentra su config si se ejecuta desde la raíz (falta el `cd sitio-web &&`); "missing a previews block" = falta `"previews": {}` en wrangler.jsonc.
- El token/API se creó solo mediante la integración nativa de Cloudflare (permisos amplios correctos automáticamente). NUNCA pegar tokens en el chat (uno se pegó por accidente y fue rotado).

### Limpieza del repositorio

- El repo había commiteado por accidente `node_modules/`, `dist/`, `.angular/`, `.abacusai/` (36.581 archivos trackeados). Se limpió con `git rm -r --cached` → quedaron ~200 archivos. `.gitignore` actual (raíz) excluye: `node_modules/`, `sitio-web/dist/`, `sitio-web/.angular/`, `.abacusai/`, `banco_fotos/` (material de referencia, no se usa en código), `sitio-web/tmp/` (caché de wrangler), `.env`, logs.
- `log_error.txt` en la raíz es el scratch del desarrollador para pegar logs de Cloudflare: untracked, se sobreescribe cada vez. Siempre releerlo completo antes de diagnosticar; no reutilizar lecturas anteriores.

### Flujo de ramas (ya definido y en uso)

- `main` = producción (Cloudflare despliega lo que llega a `main`). `dev` = desarrollo (Cloudflare genera preview deploy). Ambas están **idénticas** al 24-oct (se sincronizaron con `git checkout dev && git reset --hard origin/main` + `git push --force-with-lease origin dev`, descartando 4 commits obsoletos de la etapa con GitHub Actions deploy).
- Lección aprendida dos veces: un cherry-pick no arrastra archivos de commits anteriores (`wrangler.jsonc` se quedó solo en `dev` y faltó en `main`); mantener las ramas idénticas o sincronizadas por PR.
- **Protección de `main` (ruleset en GitHub, el desarrollador lo estaba creando al 24-oct)**: Settings → Rules → Rulesets → New branch ruleset, target "Include default branch", activar: Require a pull request before merging (Required approvals = 0, porque el dueño no puede aprobar sus propios PRs — el clic en Merge ES la aprobación), Require status checks → check "Lint, test y build", Block force pushes. NO activar "Require deployments to succeed" (los Environments de GitHub no se usan; el deploy es nativo de Cloudflare y bloquearía la rama para siempre).

### Estado de builds

- `npm run build` local y en Cloudflare: OK, ~287 kB iniciales / ~80 kB transferibles.
- Deploy de producción desde `main`: OK (verificado por el desarrollador en `https://voltsman.luisleongomez98.workers.dev/`).
- Preview deploy desde `dev`: OK tras el fix de `previews` + Preview command con `cd sitio-web &&`.
- GitHub Actions (lint+test+build): OK en ambas ramas.
- El agente NO verifica visualmente el sitio (sin navegador); la confirmación visual la da el desarrollador.

### Pendientes actualizados (vigentes)

1. **Fusionar a `main` vía PR el fix de `previews` en `wrangler.jsonc`** (commit `20e811b0` está solo en `dev`) — y de paso probar el ruleset recién creado. Si el PR tarda en mostrar el check "Lint, test y build", es que GitHub necesita que el workflow corra una vez en el PR.
2. Reemplazar `servicios/electricidad.jpeg` por un JPEG real (sigue siendo un AVIF con extensión cambiada).
3. Resto de las 8 preguntas al cliente (falta confirmar años/equipo, detalle de estructuras metálicas, permisos/garantía, pasos reales, reseñas) y limpiar los `// TODO cliente` de `shared/content.ts`.
4. Aprobación final de la preselección de fotos reales (`fotografias_reales/seleccion_web/MANIFEST.md`).
5. Backend FastAPI del formulario (sin construir) y dominio .cl en NIC Chile (sin registrar). Con el dominio: conectarlo en Cloudflare → Worker `voltsman` → Settings → Domains & Routes.
