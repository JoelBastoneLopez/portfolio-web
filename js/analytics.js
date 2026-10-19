/**
 * JBL Studio — Google Analytics 4 (GA4) Analytics Engine
 * Medición B2B y Engagement de Alta Precisión para joelbastonelopez.com
 * Cero PII (Privacidad total) - Vanilla JS ultraliviano (< 3KB)
 */

(function () {
  'use strict';

  // ==========================================================================
  // CONFIGURACIÓN: Ingresá tu Measurement ID de Google Analytics aquí
  // ==========================================================================
  // Ejemplo: 'G-XXXXXXXXXX'. Si está con placeholder, opera en modo prueba (consola).
  const GA_MEASUREMENT_ID = 'G-W0G8MGLNKM';

  const isConfigured = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-W0G8MGLNKM';

  // 1. Inyectar dinámicamente el script de Google Tag Manager (gtag.js)
  if (isConfigured) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  // 2. Setup dataLayer y función gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());

  // 3. Detectar contexto y metadatos de la página automáticamente
  const path = window.location.pathname.toLowerCase();
  let pageType = 'home';
  let projectName = 'none';

  if (path.includes('project-') || path.includes('/projects/')) {
    pageType = 'case_study';
    const match = path.match(/project-([a-z0-9-]+)/i);
    projectName = match ? match[1] : 'custom_project';
  } else if (path.includes('/blog/') || path.includes('blog-post')) {
    pageType = 'blog_post';
  } else if (path.includes('blog')) {
    pageType = 'blog_index';
  } else if (path.includes('admin')) {
    pageType = 'admin';
  }

  // Configuración de la sesión
  if (isConfigured) {
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      content_group: pageType
    });
  }

  // Función helper segura para registrar eventos
  function logEvent(eventName, params) {
    const fullParams = Object.assign({
      page_type: pageType,
      project_name: projectName,
      timestamp: Date.now()
    }, params);

    if (isConfigured) {
      gtag('event', eventName, fullParams);
    } else {
      // Modo desarrollo / prueba local
      console.log(`[JBL Analytics — ${eventName}]`, fullParams);
    }
  }

  // Exponer API global limpia para interactuar desde el código o Three.js
  window.JBL_Analytics = {
    logEvent: logEvent,
    track3DInteraction: function (action, modelName) {
      logEvent('jbl_3d_interact', {
        interaction_action: action || 'orbit_view',
        model_name: modelName || projectName
      });
    }
  };

  // ==========================================================================
  // EVENTO 1: CONVERSIÓN B2B DE ORO — Clic en Google Calendar ("Schedule Call")
  // ==========================================================================
  document.addEventListener('click', function (e) {
    const link = e.target.closest && e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const text = (link.textContent || '').trim().slice(0, 100);

    // Detección del botón de Google Calendar
    if (href.includes('calendar.app.google') || href.includes('calendar.google.com')) {
      logEvent('lead_calendar_click', {
        cta_text: text,
        destination_url: href,
        source_surface: pageType
      });
      return;
    }

    // Detección de contacto por Correo Directo
    if (href.startsWith('mailto:')) {
      logEvent('lead_mail_click', {
        cta_text: text,
        source_surface: pageType
      });
      return;
    }

    // Detección de Enlaces Salientes (LinkedIn, Behance, Fiverr, etc.)
    if (/^https?:\/\//i.test(href)) {
      try {
        const url = new URL(href, window.location.href);
        if (url.hostname !== window.location.hostname) {
          logEvent('outbound_click', {
            outbound_domain: url.hostname,
            outbound_url: href.slice(0, 500),
            link_text: text
          });
        }
      } catch (err) { }
    }
  }, true);

  // ==========================================================================
  // EVENTO 2: PROFUNDIDAD DE LECTURA (SCROLL DEPTH)
  // Permite saber si el cliente llegó hasta el final del Caso de Estudio o Blog
  // ==========================================================================
  const scrollMarks = [25, 50, 75, 90, 100];
  const scrollDone = {};

  function checkScrollDepth() {
    const el = document.documentElement;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    if (scrollHeight <= 0) return;

    const pct = Math.min(100, Math.round((100 * el.scrollTop) / scrollHeight));
    scrollMarks.forEach(function (mark) {
      if (pct >= mark && !scrollDone[mark]) {
        scrollDone[mark] = true;
        logEvent('scroll_depth', {
          depth_percent: mark
        });
      }
    });
  }

  let scrollTimeout = null;
  window.addEventListener('scroll', function () {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(function () {
      scrollTimeout = null;
      checkScrollDepth();
    }, 200);
  }, { passive: true });

  // ==========================================================================
  // EVENTO 3: HITOS DE TIEMPO / ENGAGEMENT ACTIVO
  // ==========================================================================
  const timeMilestones = [15, 45, 90, 180, 300]; // en segundos
  const timeDone = {};
  const startTime = Date.now();

  const timeInterval = setInterval(function () {
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    timeMilestones.forEach(function (sec) {
      if (elapsedSeconds >= sec && !timeDone[sec]) {
        timeDone[sec] = true;
        logEvent('engagement_time', {
          seconds_spent: sec
        });
      }
    });
    if (elapsedSeconds > 300) {
      clearInterval(timeInterval);
    }
  }, 1000);

  // ==========================================================================
  // EVENTO 4: INTERACCIÓN CON CANVAS 3D / THREE.JS
  // Registra cuando un usuario toca o rota el canvas interactivo
  // ==========================================================================
  let canvasInteracted = false;
  window.addEventListener('load', function () {
    const canvasElements = document.querySelectorAll('canvas');
    canvasElements.forEach(function (c) {
      ['mousedown', 'touchstart', 'pointerdown'].forEach(function (evName) {
        c.addEventListener(evName, function () {
          if (!canvasInteracted) {
            canvasInteracted = true;
            logEvent('jbl_3d_interact', {
              interaction_action: 'first_interaction',
              model_name: projectName
            });
          }
        }, { passive: true });
      });
    });
  });

})();
