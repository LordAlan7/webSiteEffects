# 🎇 Especificaciones de Diseño de Marca

## Efectos Especiales para Eventos — Brand Design System v1.0

> **Filosofía:** La marca no vende productos. Vende la emoción de un momento irrepetible.  
> El diseño debe ser tan impactante como los efectos que representa.

---

## 1. Identidad de Marca

### 1.1 Personalidad

| Atributo           | Descripción                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| **Tono**           | Dramático, premium, confiable y moderno                                    |
| **Sensación**      | Como entrar a un venue de lujo en el momento en que empieza el espectáculo |
| **Palabras clave** | Espectacular · Irrepetible · Seguro · Profesional · Vibrante               |
| **Evitar**         | Infantil · Genérico · Barato · Ruidoso sin propósito                       |

### 1.2 Eslogan sugerido

```
El momento que nadie olvida.
```

---

## 2. Paleta de Colores

### 2.1 Colores Base (Neutrales Oscuros)

Estos colores conforman el "escenario" sobre el que brillan los efectos.

| Nombre            | HEX       | Uso Principal                                        |
| ----------------- | --------- | ---------------------------------------------------- |
| `--color-void`    | `#0A0A0F` | Fondo más oscuro. Fondos de sección hero y simulador |
| `--color-dark`    | `#12121E` | Fondo principal del sitio                            |
| `--color-card`    | `#1A1A2E` | Fondo de tarjetas, nav, footer                       |
| `--color-surface` | `#1E1E38` | Superficies elevadas, tablas, inputs                 |
| `--color-border`  | `#2A2A44` | Bordes sutiles entre elementos                       |
| `--color-muted`   | `#6C7A89` | Texto secundario, placeholders                       |
| `--color-text`    | `#E8E8F0` | Texto de cuerpo sobre fondo oscuro                   |
| `--color-white`   | `#FFFFFF` | Texto de contraste máximo, iconos                    |

### 2.2 Sparkular — Paleta Dorado/Fuego

Inspirada en el color de las chispas reales de la máquina.

| Nombre            | HEX       | Uso                                                   |
| ----------------- | --------- | ----------------------------------------------------- |
| `--spark-primary` | `#F5A623` | Color principal de la sección Sparkular, CTAs, iconos |
| `--spark-hot`     | `#FF6B00` | Hover states, acentos de fuego, glow effects          |
| `--spark-glow`    | `#FFD166` | Destellos, partículas animadas de chispa              |
| `--spark-dim`     | `#8B5A00` | Versión oscura para sombras y fondos de acento        |
| `--spark-bg`      | `#1C1000` | Fondo muy oscuro con tinte dorado para la sección     |

```
Gradiente de chispas:
linear-gradient(135deg, #FF6B00 0%, #F5A623 50%, #FFD166 100%)
```

### 2.3 Bubble Machine — Paleta Azul Eléctrico

Inspirada en el agua, el humo y la magia visual de las burbujas.

| Nombre             | HEX       | Uso                                          |
| ------------------ | --------- | -------------------------------------------- |
| `--bubble-primary` | `#00B4D8` | Color principal de la sección Bubble Machine |
| `--bubble-deep`    | `#0077B6` | Hover states, versión más intensa            |
| `--bubble-foam`    | `#90E0EF` | Destellos de burbuja, animaciones de reflejo |
| `--bubble-mist`    | `#CAF0F8` | Humo/niebla, fondos translúcidos de burbuja  |
| `--bubble-bg`      | `#00111A` | Fondo oscuro con tinte azul para la sección  |

```
Gradiente de burbuja:
radial-gradient(circle, rgba(144,224,239,0.15) 0%, rgba(0,180,216,0.05) 60%, transparent 100%)
```

### 2.4 Estados del Sistema

| Nombre            | HEX       | Uso                                           |
| ----------------- | --------- | --------------------------------------------- |
| `--color-success` | `#27AE60` | Confirmación de formulario, estado disponible |
| `--color-warning` | `#F5A623` | Advertencias, disponibilidad limitada         |
| `--color-error`   | `#C0392B` | Errores de formulario, no disponible          |
| `--color-info`    | `#00B4D8` | Mensajes informativos, tooltips               |

