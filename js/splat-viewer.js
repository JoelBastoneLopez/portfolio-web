/**
 * JBL Studio — Interactive 3D Gaussian Splatting Viewer
 * Real-time WebGL splat renderer powered by @mkkellogg/gaussian-splats-3d
 * Model: assets/models/camara.ply
 */

(function () {
  'use strict';

  const MODEL_PATH = '../assets/models/camara.ply';
  const INIT_CAMERA = {
    pos: [0.18, 0.15, 0.44],
    lookAt: [0, 0.03, 0],
    up: [0, 1, 0]
  };

  async function init() {
    const wrapper = document.getElementById('splat-viewer-wrapper');
    const stage = document.getElementById('splat-canvas-stage');
    const loadingOverlay = document.getElementById('splat-loading-overlay');
    const progressBar = document.getElementById('splat-progress-bar');
    const progressText = document.getElementById('splat-progress-text');
    const controlsPill = document.getElementById('splat-controls-pill');
    const resetBtn = document.getElementById('splat-reset-view');
    const fullscreenBtn = document.getElementById('splat-fullscreen-btn');

    if (!wrapper || !stage) return;

    // Detect touch capability for instruction badges
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const desktopPill = controlsPill ? controlsPill.querySelector('.splat-pill-desktop') : null;
    const touchPill = controlsPill ? controlsPill.querySelector('.splat-pill-touch') : null;

    if (desktopPill && touchPill) {
      if (isTouch) {
        desktopPill.style.display = 'none';
        touchPill.style.display = 'flex';
      } else {
        desktopPill.style.display = 'flex';
        touchPill.style.display = 'none';
      }
    }

    // Fade pill on user interaction
    let idleTimer = null;
    function handleInteractionStart() {
      if (controlsPill) controlsPill.classList.add('is-interacting');
      if (idleTimer) clearTimeout(idleTimer);
    }
    function handleInteractionEnd() {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        if (controlsPill) controlsPill.classList.remove('is-interacting');
      }, 1800);
    }

    stage.addEventListener('mousedown', handleInteractionStart);
    stage.addEventListener('touchstart', handleInteractionStart, { passive: true });
    window.addEventListener('mouseup', handleInteractionEnd);
    window.addEventListener('touchend', handleInteractionEnd);

    // Fullscreen toggle
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          wrapper.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    // Check file:/// protocol limitation in Chromium
    const isFileProtocol = window.location.protocol === 'file:';

    let GaussianSplats3D = null;
    try {
      // Dynamic import using the importmap
      GaussianSplats3D = await import('@mkkellogg/gaussian-splats-3d');
    } catch (err) {
      console.warn('Could not import from importmap, trying direct CDN fallback:', err);
      try {
        GaussianSplats3D = await import('https://cdn.jsdelivr.net/npm/@mkkellogg/gaussian-splats-3d@0.4.7/build/gaussian-splats-3d.module.js');
      } catch (e2) {
        console.error('Failed to load GaussianSplats3D library:', e2);
        showErrorUI('No se pudo cargar la librería WebGL de Gaussian Splatting.');
        return;
      }
    }

    let viewer = null;

    function createViewer() {
      try {
        viewer = new GaussianSplats3D.Viewer({
          rootElement: stage,
          cameraUp: INIT_CAMERA.up,
          initialCameraPosition: INIT_CAMERA.pos,
          initialCameraLookAt: INIT_CAMERA.lookAt,
          sharedMemoryForWorkers: false, // Avoid crossOriginIsolated requirements
          gpuAcceleratedSort: true,
          selfDrivenMode: true,
          useBuiltInControls: true,
          showLoadingUI: false
        });

        // Reset button listener
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            if (viewer && viewer.camera && viewer.controls) {
              viewer.camera.position.set(...INIT_CAMERA.pos);
              if (viewer.controls.target) {
                viewer.controls.target.set(...INIT_CAMERA.lookAt);
              }
              if (typeof viewer.controls.update === 'function') {
                viewer.controls.update();
              }
            }
          });
        }
      } catch (err) {
        console.error('Error creating Viewer instance:', err);
        showErrorUI('Error inicializando el renderizador WebGL.');
      }
    }

    function loadModelFromUrl(url) {
      if (!viewer) createViewer();
      if (!viewer) return;

      if (progressText) progressText.textContent = 'Descargando y ordenando 209k splats...';
      if (progressBar) progressBar.style.width = '15%';

      viewer.addSplatScene(url, {
        splatAlphaRemovalThreshold: 5,
        showLoadingUI: false,
        onProgress: (percent, percentText) => {
          const p = Math.min(100, Math.max(10, Math.round(percent)));
          if (progressBar) progressBar.style.width = p + '%';
          if (progressText) progressText.textContent = `Cargando splats: ${percentText || p + '%'}`;
        }
      })
      .then(() => {
        if (progressBar) progressBar.style.width = '100%';
        if (progressText) progressText.textContent = '¡Renderizado listo!';
        setTimeout(() => {
          if (loadingOverlay) loadingOverlay.classList.add('is-hidden');
          viewer.start();
        }, 400);
      })
      .catch((error) => {
        console.warn('Failed loading 3D splat from path:', error);
        if (isFileProtocol) {
          showFileProtocolFallback();
        } else {
          showErrorUI('No se pudo cargar el archivo camara.ply.');
        }
      });
    }

    function showFileProtocolFallback() {
      if (!loadingOverlay) return;
      loadingOverlay.classList.remove('is-hidden');
      loadingOverlay.innerHTML = `
        <div style="max-width:440px; padding:1.2rem; background:rgba(20,18,24,0.9); border:1px solid rgba(201,169,110,0.4); border-radius:12px; text-align:center;">
          <div style="font-size:1.8rem; margin-bottom:0.6rem;">⚡</div>
          <h4 style="color:#ffffff; font-family:var(--font-d); font-size:1.05rem; margin-bottom:0.4rem;">Servidor local o Web requerido</h4>
          <p style="font-size:0.82rem; color:var(--txt-muted); line-height:1.5; margin-bottom:1.1rem;">
            Por seguridad, Google Chrome bloquea la lectura de archivos 3D pesados (.ply) mediante el protocolo directo <code>file:///</code>.<br/>
            Para probarlo de inmediato aquí mismo, selecciona manualmente el archivo <strong>camara.ply</strong>:
          </p>
          <label class="splat-manual-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
            </svg>
            <span>Seleccionar camara.ply</span>
            <input type="file" id="splat-file-input" accept=".ply,.splat,.ksplat" style="display:none;" />
          </label>
          <div style="font-size:0.75rem; color:#8a8898; margin-top:0.9rem;">
            O abre el proyecto con <em>VS Code Live Server</em> (<code>http://127.0.0.1:5500</code>).
          </div>
        </div>
      `;

      const input = document.getElementById('splat-file-input');
      if (input) {
        input.addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (file) {
            loadingOverlay.innerHTML = `
              <div class="splat-spinner"></div>
              <div class="splat-loading-title">Procesando ${file.name}...</div>
              <div class="splat-loading-sub">Decodificando nubes de splats en memoria...</div>
            `;
            const blobUrl = URL.createObjectURL(file);
            loadModelFromUrl(blobUrl);
          }
        });
      }
    }

    function showErrorUI(msg) {
      if (!loadingOverlay) return;
      loadingOverlay.innerHTML = `
        <div style="color:#ff6b6b; font-size:1.4rem; margin-bottom:0.5rem;">⚠</div>
        <div class="splat-loading-title">${msg}</div>
        <p class="splat-loading-sub">Asegúrate de que el archivo <code>assets/models/camara.ply</code> existe y se encuentra accesible.</p>
      `;
    }

    // Start loading
    if (isFileProtocol) {
      // Direct file protocol: Try fetch, or gracefully show file picker
      createViewer();
      fetch(MODEL_PATH, { method: 'HEAD' })
        .then(() => loadModelFromUrl(MODEL_PATH))
        .catch(() => showFileProtocolFallback());
    } else {
      loadModelFromUrl(MODEL_PATH);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
