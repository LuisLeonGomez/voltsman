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

- En cada push o pull request a `dev` o `main`: lint, tests y build (si algo falla, no se despliega).
- En cada push a `dev`: ademas se despliega a la URL de vista previa `https://dev.voltsman.pages.dev` (para mostrarle avances al cliente sin tocar produccion).
- En cada push a `main`: se despliega a produccion `https://voltsman.pages.dev` (y al dominio propio cuando se conecte).

### Preparar el proyecto en Cloudflare (una sola vez)

Cloudflare fusiono Pages dentro de "Workers & Pages" en el dashboard, por lo que el asistente de "Create an app" que aparece primero es para Workers (requiere `wrangler.toml` y comandos de build) y no es el flujo que usamos aqui. En su lugar:

1. En el dashboard de Cloudflare, ir a **Workers & Pages > Pages > Crear un proyecto > Subir activos (Upload assets)**, sin conectar GitHub (el despliegue lo hace GitHub Actions, no Cloudflare).
2. Nombrar el proyecto `voltsman` y subir cualquier carpeta de relleno la primera vez (el primer deploy real desde GitHub Actions lo sobreescribe).
3. En GitHub, configurar en Settings > Secrets and variables > Actions:
   - `CLOUDFLARE_API_TOKEN`: token con permiso "Cloudflare Pages: Edit".
   - `CLOUDFLARE_ACCOUNT_ID`: ID de la cuenta de Cloudflare.
4. Cuando el dominio `.cl` este listo, se conecta solo a la rama de produccion (`main`) desde **Workers & Pages > voltsman > Custom domains**; la URL de vista previa de `dev` sigue siendo la de `pages.dev`.