---

## 3. Tipografía

### 3.1 Familia de Fuentes

```css
/* Títulos de impacto — display headers */
--font-display: "Bebas Neue", "Impact", sans-serif;

/* Títulos de sección — headings H2/H3 */
--font-heading: "Montserrat", "Arial Black", sans-serif;

/* Cuerpo y UI — legibilidad */
--font-body: "Inter", "Poppins", "Arial", sans-serif;

/* Código / specs técnicas */
--font-mono: "JetBrains Mono", "Fira Code", "Courier New", monospace;
```

**Importar desde Google Fonts:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

### 3.2 Escala Tipográfica

Basada en una escala modular con ratio 1.25 (Major Third).

| Token         | Tamaño                   | Uso                       | Fuente     | Peso |
| ------------- | ------------------------ | ------------------------- | ---------- | ---- |
| `--text-xs`   | `0.75rem / 12px`         | Labels, badges, copyright | Inter      | 400  |
| `--text-sm`   | `0.875rem / 14px`        | Texto de apoyo, notas     | Inter      | 400  |
| `--text-base` | `1rem / 16px`            | Cuerpo de texto principal | Inter      | 400  |
| `--text-lg`   | `1.125rem / 18px`        | Párrafos lead, subtítulos | Inter      | 500  |
| `--text-xl`   | `1.25rem / 20px`         | Intro de sección          | Montserrat | 600  |
| `--text-2xl`  | `1.5rem / 24px`          | H3 — Títulos de tarjeta   | Montserrat | 700  |
| `--text-3xl`  | `1.875rem / 30px`        | H2 — Títulos de sección   | Montserrat | 700  |
| `--text-4xl`  | `2.5rem / 40px`          | H1 — Títulos de página    | Bebas Neue | 400  |
| `--text-5xl`  | `3.5rem / 56px`          | Hero títulos (móvil)      | Bebas Neue | 400  |
| `--text-6xl`  | `5rem / 80px`            | Hero títulos (desktop)    | Bebas Neue | 400  |
| `--text-hero` | `clamp(3rem, 8vw, 6rem)` | Título principal del hero | Bebas Neue | 400  |

### 3.3 Estilos de Texto Específicos

```css
/* Nombre de máquina en sección hero de cada equipo */
.machine-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 7rem);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 0.9;
}

/* Eslogan / tagline */
.tagline {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 300;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-muted);
}

/* Spec técnica */
.spec-label {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

---

## 4. Espaciado y Layout

### 4.1 Escala de Espaciado

Basada en una grilla de 4px.

| Token          | Valor                     | Uso Típico                              |
| -------------- | ------------------------- | --------------------------------------- |
| `--space-1`    | `4px`                     | Espaciado mínimo entre elementos inline |
| `--space-2`    | `8px`                     | Padding interno de badges y labels      |
| `--space-3`    | `12px`                    | Gap entre iconos y texto                |
| `--space-4`    | `16px`                    | Padding interno de botones              |
| `--space-5`    | `20px`                    | Margen entre elementos de lista         |
| `--space-6`    | `24px`                    | Padding de tarjetas en móvil            |
| `--space-8`    | `32px`                    | Gap entre tarjetas en grid              |
| `--space-10`   | `40px`                    | Padding de tarjetas en desktop          |
| `--space-12`   | `48px`                    | Separación entre secciones menores      |
| `--space-16`   | `64px`                    | Padding de secciones en móvil           |
| `--space-20`   | `80px`                    | Padding de secciones en tablet          |
| `--space-24`   | `96px`                    | Separación entre secciones principales  |
| `--space-32`   | `128px`                   | Padding de secciones en desktop         |
| `--space-hero` | `clamp(4rem, 10vh, 8rem)` | Padding vertical del hero               |

### 4.2 Breakpoints

```css
/* Mobile first — expandir con min-width */
--bp-sm: 480px; /* Teléfonos grandes */
--bp-md: 768px; /* Tablets / iPads */
--bp-lg: 1024px; /* Laptops pequeñas */
--bp-xl: 1280px; /* Desktops estándar */
--bp-2xl: 1536px; /* Pantallas grandes */
```

### 4.3 Contenedor y Grid

```css
/* Contenedor máximo de contenido */
--container-max: 1200px;
--container-pad: clamp(1rem, 5vw, 2rem); /* Padding lateral responsivo */

