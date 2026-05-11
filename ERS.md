**ESPECIFICACIÓN DE REQUERIMIENTOS**  
**DE SOFTWARE**

**SPARKULAR**  ·  **BUBBLE MACHINE**  ·  **LUCES**

*Página Web de Efectos Especiales para Eventos*

Versión 1.0  ·  Marzo 2026  ·  Uso Interno

| Proyecto | Sitio Web de Renta de Máquinas de Efectos Especiales para Eventos |
| :---- | :---- |
| **Máquinas cubiertas** | Sparkular (chispas en frío), Bubble Machine (burbujas \+ humo),|
| **Tipo de producto** | Sitio web híbrido: estático en fase inicial / dinámico en fase de escalado |
| **Versión del SRS** | 1.0 — Borrador para revisión |
| **Fecha** | Marzo 2026 |
| **Autor / Rol** | \[Nombre del Autor\]  ·  Arquitecto de Producto |
| **Revisado por** | \[Nombre del Revisor\] |

# **1\. Introducción**

## **1.1 Propósito del Documento**

Este documento define los requerimientos funcionales, no funcionales, de contenido y técnicos para el desarrollo de un sitio web de alto impacto visual orientado a la promoción y renta de máquinas de efectos especiales para eventos. El sitio debe comunicar con precisión la experiencia sensorial que ofrecen los equipos — chispas y burbujas(con o sin humo), — utilizando elementos interactivos, video y animaciones que reproduzcan fielmente el impacto visual de cada máquina.

## **1.2 Visión del Producto**

*No vendemos máquinas. Vendemos el momento que nadie olvida.*

El sitio web es la primera y más importante herramienta de ventas del negocio. Un cliente potencial que llega a la página debe sentir — antes de hablar con nadie — que contratar estos servicios transformará su evento. El diseño, las animaciones y el contenido audiovisual son el producto en sí mismos.

## **1.3 Alcance del Sistema**

El sistema abarca el diseño, desarrollo y despliegue de un sitio web que cumpla las siguientes funciones:

* Presentar las dos líneas de equipo (Sparkular, Bubble Machine) con demostraciones visuales interactivas.

* Generar contacto directo con el negocio a través de WhatsApp, formulario y redes sociales.

* Ser desplegable como sitio estático en la fase v1.0, con arquitectura preparada para evolucionar a un sistema dinámico (v2.0) con cotizador, panel de administración y reservaciones en línea.

* Optimizado para buscadores locales ('renta de chispazo para boda Durango', 'bubble machine eventos').

* Diseño responsivo que funcione en móvil, ya que la mayoría del tráfico proviene de Instagram y TikTok donde los clientes ven el producto por primera vez.

## **1.4 Audiencia del Documento**

| Desarrollador Frontend | Responsable de implementar el HTML, CSS, JS, animaciones y video backgrounds. |
| :---- | :---- |
| **Diseñador UI/UX** | Responsable de la identidad visual, paleta de colores, wireframes y prototipo en Figma. |
| **Cliente / Dueño** | Valida que el documento refleje correctamente la propuesta comercial del negocio. |
| **Project Manager** | Supervisa el cumplimiento de requerimientos y plazos de entrega. |

# **2\. Descripción General del Negocio y las Máquinas**

## **2.1 Contexto del Negocio**

El negocio ofrece la renta de máquinas de efectos especiales para bodas, quinceañeras, graduaciones, presentaciones artísticas, eventos corporativos y cualquier celebración que requiera un impacto visual excepcional. El modelo de operación es: el cliente cotiza en línea o vía WhatsApp, reserva la fecha, y el equipo se instala y opera en el evento por personal especializado del negocio.

| 💡 | Propuesta de Valor Central Las máquinas producen efectos en frío o ambientales que no representan riesgos de incendio, son aptas para interiores y cumplen regulaciones de seguridad para eventos con personas. Este dato es crucial comunicarlo en el sitio para disipar el miedo del cliente. |
| :---: | :---- |

## **2.2 Catálogo de Máquinas**

