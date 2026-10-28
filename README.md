# Portfolio — Judit Alcázar García

Estructura simple, pensada para abrir directamente con VS Code.

```
judit-portfolio/
├── index.html          → la portada (sección "hero", "sobre mí", cuadrículas vacías)
├── project.html        → plantilla ÚNICA para TODOS los proyectos
├── css/style.css        → colores, tipografías, cuadrícula de puntos, tarjetas...
├── js/
│   ├── projects.js      → ⭐ AQUÍ EDITAS LOS TEXTOS DE LOS PROYECTOS
│   ├── render-index.js  → pinta las tarjetas en index.html (no hace falta tocarlo)
│   ├── project-page.js  → pinta project.html según el proyecto (no hace falta tocarlo)
│   ├── gallery-zoom.js   → zoom al pasar el cursor + clic para ver grande, en project.html (no hace falta tocarlo)
│   └── main.js           → el trazo del cursor + animaciones
└── img/                 → aquí van todas las capturas/mockups
```

## Cómo verlo

Abre `index.html` con doble clic, o mejor con la extensión **Live
Server** de VS Code (clic derecho sobre `index.html` → "Open with
Live Server") para que los enlaces entre páginas y las imágenes
funcionen bien.

## Cómo funciona

Cada proyecto es **un solo bloque de datos** en `js/projects.js`.
Ese bloque alimenta a la vez:
- la tarjeta que se ve en `index.html`
- su propia página de detalle, que siempre es `project.html` pero
  con contenido distinto según la URL
  (`project.html?slug=web-decoralex`, `project.html?slug=logo-mmc`...)

Hacer clic en una tarjeta te lleva a `project.html` con el `slug`
correspondiente. **No necesitas crear una página HTML por cada
proyecto**: hay una sola plantilla que se reutiliza.

## Cosas que probablemente quieras cambiar

1. **Textos y datos de los proyectos** — todo en `js/projects.js`.
   Cada proyecto es un objeto `{ ... }` con estos campos:
   - `slug`: identificador único de la URL (sin espacios ni acentos)
   - `category`: `"webs"`, `"logos"`, `"editorial"` o `"altres"`
   - `meta`, `title`, `summary`, `tags`: lo que se ve en la tarjeta
   - `intro`, `paragraphs`: el texto de la página de detalle
   - `images`: nombres de los archivos dentro de `img/`
   - `live`: la URL real del proyecto (web, ficha de producto...).
     Si está rellena, aparece un botón que enlaza fuera del
     portfolio en la página de ese proyecto.
   - `sections` (opcional, en vez de `images`/`paragraphs`): para
     cuando un proyecto no es "una galería + un texto" sino varias
     piezas distintas contadas una tras otra (por ejemplo, una web
     que además incluye flyers y la gráfica de un evento). Es un
     array de `{ images, text, singleImage, row }`, y la página
     intercala galería-texto-galería-texto en el orden en que los
     escribas. Lo uso en Sant Just Impulsa: primero las capturas de
     la web, luego los flyers, luego la gráfica del evento, cada
     bloque con su propio texto. El campo `images` de primer nivel
     se sigue usando igualmente para la miniatura de la tarjeta en
     la portada (siempre la primera imagen de la web).
   - `row` (opcional, junto a `images`/`paragraphs`, sin usar
     `sections`): muestra todas las imágenes del proyecto una al
     lado de otra, sin recortar, en vez de repartidas en la
     cuadrícula de 3 huecos. Lo uso en el catálogo de Imar, con sus
     3 mockups en fila.

   Para añadir un proyecto nuevo: copia un bloque entero y cambia
   el `slug`. Para quitar uno: bórralo entero.

   4 proyectos (Audiocerver, Virens, Simple CAE, Attikum Capital)
   llevan una descripción genérica porque solo tenía el enlace a la
   web, sin más detalles del proyecto. Si quieres afinarlas con el
   reto real, el sector exacto o las herramientas concretas que
   usaste en cada una, edita su `intro` y `paragraphs` en
   `js/projects.js`.

2. **Imágenes** — todos los proyectos (31) ya tienen su imagen
   real puesta: las 18 webs, los 7 logotipos, los 4 de editorial y
   los 2 de "otros" (packaging y flyer). Si en el futuro añades un
   proyecto nuevo, hay dos formatos de galería:
   - **Webs** (3 capturas de detalle, formato horizontal ~2.2:1):
     hero, una sección con contenido y la versión móvil, o 3 zonas
     distintas de la web bien recortadas. Si una captura es más
     alta que el marco, se recorta mostrando la parte de arriba.
     **La imagen 1 siempre tiene que ser la página de inicio** —
     esa es también la miniatura que se usa en la tarjeta de la
     portada. Si alguna vez la primera no es la home, basta con
     reordenar el array `images` (el nombre del archivo no importa,
     solo el orden).
   - **Logos, editorial y piezas sueltas** (packaging, flyers,
     vallas...): una o varias imágenes grandes, ya que suele ser un
     mockup o la pieza final tal cual, no una captura de pantalla.
     Añade `singleImage: true` al proyecto en `js/projects.js` para
     que se muestren grandes y centradas (apiladas si hay más de
     una) en vez de repartidas en 3 huecos. Es lo que uso, por
     ejemplo, en el catálogo de Imar, con 3 mockups distintos del
     mismo catálogo.
   - Si un proyecto web incluye también piezas impresas sueltas
     (flyers, un banner, la gráfica de un evento...) que quieres
     mostrar como bloques separados dentro de la misma tarjeta, usa
     `sections` en vez de `images`/`paragraphs` sueltos — mira el
     punto anterior (campo `sections`) y los ejemplos de Sant Just
     Impulsa (web + flyers + gráfica de evento) y Camping Playa
     Parazuelos (web + banner publicitario) en `js/projects.js`.

   Guarda cada imagen en `img/` con el mismo nombre que aparece en
   el campo `images` de cada proyecto. Mientras no exista el
   archivo, se ve automáticamente un placeholder rayado; en cuanto
   lo añadas, aparece solo.

   El campo `live` (antes solo en webs) también funciona en
   cualquier categoría: si lo rellenas, aparece un botón que enlaza
   fuera del portfolio — dice "Ver la web ↗" en proyectos de tipo
   `webs` y "Ver producto ↗" en el resto (así lo uso, por ejemplo,
   en el envase de Chocolate Passion, que enlaza a su ficha de
   producto).

3. **Correo y redes** — ya puestos en `index.html`, dentro de
   `<footer id="contacte">`: tu correo, LinkedIn e Instagram (sin
   Behance, porque no tienes). Si algún enlace cambia, se edita ahí
   mismo.

4. **Colores** — arriba de todo en `css/style.css`, dentro de
   `:root{...}` (sección **1. TOKENS**).

5. **El trazo del cursor** — en `js/main.js`, bloque de
   configuración al principio (`TRAIL_LIFETIME_MS`, `LINE_WIDTH`...).
   Se desactiva solo en móvil.

6. **Visor de fotos con zoom** — en cualquier página de proyecto, al
   hacer clic en una foto de la galería se abre grande, encima de
   todo (se cierra con la X, con Escape o haciendo clic fuera). Ya
   dentro, al pasar el cursor por la foto ampliada hace zoom
   siguiendo el ratón. La miniatura en sí no hace zoom, solo se
   abre. Lo gestiona `js/gallery-zoom.js` y funciona solo, en todas
   las fotos de todos los proyectos, sin tener que tocar nada. Para
   cambiar cuánto hace zoom dentro del visor, el `scale(2)` de
   `.lightbox__img:hover` en `css/style.css` (sección **10b**).

## Notas

- Textos en castellano, en tono de portfolio profesional (primera
  persona, frases cortas). Empiezapori se presenta ya como una
  experiencia pasada ("he trabajado en..."), no como tu estudio
  actual — si vuelves a trabajar ahí o cambias de estudio, edítalo
  en el `<section id="sobre-mi">` de `index.html`.
- Todos los proyectos (31) tienen ya su imagen real puesta, y los
  18 de tipo web además tienen su enlace `live` — si algún dominio
  cambia, actualízalo en `js/projects.js`.
- El catálogo de Imar tiene 3 imágenes: la primera (`imar-1.jpg`)
  es el mockup que ya tenías; las otras dos (`imar-2.jpg`,
  `imar-3.jpg`) son montajes propios de otras páginas del catálogo
  real en PDF (envasadoras verticales y horizontales). Si algún día
  tienes fotos reales del catálogo impreso, puedes sustituirlas
  igual que cualquier otra imagen.
- La tarjeta de Sant Just Impulsa usa `sections`: capturas de la
  web, flyers de captación de socios/promotores y la gráfica de la
  jornada «Informe Fènix», cada bloque con su propio texto, uno
  detrás de otro.
- La tarjeta de Camping Playa Parazuelos también usa `sections`:
  capturas de la web y, debajo, el banner publicitario con su
  propio texto.
- La tarjeta de Snack 55 usa `sections` igual: primero el mockup
  general de la carta, luego las tres versiones de idioma (catalán,
  castellano, inglés) una al lado de otra con `row: true` —cada una
  con su propia combinación de colores para distinguirlas—, y por
  último la carta de cócteles.
- El correo y los enlaces de LinkedIn e Instagram ya son los
  reales.