/* Grid de tarjetas de máquinas */
--grid-machines: repeat(auto-fit, minmax(300px, 1fr));

/* Grid de galería */
--grid-gallery: repeat(auto-fill, minmax(240px, 1fr));

/* Grid de especificaciones */
--grid-specs: repeat(auto-fit, minmax(200px, 1fr));
```

---

## 5. Efectos Visuales y Motion

### 5.1 Sombras y Glow

Las sombras de esta marca son de color, no grises. El "glow" es la firma visual del sistema.

```css
/* Glow Sparkular — dorado */
--shadow-spark:
  0 0 20px rgba(245, 166, 35, 0.4), 0 0 60px rgba(245, 166, 35, 0.15),
  0 0 100px rgba(245, 166, 35, 0.05);

/* Glow Bubble Machine — azul */
--shadow-bubble:
  0 0 20px rgba(0, 180, 216, 0.4), 0 0 60px rgba(0, 180, 216, 0.15);

/* Sombra de tarjeta */
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.3);

/* Sombra elevada (hover de tarjeta) */
--shadow-elevated: 0 8px 40px rgba(0, 0, 0, 0.6);
```

**Uso en hover de CTAs:**

```css
.btn-sparkular:hover {
  box-shadow: var(--shadow-spark);
  transform: translateY(-2px);
}
```

### 5.2 Radios de Borde

```css
--radius-sm: 4px; /* Badges, labels, inputs */
--radius-md: 8px; /* Botones, tarjetas pequeñas */
--radius-lg: 16px; /* Tarjetas principales */
--radius-xl: 24px; /* Contenedores de sección */
--radius-full: 9999px; /* Pills, botones redondos, avatar */
```

### 5.3 Transiciones y Animaciones

```css
/* Duraciones */
--duration-fast: 150ms; /* Hover states inmediatos */
--duration-normal: 300ms; /* Transiciones de UI estándar */
--duration-slow: 500ms; /* Animaciones de entrada */
--duration-lazy: 800ms; /* Scroll animations */

/* Curvas de easing */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1); /* Entradas — natural */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* Transiciones de estado */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* Elementos que "pops" */
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Menús, modales */
```

### 5.4 Animaciones Definidas

```css
/* Entrada de elementos al hacer scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Partícula de chispa (Sparkular) */
@keyframes sparkFly {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--dx), var(--dy)) scale(0);
    opacity: 0;
  }
}

/* Burbuja flotante (Bubble Machine) */
@keyframes bubbleFloat {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.8;
  }
  25% {
    transform: translateY(-25%) translateX(8px) scale(1.02);
  }
  50% {
    transform: translateY(-50%) translateX(-6px) scale(1.04);
  }
  75% {
    transform: translateY(-75%) translateX(10px) scale(1.02);
  }
  100% {
    transform: translateY(-110%) translateX(0) scale(0.8);
    opacity: 0;
  }
}

/* Pulsación de glow (botones, badges) */
@keyframes glowPulse {
  0%,
  100% {
    box-shadow: 0 0 10px currentColor;
  }
  50% {
    box-shadow:
      0 0 30px currentColor,
      0 0 60px currentColor;
  }
}

/* Rayo de luz del simulador */
@keyframes lightBeam {
  0% {
    transform: rotate(-30deg);
    opacity: 0.8;
  }
  50% {
    transform: rotate(30deg);
    opacity: 1;
  }
  100% {
    transform: rotate(-30deg);
    opacity: 0.8;
  }
}