| SPARKULAR  *Máquina de Chispas en Frío* Produce una lluvia espectacular de chispas doradas o plateadas controladas que crea el momento visual más impactante del evento. Ideal para entradas, primeros bailes y momentos de revelación. |
| :---- |
|  **Efecto producido** Fuente de chispas doradas o plateadas que alcanzan hasta 3–5 metros de altura **Temperatura** Chispas en frío: no queman, no generan calor real al contacto **Uso recomendado** Primera entrada, entrada de novios, primer baile, momentos climáticos del evento **Tiempo de operación** Ráfagas programables de 15 a 90 segundos por activación **Instalación** Requiere superficie plana y radio libre de 2m. Operado por técnico certificado **Seguridad** Apto para interiores. No activa detectores de humo. No es pirotecnia regulada **Consumo eléctrico** 110V / 220V según modelo. Cable de alimentación incluido en servicio  |

| BUBBLE MACHINE  *Máquina de Burbujas con Humo Opcional* La magia visual más fotogénica del catálogo. Las burbujas con humo crean imágenes y videos únicos que se vuelven virales en redes sociales — un beneficio que el cliente valora enormemente. |
| :---- |
|  **Efecto base** Burbujas gigantes o en cascada de distintos tamaños, regulable por intensidad **Efecto premium** Burbujas rellenas de humo que flotan y explotan liberando nube de humo en el aire **Cobertura** Radio de cobertura de 4–8 metros según posición y corriente de aire del lugar **Uso recomendado** Apertura de pista de baile, sesión de fotos, ambiente de bienvenida, entrada de novios **Fluido requerido** Líquido de burbujas premium incluido. Humo: fluido especial no tóxico e inodoro **Seguridad** 100% seguro para personas, mascotas y ropa. No mancha. No resbaladizo sobre pista **Control** Operación manual o programada por DMX / control inalámbrico incluido  |

# **3\. Requerimientos Funcionales — Estructura del Sitio**

## **3.1 Arquitectura de Páginas**

El sitio se organiza en las siguientes páginas/secciones. En la versión estática (v1.0) todo puede estar en una sola página con navegación por anclas. En la versión dinámica (v2.0) cada sección evoluciona a su propia ruta.

| Ruta | Nombre | Estado v1.0 | Descripción |
| :---- | :---- | :---- | :---- |
| /\#inicio | **Hero / Portada** | **Estático — Incluir** | Video de fondo o animación. Eslogan \+ CTAs principales. |
| /\#sparkular | **Sección Sparkular** | **Estático — Incluir** | Demo interactiva de chispas \+ video \+ specs \+ CTA. |
| /\#bubble | **Sección Bubble Machine** | **Estático — Incluir** | Animación CSS de burbujas \+ video \+ specs \+ CTA. |
| /\#galeria | **Galería de Eventos** | **Estático — Incluir** | Grid de fotos/videos de eventos reales. Prueba social. |
| /\#paquetes | **Paquetes y Precios** | **Estático — Opcional** | Tabla de paquetes. Puede omitirse si el cliente prefiere cotización directa. |
| /\#contacto | **Contacto y Reservación** | **Estático — Incluir** | Formulario, WhatsApp, mapa, redes sociales. |
| /admin | **Panel de Administración** | **Dinámico — v2.0** | Gestión de reservas, galería, precios y contenido. |
| /cotizador | **Cotizador en Línea** | **Dinámico — v2.0** | Formulario inteligente que genera cotización automática por email. |
| /reservaciones | **Portal de Reservaciones** | **Dinámico — v2.0** | Calendario de disponibilidad y pago en línea. |

# **4\. Requerimientos Funcionales — Detalle por Sección**

## **4.1 Sección Hero / Portada**

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RF-01** | **Video de fondo en loop** | **Alta** | Video en autoplay silenciado que muestre los tres efectos en secuencia (sparkular, burbujas, luces). Formato MP4 optimizado \+ fallback WebP/imagen estática. |
| **RF-02** | **Overlay de texto sobre video** | **Alta** | Texto del eslogan del negocio superpuesto al video con suficiente contraste. Tipografía grande, bold, impactante. |
| **RF-03** | **CTAs principales en Hero** | **Alta** | Dos botones visibles: 'Ver efectos' (ancla a las secciones) y 'Cotiza tu evento' (abre WhatsApp o formulario). Diseño contrastante sobre el video. |
| **RF-04** | **Indicador de scroll** | **Media** | Animación sutil (flecha o ícono pulsante) que indique al usuario que puede hacer scroll para explorar el contenido. |
| **RF-05** | **Partículas animadas opcionales** | **Baja** | Si el video no carga o el dispositivo es de gama baja, mostrar un fondo con partículas CSS animadas que simulen chispas o puntos de luz. |

