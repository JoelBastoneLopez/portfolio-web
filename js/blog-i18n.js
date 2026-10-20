/**
 * JBL Studio — Blog Client-Side Translation Engine (i18n)
 * Provides seamless, zero-reload translation between English and Spanish
 * with delightful comic/elegant micro-animations and persistence.
 */

(function () {
  'use strict';

  // Master UI and Technical Translation Dictionary
  const I18N_DICT = {
    // Navigation
    "Projects": "Proyectos",
    "About": "Sobre mí",
    "Blog": "Blog",
    "Reviews": "Reseñas",
    "Contact": "Contacto",

    // Eyebrows & Headers
    "Joel Bastone Lopez Journal & Technical Writing": "Joel Bastone Lopez Diario & Artículos Técnicos",
    "JBL Journal & Technical Writing": "Joel Bastone Lopez Diario & Artículos Técnicos",
    "Thought, process, and 3D technology.": "Pensamiento, proceso y tecnología 3D.",
    "Production breakdowns, real-time WebGL engineering, pipeline optimizations, and art direction for global brands.": "Desgloses de producción, ingeniería WebGL en tiempo real, optimización de pipelines y dirección de arte para marcas globales.",

    // Coming Soon / Empty State
    "Coming Soon": "Próximamente",
    "New articles & breakdowns underway": "Nuevos artículos y desgloses técnicos en preparación",
    "Currently preparing the first deep-dive articles on real-time WebGL shaders, PBR material pipelines, and commercial 3D art direction.": "Actualmente preparando los primeros artículos técnicos en profundidad sobre shaders WebGL en tiempo real, pipelines PBR y dirección de arte 3D comercial.",
    "✦ Real-time 3D & Three.js": "✦ 3D en tiempo real & Three.js",
    "✦ Blender & Substance Pipelines": "✦ Pipelines de Blender & Substance",
    "✦ High-Fidelity Product CGI": "✦ CGI de Producto de Alta Fidelidad",
    "✦ Shader Architecture": "✦ Arquitectura de Shaders",

    // Search & Filter Controls
    "All": "Todos",
    "Search by topic or keyword...": "Buscar por tema o palabra clave...",
    "Search articles, shaders, CGI pipelines...": "Buscar artículos, shaders, pipelines CGI...",
    "Read article": "Leer artículo",
    "Read article ↗": "Leer artículo ↗",
    "5 min read": "5 min de lectura",

    // Newsletter
    "Be the first to read new releases": "Sé el primero en leer nuevos artículos",
    "Subscribe to receive exclusive production breakdowns, optimization techniques, and 3D insights as soon as they drop.": "Suscríbete para recibir desgloses de producción exclusivos, técnicas de optimización y análisis 3D en cuanto se publiquen.",
    "Your email address...": "Tu correo electrónico...",
    "Subscribe": "Suscribirse",
    "Thank you for subscribing to the JBL Journal!": "¡Gracias por suscribirte al Journal de Joel Bastone Lopez!",

    // Article Meta & Actions
    "Back to Journal & Articles": "Volver a Artículos & Journal",
    "Share this Article": "Compartir este Artículo",
    "Found this breakdown insightful? Share with your network": "¿Te pareció interesante este análisis? Compártelo con tu red profesional",
    "Share Post": "Compartir Post",
    "Copy code": "Copiar código",
    "Copied!": "¡Copiado!",
    "Key Takeaways & Conclusions": "Conclusiones y Puntos Clave",
    "Key Technical Takeaway / Pro Tip": "Recomendación Técnica Clave / Pro Tip",
    "Tags:": "Etiquetas:",
    "About the author": "Sobre el autor",
    "3D CGI Artist & Real-time WebGL Developer": "Artista CGI 3D & Desarrollador WebGL en Tiempo Real",
    "3D Artist & WebGL Developer": "Artista 3D & Desarrollador WebGL",
    "Specializing in luxury product CGI, art direction, and interactive 3D experiences with Three.js for international brands.": "Especializado en CGI para productos de lujo, dirección de arte y experiencias 3D interactivas con Three.js para marcas internacionales.",
    "Let's work together →": "Trabajemos juntos →",
    "Explore more articles →": "Explorar más artículos →",

    // Article Template Blueprint Placeholders
    "Article Template — Blueprint | JBL Journal": "Plantilla de Artículo — Base | Journal JBL",
    "[Category]": "[Categoría]",
    "[Publication Date]": "[Fecha de Publicación]",
    "[X min read]": "[X min de lectura]",
    "[Main Article Headline: Apple Editorial Style with High Impact]": "[Titular Principal: Estilo Editorial Apple con Alto Impacto]",
    "[Executive Summary / Lede: Introductory paragraph in prominent typography synthesizing the core takeaways of the article].": "[Resumen Ejecutivo / Lede: Párrafo introductorio en tipografía prominente que sintetiza los puntos clave del artículo].",
    "[Opening paragraph of the article. Introduce the project context, technical challenge, or key breakthrough here].": "[Párrafo de apertura del artículo. Introduce el contexto del proyecto, el desafío técnico o el avance clave aquí].",
    "[Standard body paragraph exploring the problem, methodology, or background context].": "[Párrafo estándar del cuerpo explorando el problema, la metodología o el contexto de fondo].",
    "[Section Subheading: Key Focus Area]": "[Subtítulo de Sección: Área de Enfoque Clave]",
    "[Detailed section explanation with technical reasoning, workflow decisions, and implementation details].": "[Explicación detallada de la sección con razonamiento técnico, decisiones de flujo de trabajo y detalles de implementación].",
    "[Translucent glass callout highlighting critical architectural advice, performance warnings, or industry best practices].": "[Recuadro de cristal traslúcido destacando consejos arquitectónicos críticos, advertencias de rendimiento o mejores prácticas de la industria].",
    "\"[Compelling pull-quote or project takeaway that encapsulates the philosophy of the work].\"": "\"[Cita editorial destacada o conclusión del proyecto que sintetiza la filosofía del trabajo].\"",
    "— [Author or Source Name]": "— [Nombre del Autor o Fuente]",
    "Point 1:": "Punto 1:",
    "Point 2:": "Punto 2:",
    "Point 3:": "Punto 3:",
    "[First concise takeaway].": "[Primera conclusión concisa].",
    "[Second concise takeaway].": "[Segunda conclusión concisa].",
    "[Third concise takeaway].": "[Tercera conclusión concisa].",
    "Production render detail": "Detalle de render de producción",
    "Variant comparison": "Comparación de variantes",

    // Sample / Live Article: Behind the Glass
    "Behind the Glass: Engineering Real-Time PBR Shaders for E-Commerce": "Detrás del Cristal: Ingeniería de Shaders PBR en Tiempo Real para E-Commerce",
    "When luxury brands transition from traditional studio photography to interactive 3D configurators with Three.js, shader latency and texture memory allocation determine conversion rates.": "Cuando las marcas de lujo hacen la transición de la fotografía de estudio tradicional a configuradores 3D interactivos con Three.js, la latencia de los shaders y la memoria de texturas determinan las tasas de conversión.",
    "When luxury brands transition from traditional studio photography to interactive 3D configurators with Three.js or Shopify Storefront, the primary bottleneck is never the 3D model itself—it is shader latency and texture memory allocation on mobile hardware.": "Cuando las marcas de lujo pasan de la fotografía tradicional a configuradores 3D interactivos con Three.js o Shopify Storefront, el cuello de botella nunca es el modelo 3D: es la latencia de los shaders y el consumo de memoria de texturas en hardware móvil.",
    "Optimizing Geometry with Draco Compression": "Optimizando la Geometría con Compresión Draco",
    "Key Takeaway": "Punto Clave",
    "Never render uncompressed 4K textures in a WebGL configurator. Allocate mipmaps properly, convert to KTX2/Basis Universal, and keep memory bandwidth under 120MB per session.": "Nunca renderices texturas 4K sin comprimir en un configurador WebGL. Configura mipmaps correctamente, convierte a KTX2/Basis Universal y mantén el ancho de banda de memoria por debajo de 120MB por sesión.",
    "\"Real-time 3D on the web is not just about visual fidelity; it is an exercise in performance budgeting.\"": "\"El 3D en tiempo real en la web no se trata solo de fidelidad visual; es un ejercicio de presupuesto y optimización estricta de rendimiento.\"",

    // Live Article: Gaussian Splatting's Leap to E-commerce
    "Gaussian Splatting's Leap to E-commerce: We Finally Have a Standard": "El Salto de Gaussian Splatting al E-commerce: Por Fin Tenemos un Estándar",
    "Until very recently, implementing Gaussian Splatting (3DGS) on a website was a headache. Yes, the visual quality was mind-blowing, but the technical ecosystem was a mess: every viewer used a proprietary format, and building a scalable production pipeline for e-commerce seemed almost impossible.": "Hasta hace muy poco, implementar Gaussian Splatting (3DGS) en una web era un dolor de cabeza. Sí, la calidad visual era alucinante, pero el ecosistema técnico era un caos: cada visor utilizaba un formato propietario y construir un pipeline de producción escalable para e-commerce parecía casi imposible.",
    "In 2026, the Khronos Group ratified KHR_gaussian_splatting for glTF. How 3DGS is revolutionizing real-time photorealistic e-commerce with Three.js and WebGPU.": "En 2026, el Khronos Group ratificó KHR_gaussian_splatting para glTF. Cómo el 3DGS está revolucionando el e-commerce fotorrealista en tiempo real con Three.js y WebGPU.",
    "But 2026 brought the news we were waiting for: the Khronos Group has ratified the official KHR_gaussian_splatting extension for the glTF format.": "Pero 2026 trajo la noticia que estábamos esperando: el Khronos Group ha ratificado la extensión oficial KHR_gaussian_splatting para el formato glTF.",
    "Key Milestone for Web 3D": "Hito Clave para el 3D Web",
    "What does this mean in practice? Splats are now an official industry standard.": "¿Qué significa esto en la práctica? Los splats son ahora un estándar oficial de la industria.",
    "Pioneers in 3D Research": "Pioneros en Investigación 3D",
    "It's worth taking a pause to acknowledge that this leap didn't happen overnight. There are referents and artists who have been researching, teaching masterclasses, and spreading this technology long before it went \"mainstream\".": "Vale la pena hacer una pausa para reconocer que este salto no ocurrió de la noche a la mañana. Hay referentes y artistas que han estado investigando, impartiendo masterclasses y difundiendo esta tecnología mucho antes de que se volviera \"mainstream\".",
    "Personally, a big part of this technical vision comes from my former professor, Diego Viegas (known in the industry as Diego EV). He has been driving the use of advanced 3D and volumetric scanning in the Hispanic community for a long time. If you want to understand the workflow from scratch and generate captures on your own, I highly recommend watching his video tutorial on Gaussian Splatting on his YouTube channel.": "En lo personal, gran parte de esta visión técnica proviene de mi ex profesor, Diego Viegas (conocido en la industria como Diego EV). Ha sido un impulsor del 3D avanzado y el escaneo volumétrico en la comunidad hispana desde hace mucho tiempo. Si quieres entender el flujo de trabajo desde cero y generar capturas por tu cuenta, recomiendo enormemente ver su video tutorial sobre Gaussian Splatting en su canal de YouTube.",
    "The End of Format Chaos": "El Fin del Caos de Formatos",
    "For brands and agencies, relying on closed formats is a risk no one wants to take. The ratification of the glTF standard for 3DGS means you can now package a photorealistic product capture as easily as you export a JPG.": "Para marcas y agencias, depender de formatos cerrados es un riesgo que nadie quiere asumir. La ratificación del estándar glTF para 3DGS significa que ahora puedes empaquetar una captura de producto fotorrealista tan fácilmente como exportas un JPG.",
    "The main WebGL libraries have already taken note. Three.js integrated official native support in August of this year, and Babylon.js did so a few months earlier. The web workflow has finally been unified and democratized.": "Las principales librerías WebGL ya tomaron nota. Three.js integró soporte nativo oficial en agosto de este año, y Babylon.js lo hizo unos meses antes. El flujo de trabajo web finalmente se ha unificado y democratizado.",
    "Why E-commerce Needs This NOW": "Por Qué el E-commerce Necesita Esto AHORA",
    "Traditional photography has a limit to its visual impact, and classic 3D modeling (polygonal) usually struggles when it comes to complex materials like transparencies, reflective plastics, liquids, or furry organic textures—unless you use Ray Tracing (which is unfeasible in real-time on the web without frying the user's phone battery).": "La fotografía tradicional tiene un límite en su impacto visual, y el modelado 3D clásico (poligonal) suele tener dificultades cuando se trata de materiales complejos como transparencias, plásticos reflectantes, líquidos o texturas orgánicas con pelo—a menos que uses Ray Tracing (lo cual es inviable en tiempo real en la web sin agotar la batería del teléfono del usuario).",
    "Gaussian Splatting solves this by replacing geometry with the rendering of millions of semi-transparent ellipses generated from real photos. The final result is brutal:": "Gaussian Splatting resuelve esto reemplazando la geometría por el renderizado de millones de elipses semitransparentes generadas a partir de fotos reales. El resultado final es brutal:",
    "The Dual Advantage of 3DGS": "La Doble Ventaja del 3DGS",
    "Absolute photorealism:": "Fotorrealismo absoluto:",
    "It captures light, exact view-dependent reflections, and textures exactly as they are in the real world.": "Captura la luz, reflejos exactos dependientes del ángulo de visión y texturas exactamente como son en el mundo real.",
    "Extreme web performance:": "Rendimiento web extremo:",
    "It runs at 60-120 frames per second directly in the mobile browser using WebGL and WebGPU. No external apps required.": "Corre a 60-120 cuadros por segundo directamente en el navegador móvil utilizando WebGL y WebGPU. Sin necesidad de aplicaciones externas.",
    "A Real and Mature Production Pipeline": "Un Pipeline de Producción Real y Maduro",
    "Giant platforms, like Zillow in the real estate sector, have already proven this year that 3DGS scales to enterprise-level production.": "Plataformas gigantes, como Zillow en el sector inmobiliario, ya demostraron este año que el 3DGS escala a producción a nivel empresarial.",
    "You can check out an interactive example at this link:": "Puedes ver un ejemplo interactivo en este enlace:",
    "Moreover, cloud tools like SuperSplat (by PlayCanvas) now allow you to clean, crop, and edit these point cloud scenes directly in the browser in a super intuitive way.": "Además, herramientas en la nube como SuperSplat (de PlayCanvas) ahora te permiten limpiar, recortar y editar estas escenas de nubes de puntos directamente en el navegador de manera súper intuitiva.",
    "We have officially moved from the \"technological experiment\" stage to the \"massive commercial production\" stage.": "Hemos pasado oficialmente de la etapa de \"experimento tecnológico\" a la de \"producción comercial masiva\".",
    "If your online store is still showcasing flagship products with a flat gallery of 4 photos and a compressed video, you are giving away the wow factor to your competition. The integration of hyper-realistic interactive 3D is no longer a technical luxury; it's the new standard that skyrockets conversions. And now that files finally have a universal format, it's the exact moment to make the leap.": "Si tu tienda online sigue mostrando productos insignia con una galería plana de 4 fotos y un video comprimido, le estás regalando el factor sorpresa a tu competencia. La integración de 3D interactivo hiperrealista ya no es un lujo técnico; es el nuevo estándar que dispara las conversiones. Y ahora que los archivos finalmente tienen un formato universal, es el momento exacto para dar el salto.",
    "Real-time Gaussian Splatting (3DGS) volumetric capture running natively via glTF KHR_gaussian_splatting.": "Captura volumétrica en tiempo real con Gaussian Splatting (3DGS) ejecutándose nativamente mediante glTF KHR_gaussian_splatting.",
    "Interactive 3D Gaussian Splat": "Gaussian Splat 3D Interactivo",
    "camara.ply • 209k Splats": "camara.ply • 209k Splats",
    "Reset": "Restablecer"
  };

  // Build reverse lookup dictionary (ES -> EN)
  const REVERSE_DICT = {};
  for (const [en, es] of Object.entries(I18N_DICT)) {
    REVERSE_DICT[es] = en;
  }

  // Current language state
  let currentLang = localStorage.getItem('jbl_blog_lang') || 'en';

  /**
   * Comic & Elegant Particle Confetti Burst
   * Spawns playful floating particles from the button coordinates
   */
  function spawnComicParticles(button) {
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const particleCount = 7;
    const emojis = ['✨', '🌐', '✦', '🇪🇸', '🇬🇧', '⭐', '💫'];

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('span');
      p.className = 'comic-particle';
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 30;
      const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 20;
      
      const vx = (Math.random() - 0.5) * 140;
      const vy = -40 - Math.random() * 80;
      const rot = (Math.random() - 0.5) * 360;

      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.setProperty('--vx', `${vx}px`);
      p.style.setProperty('--vy', `${vy}px`);
      p.style.setProperty('--rot', `${rot}deg`);

      document.body.appendChild(p);

      setTimeout(() => {
        if (p.parentNode) p.parentNode.removeChild(p);
      }, 750);
    }
  }

  // HTML-level translations for elements containing child nodes (<a>, <em>, <code>, <strong>)
  const HTML_I18N = [
    {
      en: 'Until very recently, implementing Gaussian Splatting <em>(3DGS)</em> on a website was a headache. Yes, the visual quality was mind-blowing, but the technical ecosystem was a mess: every viewer used a proprietary format, and building a scalable production pipeline for e-commerce seemed almost impossible.',
      es: 'Hasta hace muy poco, implementar Gaussian Splatting <em>(3DGS)</em> en una web era un dolor de cabeza. Sí, la calidad visual era alucinante, pero el ecosistema técnico era un caos: cada visor utilizaba un formato propietario y construir un pipeline de producción escalable para e-commerce parecía casi imposible.'
    },
    {
      en: 'But 2026 brought the news we were waiting for: the <a href="https://www.khronos.org/" target="_blank" rel="noopener noreferrer">Khronos Group</a> has ratified the official <code>KHR_gaussian_splatting</code> extension for the glTF format.',
      es: 'Pero 2026 trajo la noticia que estábamos esperando: el <a href="https://www.khronos.org/" target="_blank" rel="noopener noreferrer">Khronos Group</a> ha ratificado la extensión oficial <code>KHR_gaussian_splatting</code> para el formato glTF.'
    },
    {
      en: 'Personally, a big part of this technical vision comes from my former professor, <strong style="color:#ffffff;">Diego Viegas</strong> <em>(known in the industry as <a href="https://www.instagram.com/diegoev_1?rpxt=aW5rOG5keWk0ZjNu" target="_blank" rel="noopener noreferrer">Diego EV</a>)</em>. He has been driving the use of advanced 3D and volumetric scanning in the Hispanic community for a long time. If you want to understand the workflow from scratch and generate captures on your own, I highly recommend watching <a href="https://www.youtube.com/watch?v=NQ851rPuryw" target="_blank" rel="noopener noreferrer">his video tutorial on Gaussian Splatting</a> on his YouTube channel.',
      es: 'En lo personal, gran parte de esta visión técnica proviene de mi ex profesor, <strong style="color:#ffffff;">Diego Viegas</strong> <em>(conocido en la industria como <a href="https://www.instagram.com/diegoev_1?rpxt=aW5rOG5keWk0ZjNu" target="_blank" rel="noopener noreferrer">Diego EV</a>)</em>. Ha sido un impulsor del 3D avanzado y el escaneo volumétrico en la comunidad hispana desde hace mucho tiempo. Si quieres entender el flujo de trabajo desde cero y generar capturas por tu cuenta, recomiendo enormemente ver <a href="https://www.youtube.com/watch?v=NQ851rPuryw" target="_blank" rel="noopener noreferrer">su video tutorial sobre Gaussian Splatting</a> en su canal de YouTube.'
    },
    {
      en: 'The main WebGL libraries have already taken note. <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">Three.js</a> integrated official native support in August of this year, and <a href="https://www.babylonjs.com/" target="_blank" rel="noopener noreferrer">Babylon.js</a> did so a few months earlier. The web workflow has finally been unified and democratized.',
      es: 'Las principales librerías WebGL ya tomaron nota. <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">Three.js</a> integró soporte nativo oficial en agosto de este año, y <a href="https://www.babylonjs.com/" target="_blank" rel="noopener noreferrer">Babylon.js</a> lo hizo unos meses antes. El flujo de trabajo web finalmente se ha unificado y democratizado.'
    },
    {
      en: 'Traditional photography has a limit to its visual impact, and classic 3D modeling <em>(polygonal)</em> usually struggles when it comes to complex materials like transparencies, reflective plastics, liquids, or furry organic textures—unless you use Ray Tracing <em>(which is unfeasible in real-time on the web without frying the user\'s phone battery)</em>.',
      es: 'La fotografía tradicional tiene un límite en su impacto visual, y el modelado 3D clásico <em>(poligonal)</em> suele tener dificultades cuando se trata de materiales complejos como transparencias, plásticos reflectantes, líquidos o texturas orgánicas con pelo—a menos que uses Ray Tracing <em>(lo cual es inviable en tiempo real en la web sin agotar la batería del teléfono del usuario)</em>.'
    },
    {
      en: '<strong style="color:#ffffff;">Absolute photorealism:</strong> It captures light, exact view-dependent reflections, and textures exactly as they are in the real world.',
      es: '<strong style="color:#ffffff;">Fotorrealismo absoluto:</strong> Captura la luz, reflejos exactos dependientes del ángulo de visión y texturas exactamente como son en el mundo real.'
    },
    {
      en: '<strong style="color:#ffffff;">Extreme web performance:</strong> It runs at 60-120 frames per second directly in the mobile browser using WebGL and WebGPU. No external apps required.',
      es: '<strong style="color:#ffffff;">Rendimiento web extremo:</strong> Corre a 60-120 cuadros por segundo directamente en el navegador móvil utilizando WebGL y WebGPU. Sin necesidad de aplicaciones externas.'
    },
    {
      en: 'Giant platforms, like <a href="https://www.zillow.com/" target="_blank" rel="noopener noreferrer">Zillow</a> in the real estate sector, have already proven this year that 3DGS scales to enterprise-level production.',
      es: 'Plataformas gigantes, como <a href="https://www.zillow.com/" target="_blank" rel="noopener noreferrer">Zillow</a> en el sector inmobiliario, ya demostraron este año que el 3DGS escala a producción a nivel empresarial.'
    },
    {
      en: 'You can check out an interactive example at this link: <a href="https://www.zillow.com/showcase/demo/bay-area?imxlb=s,0" target="_blank" rel="noopener noreferrer">www.zillow.com/showcase/demo</a>.',
      es: 'Puedes ver un ejemplo interactivo en este enlace: <a href="https://www.zillow.com/showcase/demo/bay-area?imxlb=s,0" target="_blank" rel="noopener noreferrer">www.zillow.com/showcase/demo</a>.'
    },
    {
      en: 'Moreover, cloud tools like SuperSplat <em>(by PlayCanvas)</em> now allow you to clean, crop, and edit these point cloud scenes directly in the browser in a super intuitive way.',
      es: 'Además, herramientas en la nube como SuperSplat <em>(de PlayCanvas)</em> ahora te permiten limpiar, recortar y editar estas escenas de nubes de puntos directamente en el navegador de manera súper intuitiva.'
    },
    {
      en: 'Specializing in luxury product CGI, art direction, and interactive 3D experiences with Three.js and real-time volumetric pipelines for international brands.',
      es: 'Especializado en CGI para productos de lujo, dirección de arte y experiencias 3D interactivas con Three.js y pipelines volumétricos en tiempo real para marcas internacionales.'
    },
    {
      en: 'What does this mean in practice? Splats are now an official industry standard.',
      es: '¿Qué significa esto en la práctica? Los splats son ahora un estándar oficial de la industria.'
    },
    {
      en: 'It\'s worth taking a pause to acknowledge that this leap didn\'t happen overnight. There are referents and artists who have been researching, teaching masterclasses, and spreading this technology long before it went "mainstream".',
      es: 'Vale la pena hacer una pausa para reconocer que este salto no ocurrió de la noche a la mañana. Hay referentes y artistas que han estado investigando, impartiendo masterclasses y difundiendo esta tecnología mucho antes de que se volviera "mainstream".'
    },
    {
      en: 'Gaussian Splatting solves this by replacing geometry with the rendering of millions of semi-transparent ellipses generated from real photos. The final result is brutal:',
      es: 'Gaussian Splatting resuelve esto reemplazando la geometría por el renderizado de millones de elipses semitransparentes generadas a partir de fotos reales. El resultado final es brutal:'
    },
    {
      en: 'We have officially moved from the "technological experiment" stage to the "massive commercial production" stage.',
      es: 'Hemos pasado oficialmente de la etapa de "experimento tecnológico" a la de "producción comercial masiva".'
    },
    {
      en: 'If your online store is still showcasing flagship products with a flat gallery of 4 photos and a compressed video, you are giving away the wow factor to your competition. The integration of hyper-realistic interactive 3D is no longer a technical luxury; it\'s the new standard that skyrockets conversions. And now that files finally have a universal format, it\'s the exact moment to make the leap.',
      es: 'Si tu tienda online sigue mostrando productos insignia con una galería plana de 4 fotos y un video comprimido, le estás regalando el factor sorpresa a tu competencia. La integración de 3D interactivo hiperrealista ya no es un lujo técnico; es el nuevo estándar que dispara las conversiones. Y ahora que los archivos finalmente tienen un formato universal, es el momento exacto para dar el salto.'
    }
  ];

  function normalizeContent(str) {
    return (str || '')
      .replace(/\s+/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/[""]/g, '"')
      .replace(/['']/g, "'")
      .trim();
  }

  // Pre-build normalized lookup dictionaries (whitespace & quote insensitive)
  const NORM_I18N_DICT = {};
  for (const [en, es] of Object.entries(I18N_DICT)) {
    NORM_I18N_DICT[normalizeContent(en)] = es;
  }
  const NORM_REVERSE_DICT = {};
  for (const [es, en] of Object.entries(REVERSE_DICT)) {
    NORM_REVERSE_DICT[normalizeContent(es)] = en;
  }

  /**
   * Update all language button labels and flags on the page
   */
  function updateButtons(isTargetSpanish) {
    const buttons = document.querySelectorAll('.blog-lang-btn');
    buttons.forEach(btn => {
      const label = btn.querySelector('.lang-btn-label');
      const flag = btn.querySelector('.lang-flag');
      
      if (isTargetSpanish) {
        if (label) label.textContent = 'Translate to English';
        if (flag) flag.textContent = '🇬🇧';
        btn.setAttribute('title', 'Switch to English');
      } else {
        if (label) label.textContent = 'Traducir a Español';
        if (flag) flag.textContent = '🇪🇸';
        btn.setAttribute('title', 'Traducir artículo al español');
      }
    });
  }

  /**
   * Translate a single text string
   */
  function translateString(str, toLang) {
    if (!str) return null;
    const norm = normalizeContent(str);

    if (toLang === 'es') {
      return NORM_I18N_DICT[norm] || I18N_DICT[str.trim()] || null;
    } else {
      return NORM_REVERSE_DICT[norm] || REVERSE_DICT[str.trim()] || null;
    }
  }

  /**
   * Recursively traverses target DOM containers and translates both rich HTML blocks and text nodes
   */
  function translateDOM(toLang) {
    const root = document.querySelector('main') || document.body;

    // 1. Process rich HTML elements (paragraphs, list items, headers with inner HTML)
    const blockCandidates = root.querySelectorAll('p, li, blockquote, figcaption, h1, h2, h3, h4');
    blockCandidates.forEach(el => {
      if (el.closest('.blog-lang-btn') || el.closest('.nav-logo') || el.closest('.splat-viewer-container')) return;

      if (!el.hasAttribute('data-i18n-orig-html')) {
        el.setAttribute('data-i18n-orig-html', el.innerHTML);
      }

      const origHtml = el.getAttribute('data-i18n-orig-html');
      const normOrig = normalizeContent(origHtml);

      const matchedRule = HTML_I18N.find(rule => {
        return normalizeContent(rule.en) === normOrig;
      });

      if (matchedRule) {
        if (toLang === 'es') {
          el.innerHTML = matchedRule.es;
          el.setAttribute('data-i18n-html-done', 'true');
        } else {
          el.innerHTML = origHtml;
          el.removeAttribute('data-i18n-html-done');
        }
      } else {
        // Direct block text fallback (matches entire paragraph text normalized)
        const normText = normalizeContent(el.textContent);
        if (toLang === 'es') {
          const trans = NORM_I18N_DICT[normText];
          if (trans && el.children.length === 0) {
            el.textContent = trans;
            el.setAttribute('data-i18n-html-done', 'true');
          }
        } else if (el.hasAttribute('data-i18n-html-done')) {
          el.innerHTML = origHtml;
          el.removeAttribute('data-i18n-html-done');
        }
      }
    });

    // 2. Process remaining text nodes
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.tagName.toLowerCase();
          if (['script', 'style', 'code', 'pre'].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.closest('.blog-lang-btn') || parent.closest('.nav-logo') || parent.classList.contains('nav-logo') || parent.closest('.splat-viewer-container')) {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.closest('[data-i18n-html-done="true"]')) {
            return NodeFilter.FILTER_REJECT;
          }
          const text = node.nodeValue.trim();
          if (!text || text.length < 2) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodesToTranslate = [];
    while (walker.nextNode()) {
      nodesToTranslate.push(walker.currentNode);
    }

    nodesToTranslate.forEach(node => {
      const parent = node.parentElement;
      const rawText = node.nodeValue;
      const trimmed = rawText.trim();

      // Store original English text on the parent if not yet stored
      if (!parent.hasAttribute('data-i18n-orig')) {
        parent.setAttribute('data-i18n-orig', rawText);
      }

      if (toLang === 'es') {
        const trans = translateString(trimmed, 'es');
        if (trans) {
          node.nodeValue = trans;
        }
      } else {
        const orig = parent.getAttribute('data-i18n-orig');
        if (orig) {
          node.nodeValue = orig;
        } else {
          const trans = translateString(trimmed, 'en');
          if (trans) node.nodeValue = trans;
        }
      }
    });

    // Also translate placeholders
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      const placeholder = el.getAttribute('placeholder');
      if (!el.hasAttribute('data-i18n-ph-orig')) {
        el.setAttribute('data-i18n-ph-orig', placeholder);
      }
      if (toLang === 'es') {
        const trans = translateString(placeholder, 'es');
        if (trans) el.setAttribute('placeholder', trans);
      } else {
        const orig = el.getAttribute('data-i18n-ph-orig');
        if (orig) el.setAttribute('placeholder', orig);
      }
    });
  }

  /**
   * Main Toggle Function
   * Triggered on clicking the Translate button
   */
  window.toggleBlogLanguage = function () {
    const nextLang = currentLang === 'en' ? 'es' : 'en';
    const activeBtn = document.querySelector('.blog-lang-btn');

    // 1. Playful "Cómico" and "Elegante" Animation on button
    if (activeBtn) {
      activeBtn.classList.remove('is-animating');
      void activeBtn.offsetWidth; // trigger reflow
      activeBtn.classList.add('is-animating');
      spawnComicParticles(activeBtn);
    }

    // 2. Smooth dissolve on content
    const content = document.querySelector('.blog-wrapper') || document.querySelector('.post-article') || document.body;
    content.classList.add('i18n-swapping');

    setTimeout(() => {
      currentLang = nextLang;
      localStorage.setItem('jbl_blog_lang', currentLang);
      document.documentElement.lang = currentLang;

      // 3. Perform DOM text swap
      translateDOM(currentLang);
      updateButtons(currentLang === 'es');

      // 4. Fade content back in with spring
      content.classList.remove('i18n-swapping');
    }, 180);
  };

  /**
   * Auto-initialize on DOM ready
   */
  function init() {
    // If user previously selected Spanish, apply it immediately
    if (currentLang === 'es') {
      updateButtons(true);
      translateDOM('es');
      document.documentElement.lang = 'es';
    } else {
      updateButtons(false);
      document.documentElement.lang = 'en';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