/* Strobe */
@keyframes strobe {
  0%,
  49% {
    opacity: 0;
  }
  50%,
  100% {
    opacity: 1;
  }
}
```

---

## 6. Componentes de UI

### 6.1 Botones

#### Botón Primario (por máquina)

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-size: var(--text-base);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
}

/* Sparkular */
.btn--sparkular {
  background: var(--spark-primary);
  color: #000;
  border-color: var(--spark-primary);
}
.btn--sparkular:hover {
  background: var(--spark-hot);
  box-shadow: var(--shadow-spark);
  transform: translateY(-2px);
}

/* Bubble */
.btn--bubble {
  background: var(--bubble-primary);
  color: #000;
  border-color: var(--bubble-primary);
}

/* Fantasma / Ghost */
.btn--ghost {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-border);
}
.btn--ghost:hover {
  border-color: var(--color-text);
  background: rgba(255, 255, 255, 0.05);
}
```

#### Tamaños de Botón

| Variante  | Padding     | Font Size | Uso                                      |
| --------- | ----------- | --------- | ---------------------------------------- |
| `btn--sm` | `8px 16px`  | `14px`    | Acciones secundarias, filtros de galería |
| `btn--md` | `12px 24px` | `16px`    | Botones de sección (por defecto)         |
| `btn--lg` | `16px 40px` | `18px`    | CTAs principales de sección              |
| `btn--xl` | `20px 56px` | `22px`    | CTA del hero                             |

### 6.2 Tarjeta de Máquina (Machine Card)

```css
.machine-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

/* Borde superior de color por máquina */
.machine-card--sparkular {
  border-top: 3px solid var(--spark-primary);
}
.machine-card--bubble {
  border-top: 3px solid var(--bubble-primary);
}
.machine-card--lights {
  border-top: 3px solid var(--light-primary);
}

.machine-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-elevated);
}
```

### 6.3 Badge de Seguridad

```css
.safety-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: rgba(39, 174, 96, 0.15);
  border: 1px solid rgba(39, 174, 96, 0.4);
  border-radius: var(--radius-full);
  color: #27ae60;
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.05em;
}
```

### 6.4 Toggle de Efecto (Burbujas / Con Humo)

```css
.effect-toggle {
  display: flex;
  background: var(--color-surface);
  border-radius: var(--radius-full);
  padding: 4px;
  gap: 4px;
}

.effect-toggle__option {
  padding: var(--space-2) var(--space-6);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--duration-fast);
  color: var(--color-muted);
}

.effect-toggle__option.active {
  background: var(--bubble-primary);
  color: #000;
  box-shadow: 0 0 12px rgba(0, 180, 216, 0.5);
}
```

---

## 7. Iconografía y Assets

### 7.1 Iconos Recomendados (Font Awesome 6 Free)

| Elemento            | Ícono FA        | Clase                     |
| ------------------- | --------------- | ------------------------- |
| Sparkular / Chispas | Bolt / Star     | `fa-bolt` / `fa-star`     |
| Bubble Machine      | Circle          | `fa-circle-dot`           |
| WhatsApp            | WhatsApp Brand  | `fa-brands fa-whatsapp`   |
| Seguridad / Frío    | Shield Check    | `fa-shield-halved`        |
| Teléfono            | Phone           | `fa-phone`                |
| Ubicación           | Map Pin         | `fa-location-dot`         |
| Instagram           | Instagram Brand | `fa-brands fa-instagram`  |
| TikTok              | TikTok Brand    | `fa-brands fa-tiktok`     |
| Facebook            | Facebook Brand  | `fa-brands fa-facebook-f` |
| Calendario          | Calendar        | `fa-calendar-check`       |
| Correo              | Envelope        | `fa-envelope`             |
| Música / DJ         | Music           | `fa-music`                |

### 7.2 Especificaciones de Imágenes