## **4.2 Sección Sparkular — Máquina de Chispas**

| ✨ | Objetivo de Comunicación El visitante debe entender en menos de 10 segundos que las chispas son seguras (en frío), controlables y crean el momento más memorable del evento. El miedo al fuego debe disiparse visualmente. |
| :---: | :---- |

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RF-06** | **Video demo Sparkular** | **Alta** | Video en loop o reproducible del efecto Sparkular en acción en un evento real. Preferentemente vertical (9:16) para impacto móvil o horizontal 16:9. |
| **RF-07** | **Demo interactiva de chispas** | **Alta** | Botón o área interactiva en la página que al hacer clic/touch dispare una animación CSS/Canvas que simule una ráfaga de chispas doradas. No requiere video, es generada en código. |
| **RF-08** | **Badge de seguridad visible** | **Alta** | Ícono o badge prominente que diga: 'Chispas en Frío — Seguro en interiores — No es pirotecnia'. Diseño confiable, no alarmante. |
| **RF-09** | **Especificaciones técnicas** | **Media** | Tabla o lista con: altura máxima de la fuente, duración de ráfaga, tipo de espacio recomendado, consumo eléctrico y radio de seguridad. |
| **RF-10** | **Galería de momentos Sparkular** | **Media** | 4-6 fotos de eventos reales donde se usó la máquina. Lightbox al hacer clic para ver en grande. |
| **RF-11** | **CTA Sparkular** | **Alta** | Botón 'Quiero esto en mi evento' que lleva a WhatsApp con mensaje predefinido: '¡Hola\! Me interesa el Sparkular para mi evento el \[fecha\]'. |

## **4.3 Sección Bubble Machine**

| 🫧 | Objetivo de Comunicación Las burbujas con humo son el efecto más fotogénico y viral. El sitio debe transmitir que este es el efecto que hace que los invitados saquen el teléfono de inmediato para grabar. |
| :---: | :---- |

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RF-12** | **Video demo Bubble Machine** | **Alta** | Video en loop de burbujas flotando con humo en su interior, idealmente en un evento con personas. Debe verse elegante y mágico, no industrial. |
| **RF-13** | **Animación de burbujas CSS** | **Alta** | Animación CSS de burbujas flotando hacia arriba en la sección. Las burbujas deben tener efecto de transparencia y movimiento orgánico suave (no mecánico). Pueden explotar suavemente al contacto con el borde superior. |
| **RF-14** | **Toggle: Burbujas / Con Humo** | **Media** | Switch o botón que permita al usuario ver la diferencia visual entre las burbujas normales y las burbujas con humo. Alterna entre dos videos o dos estados de la animación CSS. |
| **RF-15** | **Showcase de fotos sociales** | **Alta** | Grid de 6-8 capturas de pantalla o fotos de eventos donde el efecto es claramente visible. Énfasis en fotos de Instagram/TikTok del efecto para reforzar el potencial viral. |
| **RF-16** | **CTA Bubble Machine** | **Alta** | Botón 'Haz tu evento viral' con enlace a WhatsApp. Mensaje predefinido alusivo a la Bubble Machine. |
| **RF-17** | **Nota sobre el humo** | **Media** | Párrafo o badge que explique que el humo es inodoro, no tóxico y no activa detectores de humo. Importante para venues con alarmas. |

## **4.4 Sección Galería de Eventos**

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RF-26** | **Grid de galería responsivo** | **Alta** | Galería en formato Masonry o grid uniforme con fotos de eventos reales usando los dos equipos. Mínimo 12 imágenes en lanzamiento. |
| **RF-27** | **Filtros por tipo de efecto** | **Media** | Tabs o chips de filtro: Todos / Sparkular / Bubble Machine. Al seleccionar, la galería se filtra con animación suave (fade/slide). |
| **RF-28** | **Lightbox al hacer clic** | **Alta** | Al hacer clic en cualquier imagen, se abre en lightbox de pantalla completa con navegación prev/next y botón de cierre. Swipe en móvil. |
| **RF-29** | **Videos en la galería** | **Alta** | La galería debe soportar videos además de imágenes. Los videos muestran un thumbnail estático y se reproducen al hacer clic (dentro del lightbox). |
| **RF-30** | **Testimonios integrados** | **Media** | Junto a algunas fotos, incluir citas cortas de clientes (nombre, tipo de evento) que refuercen la prueba social. |

