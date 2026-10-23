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

En `.github/workflows/ci-cd.yml`:

- En cada push o pull request a `dev` o `main`: lint, tests y build (si algo falla, no se integra).
- En cada push a `main`: ademas se despliega automaticamente a Cloudflare Pages.

Para que el deploy funcione hay que configurar estos secretos del repositorio en GitHub (Settings > Secrets and variables > Actions):

- `CLOUDFLARE_API_TOKEN`: token de Cloudflare con permiso "Cloudflare Pages: Edit".
- `CLOUDFLARE_ACCOUNT_ID`: ID de la cuenta de Cloudflare.

El workflow despliega al proyecto de Cloudflare Pages llamado `voltsman` (hay que crearlo antes en el dashboard de Cloudflare Pages, o ajustar el nombre en el workflow si se usa otro).
