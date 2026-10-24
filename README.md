# voltsman
pagina web empresa de construccion

## Desarrollo

El sitio esta en `sitio-web/` (Angular). Comandos principales desde esa carpeta:

- `npm install` — instalar dependencias.
- `npm start` — servidor local (`ng serve`).
- `npm run lint` — ESLint.
- `npm test` — tests unitarios (Karma + Jasmine) en modo watch.
- `npm run test:ci` — tests unitarios en modo headless, una sola corrida (el que usa CI).
- `npm run build` — build de produccion en `dist/sitio-web-constructora/browser`.

## CI/CD

**GitHub Actions** (`.github/workflows/ci-cd.yml`):
- En cada push o pull request a `dev` o `main`: lint, tests y build (control de calidad).
- Si algo falla en lint o test, el PR/push se marca como fallido (pero no bloquea el deploy, que lo maneja Cloudflare).

**Cloudflare** (conectado directamente al repo):
- En cada push a `main`: Cloudflare construye y despliega automáticamente a producción (`https://voltsman.luisleongomez98.workers.dev/`).
- En cada push a `dev` (u otras ramas): Cloudflare genera una URL de vista previa (ej: `https://dev.voltsman.luisleongomez98.workers.dev/`).
- El sitio se sirve como "static assets" de un Cloudflare Worker (`sitio-web/wrangler.jsonc`).

### Configuración (ya hecha)

1. ✅ Cloudflare conectado al repo de GitHub (`voltsman`).
2. ✅ Rama de producción: `main`.
3. ✅ Build command: `cd sitio-web && npm install && npm run build`.
4. ✅ Deploy command: `npx wrangler deploy`.
5. ✅ Preview builds habilitados (para `dev` y otras ramas).

Cuando el dominio `.cl` esté listo, se conecta a la rama `main` desde **Workers & Pages > voltsman > Settings > Domains & Routes**.