## **4.5 Sección Contacto y Reservación**

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RF-31** | **Botón WhatsApp flotante** | **Alta** | Botón flotante de WhatsApp visible en todo el sitio (posición fija inferior derecha). Número y mensaje predefinido configurable en config.js. |
| **RF-32** | **Formulario de contacto** | **Alta** | Campos: Nombre completo, Teléfono, Correo electrónico, Tipo de evento (boda/quinceañera/corporativo/otro), Fecha tentativa, Máquinas de interés (checkboxes: Sparkular, Bubble Machine), Mensaje adicional. Envío vía Formspree o EmailJS. |
| **RF-33** | **Respuesta automática por email** | **Media** | Al enviar el formulario, el cliente recibe un correo de confirmación con los datos de contacto del negocio y un mensaje cálido. Implementado via Formspree/EmailJS. |
| **RF-34** | **Información de contacto** | **Alta** | Teléfono clickeable (tel:), correo electrónico, ciudad de operación y horario de atención. Con íconos reconocibles. |
| **RF-35** | **Mapa de Google Maps** | **Media** | Mapa embebido mostrando la ciudad o zona de cobertura del servicio. No es la dirección exacta sino la región de operación. |
| **RF-36** | **Links a redes sociales** | **Alta** | Instagram, TikTok y Facebook como mínimo. Estos son los canales donde el cliente ya vio el producto antes de llegar al sitio. |
| **RF-37** | **CTA de urgencia** | **Media** | Texto o badge: 'Disponibilidad limitada — Asegura tu fecha' para generar sentido de urgencia. |

# **5\. Requerimientos No Funcionales**

## **5.1 Diseño Visual e Identidad**

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RNF-01** | **Paleta de colores temática** | **Alta** | Fondo oscuro (negro/azul muy oscuro) como base. Colores de acento por máquina: Dorado/Naranja para Sparkular, Azul eléctrico para Bubble Machine. La oscuridad del fondo es intencionada: hace que los efectos se vean más brillantes. |
| **RNF-02** | **Tipografía impactante** | **Alta** | Títulos en fuente display bold (Bebas Neue, Montserrat Black o similar). Cuerpo en fuente limpia y legible (Inter, Poppins). Las fuentes comunican poder y modernidad. |
| **RNF-03** | **Animaciones al hacer scroll** | **Alta** | Los elementos entran con animación al aparecer en viewport (fade-in, slide-up). Implementado con Intersection Observer API. Sin librerías pesadas. |
| **RNF-04** | **Microinteracciones en CTA** | **Media** | Los botones principales tienen efecto hover con glow de color (box-shadow coloreado que pulsa). Comunica energía y acción. |
| **RNF-05** | **Estética de 'show business'** | **Alta** | El diseño general evoca el mundo del espectáculo: oscuro, vibrante, premium. Inspiración: sitios de DJ profesionales, efectos visuales para conciertos, producción de eventos. |

## **5.2 Rendimiento — Gestión de Media Pesada**

El sitio manejará videos de alta calidad, animaciones y potencialmente Three.js. La estrategia de rendimiento es crítica:

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RNF-06** | **Videos comprimidos y optimizados** | **Alta** | Videos en formato MP4 H.264 con bitrate ajustado para web. Máximo 8MB por video de fondo en hero. Versión comprimida adicional para móvil (360p, máx 3MB). |
| **RNF-07** | **Lazy loading de media** | **Alta** | Todos los videos e imágenes fuera del viewport inicial usan loading='lazy'. Los videos de sección no se cargan hasta que el usuario se acerca a esa sección (Intersection Observer). |
| **RNF-08** | **Fallback para conexiones lentas** | **Alta** | Si el video no ha cargado, mostrar imagen estática de alta calidad como placeholder. El usuario no ve un espacio en blanco. |
| **RNF-09** | **Simulador con throttle en móvil** | **Media** | El simulador de luces detecta si el dispositivo es móvil o de baja potencia (navigator.hardwareConcurrency) y reduce la complejidad de la animación automáticamente. |
| **RNF-10** | **PageSpeed Insights móvil ≥ 75** | **Alta** | El sitio tiene mucha media, así que el target es ligeramente más flexible. Mínimo 75/100 en móvil y 85/100 en desktop. Optimización de imágenes WebP obligatoria. |

