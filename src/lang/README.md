# Sistema de Traducciones

Este directorio contiene los archivos de traducción para el portfolio en inglés y español.

## Estructura

- `en.json` - Traducciones en inglés
- `es.json` - Traducciones en español
- `index.ts` - Utilidades para manejar las traducciones

## Uso en componentes Astro

### Ejemplo básico

```astro
---
import { getTranslations } from '../lang';

// Obtener traducciones (por defecto en inglés)
const t = getTranslations('es'); // o 'en'
---

<section>
  <h1>{t.skills.title}</h1>
  <p>{t.skills.description}</p>
</section>
```

### Ejemplo con navegación

```astro
---
import { getTranslations } from '../lang';

const t = getTranslations('en');
---

<nav>
  {Object.entries(t.nav).map(([key, value]) => (
    <a href={`#${key}`}>{value}</a>
  ))}
</nav>
```

### Ejemplo con proyectos

```astro
---
import { getTranslations } from '../lang';

const t = getTranslations('es');
---

<section>
  <h2>{t.projects.title}</h2>
  <p>{t.projects.description}</p>

  {t.projects.list.map((project) => (
    <article>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href="#">{project.label}</a>
    </article>
  ))}
</section>
```

## Contenido traducible

El sistema de traducciones incluye:

### Meta

- Título de la página
- Descripción meta

### Navegación

- Links de las secciones principales

### Presentación

- Título principal
- Texto del badge

### Habilidades

- Título y descripción
- Categorías de habilidades

### Proyectos

- Título y descripción de la sección
- Lista de proyectos con título, descripción y label

### Extras

- Título y descripción
- Estadísticas
- Lista de proyectos extra

### Contacto

- Título y descripción
- Información de contacto
- Labels del formulario

### Footer

- Descripción
- Copyright
- Links sociales

## Agregar nuevas traducciones

1. Agrega la nueva clave en `en.json`
2. Agrega la traducción correspondiente en `es.json`
3. Usa la nueva clave en tus componentes con `t.tuNuevaClave`

## TypeScript

El sistema está completamente tipado. TypeScript te ayudará a autocompletar las claves disponibles y detectar errores de tipeo.
