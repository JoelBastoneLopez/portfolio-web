# Orden de trabajo: Fixes SEO técnicos — portfolio-web

**Repositorio:** joelbastonelopez.github.io/portfolio-web
**Sitio en vivo:** https://joelbastonelopez.github.io/portfolio-web/
**Contexto:** Sitio estático HTML bilingüe (ES/EN), alojado en GitHub Pages, sin build step ni framework. Páginas ES en la raíz, páginas EN con sufijo `-en.html`.

Ya se corrigió `project-lattafa.html` (canonical, meta-robots, imágenes en `.webp` sin espacios en el nombre) — usar esa página como referencia/patrón para todo lo demás.

---

## TAREA 1 (crítica): Corregir `canonical` en todas las páginas en inglés

**Problema:** Cada página `-en.html` tiene su `<link rel="canonical">` apuntando a la versión en español en vez de a sí misma. Esto le indica a Google que ignore el contenido en inglés, y hace que nunca se indexe.

**Archivos a corregir** (cambiar el canonical en cada uno de ellos):

| Archivo | Canonical actual (incorrecto) | Canonical correcto |
|---|---|---|
| `index-en.html` | `https://joelbastonelopez.github.io/portfolio-web/` | `https://joelbastonelopez.github.io/portfolio-web/index-en.html` |
| `project-8bottle-en.html` | `.../project-8bottle.html` | `.../project-8bottle-en.html` |
| `project-kaisar-en.html` | `.../project-kaisar.html` | `.../project-kaisar-en.html` |
| `project-ducharme-en.html` | `.../project-ducharme.html` | `.../project-ducharme-en.html` |
| `project-primicia-en.html` | `.../project-primicia.html` | `.../project-primicia-en.html` |
| `project-lattafa-en.html` | (verificar — no confirmado en la última auditoría) | `.../project-lattafa-en.html` |

También corregir, en cada una de estas mismas páginas EN, los siguientes tags que probablemente tengan el mismo problema (apuntar a la URL ES en vez de a sí mismos):
- `og:url`
- `twitter:url`

---

## TAREA 2 (alta): Agregar `hreflang` cruzado en las 12 páginas

Ninguna página del sitio tiene actualmente etiquetas `hreflang`. Agregar en el `<head>` de **cada una de las 12 páginas** (6 ES + 6 EN) el bloque correspondiente, apuntando siempre a sí misma como `x-default` en la versión ES:

Ejemplo para el par `index.html` / `index-en.html`:
```html
<link rel="alternate" hreflang="es" href="https://joelbastonelopez.github.io/portfolio-web/index.html" />
<link rel="alternate" hreflang="en" href="https://joelbastonelopez.github.io/portfolio-web/index-en.html" />
<link rel="alternate" hreflang="x-default" href="https://joelbastonelopez.github.io/portfolio-web/index.html" />
```

Aplicar el mismo patrón (adaptando las URLs) a los 5 pares restantes:
- `project-8bottle.html` ↔ `project-8bottle-en.html`
- `project-kaisar.html` ↔ `project-kaisar-en.html`
- `project-lattafa.html` ↔ `project-lattafa-en.html`
- `project-ducharme.html` ↔ `project-ducharme-en.html`
- `project-primicia.html` ↔ `project-primicia-en.html`

---

## TAREA 3 (media): Completar Open Graph / Twitter Card en Ducharme

**Archivo:** `project-ducharme.html` (y verificar si `project-ducharme-en.html` tiene el mismo problema)

Actualmente el `<head>` solo tiene `meta-description`, `meta-keywords`, `meta-robots` y `meta-viewport`. Le faltan por completo los tags de Open Graph y Twitter Card que sí tienen el resto de las páginas de proyecto. Agregar, siguiendo el mismo formato usado en `project-8bottle.html`:

```html
<meta property="og:title" content="Ducharme Seating | Joel Bastone" />
<meta property="og:description" content="Visualización de recintos a gran escala para Ducharme Seating." />
<meta property="og:image" content="https://joelbastonelopez.github.io/portfolio-web/assets/img/ducharme.jpg" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://joelbastonelopez.github.io/portfolio-web/project-ducharme.html" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Ducharme Seating" />
<meta name="twitter:description" content="Visualización de recintos a gran escala para Ducharme Seating." />
<meta name="twitter:image" content="https://joelbastonelopez.github.io/portfolio-web/assets/img/ducharme.jpg" />
<meta name="twitter:url" content="https://joelbastonelopez.github.io/portfolio-web/project-ducharme.html" />
```

(Ajustar la imagen de referencia si existe un asset más representativo que `ducharme.jpg`.)

---

## TAREA 4 (media): Optimizar imágenes en el resto de páginas de proyecto

**Ya resuelto como referencia en:** `project-lattafa.html` (imágenes convertidas a `.webp`, nombres de archivo sin espacios).

**Aplicar el mismo tratamiento en:**
- `project-8bottle.html` / `project-8bottle-en.html` → carpeta `assets/img/8bottle/`. Renombrar archivos como `infographic 6-1.jpg`, `7-blue bottle.jpeg`, `12-White Bottle.jpg`, `13-Black Bottle.jpg`, `3-Blue Bottle.jpg`, `5-Bottle White.jpg`, `5-White Bottle.jpg`, `10-Black Bottle.jpg` a formato `kebab-case-sin-espacios.webp`, actualizando todas las referencias `<img src="...">` en el HTML.
- `project-kaisar.html` / `project-kaisar-en.html` → carpeta `assets/img/kaisar/`. Convertir todos los `.png` a `.webp`.
- `project-ducharme.html` / `project-ducharme-en.html` → carpeta `assets/img/ducharme/`. Convertir `.jpg`/`.png` a `.webp`.
- `project-primicia.html` / `project-primicia-en.html` → carpeta `assets/img/primicia/`. Convertir `.png`/`.jpg` a `.webp`.

Al renombrar, actualizar también cualquier referencia a esas imágenes en `og:image` / `twitter:image` si corresponde.

---

## TAREA 5 (alta): Verificar/crear `robots.txt` y `sitemap.xml`

No se pudo confirmar si existen actualmente en la raíz del sitio. Crear (o corregir si ya existen) ambos archivos en la raíz del repo:

**`robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://joelbastonelopez.github.io/portfolio-web/sitemap.xml
```

**`sitemap.xml`:** debe listar las 12 URLs del sitio (6 ES + 6 EN) con sus respectivos `<lastmod>`:
- `/index.html`
- `/index-en.html`
- `/project-8bottle.html`
- `/project-8bottle-en.html`
- `/project-kaisar.html`
- `/project-kaisar-en.html`
- `/project-lattafa.html`
- `/project-lattafa-en.html`
- `/project-ducharme.html`
- `/project-ducharme-en.html`
- `/project-primicia.html`
- `/project-primicia-en.html`

---

## TAREA 6 (opcional, baja prioridad): Datos estructurados JSON-LD

Ninguna página tiene actualmente schema.org. Agregar:
- En `index.html` / `index-en.html`: schema tipo `Person` (nombre, ocupación, sitio web, redes: LinkedIn, Behance).
- En cada página de proyecto: schema tipo `CreativeWork` con `name`, `description`, `image`, `creator` referenciando al `Person`.

---

## Criterio de aceptación
- Ninguna página `-en.html` debe tener canonical/og:url/twitter:url apuntando a la versión en español.
- Las 12 páginas deben tener `hreflang` cruzado válido.
- `project-ducharme.html` debe compartir preview correcto en redes sociales.
- Todas las imágenes de proyecto en `.webp`, sin espacios en los nombres de archivo.
- `robots.txt` y `sitemap.xml` accesibles y correctos en la raíz del sitio.