## **5.3 Diseño Responsivo — Prioridad Móvil**

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RNF-11** | **Móvil como diseño primario** | **Alta** | El 70%+ del tráfico vendrá de Instagram y TikTok en móvil. El diseño móvil es el diseño principal. Desktop es la expansión. |
| **RNF-12** | **Hero vertical en móvil** | **Alta** | En móvil (\<768px) el hero usa video o imagen en formato vertical (9:16) si está disponible, para mayor impacto en la pantalla del teléfono. |
| **RNF-13** | **Simulador touch-friendly** | **Alta** | Todos los controles del simulador (presets, sliders, selector de color) funcionan perfectamente con touch. Targets mínimos de 44x44px. |
| **RNF-14** | **WhatsApp como acción primaria** | **Alta** | En móvil, el CTA principal es el botón de WhatsApp (no el formulario). El formulario es secundario. |

## **5.4 SEO Local**

| ID | Requerimiento | Prioridad | Descripción |
| ----- | :---- | ----- | :---- |
| **RNF-15** | **Keywords de efecto \+ ciudad** | **Alta** | Optimización para búsquedas como 'renta sparkular Durango', 'máquina de chispas boda Durango', 'bubble machine eventos México'. Incluir keywords en títulos, meta descriptions y alt text. |
| **RNF-16** | **Schema LocalBusiness \+ Event** | **Alta** | Implementar JSON-LD con schema de LocalBusiness y EventSeries. Mejora visibilidad en Google local y Google Maps. |
| **RNF-17** | **Open Graph para redes sociales** | **Alta** | Cuando alguien comparte el sitio en WhatsApp, Instagram o Facebook, debe aparecer una imagen de vista previa espectacular (imagen de los efectos en acción). |
| **RNF-18** | **Velocidad como factor SEO** | **Alta** | Core Web Vitals impactan el ranking. El sitio debe pasar los umbrales de Google: LCP \< 2.5s, CLS \< 0.1, INP \< 200ms. |

# **6\. Arquitectura Técnica Propuesta**

## **6.1 Stack v1.0 — Sitio Estático**

| HTML5 \+ CSS3 \+ JS ES6+ | Base del sitio. Sin frameworks pesados en v1.0 para maximizar velocidad de carga. |
| :---- | :---- |
| **Canvas 2D API** | Simulador de luces (Opción B recomendada). Nativo en todos los navegadores modernos. |
| **Intersection Observer API** | Lazy loading de media y animaciones de entrada al hacer scroll. |
| **CSS Custom Properties** | Variables de color por máquina (:root). Permite cambiar el tema de cada sección. |
| **Formspree / EmailJS** | Backend de formulario sin servidor. Gratis hasta 50 envíos/mes. |
| **Google Fonts** | Bebas Neue (títulos) \+ Inter o Poppins (cuerpo). Preconnect obligatorio. |
| **Font Awesome 6 Free** | Íconos para contacto, redes sociales y badges de seguridad. |
| **Swiper.js (ligero)** | Carrusel para galería y testimonios. 39KB minificado. CDN con SRI. |
| **Netlify / Vercel** | Hosting estático gratuito. CI/CD automático desde GitHub. HTTPS incluido. |

## **6.2 Stack v2.0 — Versión Dinámica**

| Next.js 14 (App Router) | Framework React con SSG+SSR. Permite páginas estáticas y dinámicas en el mismo proyecto. |
| :---- | :---- |
| **Tailwind CSS v3** | Utilidades CSS que aceleran el desarrollo de componentes responsivos. |
| **Supabase** | Backend as a Service: base de datos PostgreSQL, autenticación y Storage para media. |
| **Stripe / MercadoPago** | Procesamiento de pagos para reservaciones en línea y depósitos. |
| **Resend / SendGrid** | Servicio de correo transaccional para confirmaciones y recordatorios automáticos. |
| **Cloudinary** | CDN de imágenes y videos con transformación automática (resize, WebP, compresión). |
| **Vercel** | Hosting con edge functions para la parte dinámica. Compatible con Next.js de forma nativa. |

