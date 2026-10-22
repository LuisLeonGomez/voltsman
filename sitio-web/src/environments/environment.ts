// Entorno de desarrollo. apiUrl queda vacío hasta que exista el backend
// de Python (FastAPI) que recibirá el formulario de contacto y enviará el correo.
// Ver CONTEXTO_PROYECTO.md, sección 4, "Backend para el formulario de contacto".
export const environment = {
  production: false,
  apiUrl: '', // TODO: URL del backend cuando esté desplegado (Render / Fly.io).
};