| Tipo               | Formato     | Tamaño Máx | Resolución     | Nota                          |
| ------------------ | ----------- | ---------- | -------------- | ----------------------------- |
| Hero background    | MP4 (H.264) | 8 MB       | 1920×1080      | Versión mobile 720×1280 ≤ 4MB |
| Hero fallback      | WebP + JPG  | 300 KB     | 1920×1080      | Para conexiones lentas        |
| Video de sección   | MP4 (H.264) | 12 MB      | 1920×1080      | Lazy load obligatorio         |
| Foto de galería    | WebP + JPG  | 200 KB     | 800×600 min    | Thumbnail 400×300             |
| Thumbnail de video | WebP        | 80 KB      | 800×450        | Aspecto 16:9                  |
| Open Graph (OG)    | JPG         | 150 KB     | 1200×630       | Una por cada máquina          |
| Favicon            | PNG + ICO   | 10 KB      | 32×32, 180×180 | Versión clara y oscura        |

### 7.3 Dirección de Arte Fotográfica

Para garantizar consistencia en todos los assets visuales:

- **Iluminación:** Siempre preferir fotos donde el efecto se ve en entorno oscuro o penumbra. El contraste entre el efecto y el fondo oscuro es lo que hace la imagen impactante.
- **Personas:** Incluir personas en las fotos cuando sea posible. Las caras de invitados maravillados o novios emocionados conectan emocionalmente mejor que fotos del equipo solo.
- **Plano:** Mezcla de planos generales (para mostrar el alcance del efecto) y planos cerrados (para mostrar detalles y texturas de chispas, burbujas, rayos de luz).
- **Movimiento:** Preferir fotos con algo de motion blur que transmita dinamismo sobre fotos perfectamente congeladas que se ven estáticas.
- **Vertical vs Horizontal:** Capturar en ambas orientaciones. Las verticales (9:16) son esenciales para contenido de Instagram/TikTok.

---

## 8. Identidad Visual por Sección

### 8.1 Jerarquía Visual del Sitio

```
HERO (Negro puro + video + los tres colores en movimiento)
  │
  ├── SPARKULAR    → Fondo #1C1000 · Acento dorado · Partículas
  │
  ├── BUBBLE       → Fondo #00111A · Acento azul · Burbujas flotantes
  │
  ├── GALERÍA      → Fondo #12121E · Grid neutro · Los tres colores
  │
  ├── PAQUETES     → Fondo #1A1A2E · Tablas limpias · Acento dorado
  │
  └── CONTACTO     → Fondo #0A0A0F · WhatsApp verde · Formulario
```

### 8.2 Regla del Glow Consistente

Cada sección tiene exactamente UN color de glow dominante. No mezclar glows entre secciones.

| Sección           | Glow Dominante            | Aplicar en                    |
| ----------------- | ------------------------- | ----------------------------- |
| Sparkular         | `rgba(245, 166, 35, 0.4)` | Botón CTA, título, partículas |
| Bubble Machine    | `rgba(0, 180, 216, 0.4)`  | Botón CTA, título, burbujas   |
| Contacto / Global | `rgba(37, 211, 102, 0.4)` | Botón WhatsApp únicamente     |

### 8.3 Gradientes de Transición entre Secciones

Para que el cambio de fondo entre secciones sea cinematográfico en lugar de abrupto:

```css
/* Transición Hero → Sparkular */
.section-transition--hero-spark {
  background: linear-gradient(180deg, #0a0a0f 0%, #1c1000 100%);
  height: 120px;
  margin-top: -60px;
  margin-bottom: -60px;
  position: relative;
  z-index: 1;
}

/* Transición Sparkular → Bubble */
.section-transition--spark-bubble {
  background: linear-gradient(180deg, #1c1000 0%, #00111a 100%);
}
```

---

## 9. Variables CSS Completas

El siguiente bloque es el archivo `/css/variables.css` listo para implementar:

```css
:root {
  /* ── COLORES BASE ──────────────────────────────── */
  --color-void: #0a0a0f;
  --color-dark: #12121e;
  --color-card: #1a1a2e;
  --color-surface: #1e1e38;
  --color-border: #2a2a44;
  --color-muted: #6c7a89;
  --color-text: #e8e8f0;
  --color-white: #ffffff;

  /* ── SPARKULAR ─────────────────────────────────── */
  --spark-primary: #f5a623;
  --spark-hot: #ff6b00;
  --spark-glow: #ffd166;
  --spark-dim: #8b5a00;
  --spark-bg: #1c1000;

  /* ── BUBBLE MACHINE ────────────────────────────── */
  --bubble-primary: #00b4d8;
  --bubble-deep: #0077b6;
  --bubble-foam: #90e0ef;
  --bubble-mist: #caf0f8;
  --bubble-bg: #00111a;

  /* ── ESTADOS ───────────────────────────────────── */
  --color-success: #27ae60;
  --color-warning: #f5a623;
  --color-error: #c0392b;
  --color-info: #00b4d8;
  --color-whatsapp: #25d366;

  /* ── TIPOGRAFÍA ────────────────────────────────── */
  --font-display: "Bebas Neue", "Impact", sans-serif;
  --font-heading: "Montserrat", "Arial Black", sans-serif;
  --font-body: "Inter", "Poppins", "Arial", sans-serif;
  --font-mono: "JetBrains Mono", "Courier New", monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.5rem;
  --text-6xl: 5rem;
  --text-hero: clamp(3rem, 8vw, 6rem);

  /* ── ESPACIADO ─────────────────────────────────── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-hero: clamp(4rem, 10vh, 8rem);

  /* ── BREAKPOINTS ───────────────────────────────── */
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
  --bp-2xl: 1536px;

  /* ── LAYOUT ────────────────────────────────────── */
  --container-max: 1200px;
  --container-pad: clamp(1rem, 5vw, 2rem);
  --grid-machines: repeat(auto-fit, minmax(300px, 1fr));
  --grid-gallery: repeat(auto-fill, minmax(240px, 1fr));

  /* ── BORDES ────────────────────────────────────── */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* ── SOMBRAS Y GLOW ────────────────────────────── */
  --shadow-spark:
    0 0 20px rgba(245, 166, 35, 0.4), 0 0 60px rgba(245, 166, 35, 0.15);
  --shadow-bubble:
    0 0 20px rgba(0, 180, 216, 0.4), 0 0 60px rgba(0, 180, 216, 0.15);
  --shadow-light:
    0 0 20px rgba(199, 21, 133, 0.4), 0 0 60px rgba(199, 21, 133, 0.15);
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.3);
  --shadow-elevated: 0 8px 40px rgba(0, 0, 0, 0.6);

  /* ── TRANSICIONES ──────────────────────────────── */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-lazy: 800ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ── Z-INDEX STACK ─────────────────────────────── */
  --z-base: 0;
  --z-raised: 10;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-floating: 500; /* Botón WhatsApp */
  --z-toast: 600;
}
```

---

## 10. Checklist de Diseño

Antes de entregar cualquier pantalla o componente, verificar:

- [ ] El fondo de la sección es el color correcto según la jerarquía de secciones
- [ ] El glow/shadow usa el color de la máquina correspondiente, no un gris genérico
- [ ] Los textos sobre fondo oscuro tienen contraste mínimo WCAG AA (4.5:1)
- [ ] Los botones CTA tienen tamaño mínimo de 44×44px en móvil (touch target)
- [ ] Las fuentes Bebas Neue y Montserrat están cargadas con `font-display: swap`
- [ ] Todas las imágenes tienen su versión WebP + fallback JPG/PNG
- [ ] Las animaciones respetan `prefers-reduced-motion` con alternativa estática
- [ ] El botón de WhatsApp usa exactamente `--color-whatsapp: #25D366` (el verde oficial)
- [ ] Las transiciones entre secciones usan los gradientes definidos en §8.3

---

_Brand Design System v1.0 — Efectos Especiales para Eventos_  
_Generado: Marzo 2026 · Compatible con SRS v1.0_