## **6.3 Estructura de Archivos — v1.0**

| Archivo / Directorio | Contenido y Responsabilidad |
| :---- | :---- |
| /index.html | Página principal. Una sola página con todas las secciones via anclas. |
| /css/variables.css | :root con paleta de colores por máquina, tipografía, breakpoints. |
| /css/base.css | Reset, tipografía global, utilidades. |
| /css/layout.css | Grid system, secciones, nav, footer. |
| /css/sparkular.css | Estilos específicos de la sección Sparkular. |
| /css/bubble.css | Estilos específicos de la Bubble Machine. |
| /css/luces.css | Estilos del simulador de luces y sección de iluminación. |
| /css/galeria.css | Grid de galería, lightbox. |
| /js/config.js | Config central: WhatsApp, redes sociales, textos clave, colores. |
| /js/main.js | Orquestación: scroll animations, nav, lazy loading, WhatsApp btn. |
| /js/sparkular-demo.js | Animación de chispas interactiva al hacer clic. |
| /js/bubble-animation.js | Animación CSS/JS de burbujas flotantes. Toggle burbujas/humo. |
| /js/light-simulator.js | Motor del simulador de luces: Canvas, presets, controles. |
| /js/gallery.js | Filtros de galería, lightbox, soporte de video en galería. |
| /js/contact-form.js | Validación y envío del formulario de contacto. |
| /assets/videos/hero-loop.mp4 | Video de fondo del hero (máx 8MB). Incluir versión \-mobile.mp4. |
| /assets/videos/sparkular.mp4 | Demo de chispas para la sección Sparkular. |
| /assets/videos/bubble.mp4 | Demo de burbujas para la sección Bubble Machine. |
| /assets/videos/luces.mp4 | Demo del juego de luces para la sección de iluminación. |
| /assets/images/ | Imágenes de galería en WebP \+ fallback JPG. Nombradas en kebab-case. |
| /sitemap.xml | Sitemap para indexación en Google. |
| /robots.txt | Directivas para crawlers. |
| /README.md | Instrucciones de configuración, personalización y despliegue. |

# **7\. Casos de Uso Principales**

## **CU-01: Novia busca efecto de chispas para su boda**

| Actor | Novia planificando su boda. Dispositivo: iPhone, llegó desde Instagram. |
| :---- | :---- |
| **Trigger** | Vio un Reel en Instagram de una entrada de novios con Sparkular y quiere saber el precio. |
| **Flujo** | 1\. Abre el sitio desde el link en bio de Instagram. 2\. El hero en video le muestra de inmediato los efectos. 3\. Hace scroll hasta la sección Sparkular. 4\. Hace clic en 'Dispara las chispas' — ve la animación. 5\. Lee que son seguras en interiores. 6\. Hace clic en 'Quiero esto en mi evento' — se abre WhatsApp. 7\. Envía el mensaje predefinido con su fecha. |
| **Resultado** | El negocio recibe una consulta calificada de WhatsApp con el contexto del evento. |
| **Puntos críticos** | La animación de chispas debe funcionar perfectamente en iOS Safari. El botón de WhatsApp debe abrir directamente la app, no el navegador. |

## **CU-02: Mamá cotiza Bubble Machine para quinceañera de su hija**

| Actor | Mamá de 40 años organizando una quinceañera. Dispositivo: Android, llegó de Facebook. |
| :---- | :---- |
| **Trigger** | Una amiga le compartió el link del sitio por WhatsApp con el mensaje 'mira esto para la fiesta de tu hija'. |
| **Flujo** | 1\. Abre el link en el navegador de WhatsApp (WebView). 2\. Ve el hero con los efectos. 3\. Navega a la sección Bubble Machine. 4\. Ve el video de burbujas con humo y le encanta para las fotos. 5\. Activa el toggle para ver 'Con Humo'. 6\. Le preocupa si mancha los vestidos — lee el badge de seguridad. 7\. Hace clic en 'Haz tu evento viral' y envía WhatsApp. |
| **Resultado** | Contacto directo por WhatsApp. El negocio puede cerrar la venta en la misma conversación. |
| **Puntos críticos** | El toggle de burbujas/humo debe funcionar en WebView de WhatsApp (Android). El badge de seguridad de ropa no mancha debe ser prominente. |

# **8\. Roadmap de Desarrollo**

| \# | Fase | Entregables | Duración | Prioridad |
| ----- | :---- | :---- | ----- | ----- |
| **1** | **Diseño UI/UX** | Wireframes, moodboard, prototipo Figma de las 7 secciones clave | 4-6 días | **Crítica** |
| **2** | **Base HTML/CSS** | Estructura semántica de todas las secciones, variables CSS, tipografía, paleta | 2-3 días | **Alta** |
| **3** | **Hero \+ Video** | Hero con video de fondo, overlays, CTAs, animación de scroll | 2 días | **Alta** |
| **4** | **Sección Sparkular** | Video demo, animación de chispas interactiva, badge de seguridad | 3-4 días | **Alta** |
| **5** | **Sección Bubble** | Video demo, animación CSS de burbujas, toggle burbujas/humo | 3-4 días | **Alta** |
| **6** | **Galería \+ Filtros** | Grid responsivo, filtros por equipo, lightbox con video | 3-4 días | **Alta** |
| **7** | **Contacto \+ WhatsApp** | Formulario, botón flotante, mapa, redes sociales | 2 días | **Alta** |
| **8** | **SEO \+ Rendimiento** | Meta tags, schema, Open Graph, optimización de imágenes y videos, PageSpeed | 2-3 días | **Alta** |
| **9** | **QA \+ Despliegue** | Pruebas cross-browser, iOS/Android, formulario, deploy a Netlify | 2 días | **Alta** |

Duración total estimada: 30 a 45 días hábiles para la versión estática completa v1.0, según disponibilidad de material (videos, fotos) por parte del cliente.

# **9\. Criterios de Aceptación**

## **9.1 Funcionales**

1. La animación de chispas en la sección Sparkular se dispara al hacer clic/touch y es visualmente impactante.

2. Los 4 presets del simulador producen experiencias visualmente distintas y claramente diferenciadas entre sí.

3. El toggle burbujas / burbujas con humo alterna correctamente entre los dos estados.

4. El formulario de contacto envía el correo y el usuario recibe confirmación.

5. El botón de WhatsApp abre la conversación correctamente desde móvil (app) y desde desktop (web.whatsapp.com).

6. La galería filtra por tipo de efecto con animación suave y el lightbox funciona con video.

## **9.2 Rendimiento y Calidad**

7. Google PageSpeed Insights: mínimo 75/100 en móvil y 85/100 en desktop.

8. El hero con video carga en menos de 3 segundos en conexión 4G simulada.

9. El simulador de luces no causa caídas de fps notables en un dispositivo móvil de gama media (iPhone 11 / Samsung A52 o equivalente).

10. No hay overflow horizontal en ninguna resolución desde 320px hasta 1920px.

11. El sitio pasa validación de HTML5 en W3C Validator sin errores críticos.

# **10\. Funcionalidades Futuras — Versión 2.0 Dinámica**

* Cotizador en Línea: El cliente selecciona máquinas, duración del evento y fecha. El sistema genera una cotización PDF automática enviada por correo.

* Calendario de Disponibilidad: Vista de calendario donde el cliente puede ver fechas disponibles y bloquear la suya con un depósito en línea.

* Panel de Administración: El dueño puede gestionar reservaciones, subir fotos/videos a la galería y actualizar precios sin tocar código.

* Sistema de Reseñas: Los clientes reciben un enlace post-evento para dejar su reseña con foto. Se publican automáticamente en el sitio.

* Integración con Google My Business: Sincronización de reseñas y disponibilidad con el perfil de Google del negocio.

* Notificaciones Automáticas: Recordatorios por WhatsApp/SMS al cliente 48h antes del evento con detalles logísticos.

* Galería Viral: Sección donde clientes pueden subir sus propias fotos/videos usando un hashtag del negocio. UGC como prueba social.

* Multi-idioma: Versión en inglés para atraer clientes en ciudades fronterizas o turistas.

*— Fin del Documento SRS v1.0 —*

Efectos Especiales para Eventos  ·  Confidencial  ·  Marzo 2026