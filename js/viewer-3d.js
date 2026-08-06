import * as THREE from 'three';
// Animation clock
const clock = new THREE.Clock();
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export function initViewer3D() {
    const container = document.getElementById('viewer-canvas');
    if (!container) return;

    // Crear fondo radial dinámico dentro de Three.js (Evita que el Bloom opaque el CSS)
    function createGradientTexture() {
        const bgCanvas = document.createElement('canvas');
        bgCanvas.width = 512;
        bgCanvas.height = 512;
        const ctx = bgCanvas.getContext('2d');
        const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
        gradient.addColorStop(0, '#2a1f10');
        gradient.addColorStop(1, '#000000');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
        const texture = new THREE.CanvasTexture(bgCanvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
    }

    // Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = createGradientTexture();
    
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5); // Base camera distance

    const renderer = new THREE.WebGLRenderer({ canvas: container, alpha: true, antialias: true });
    renderer.setSize(container.clientWidth || 400, container.clientHeight || 300);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    // HDRI Environment
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('assets/img/brown_photostudio_02_1k.hdr', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        // Optionally add subtle ambient light to complement HDRI
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
    });

    // Post-Processing (EffectComposer & Bloom)
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.85; // Limita el glow solo a los picos de luz más intensos
    bloomPass.strength = 0.15;  // Fuerza del resplandor ultra sutil (mitad)
    bloomPass.radius = 0.2;    // Expansión corta del halo

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;
    controls.enablePan = false;
    controls.minDistance = 1.5;
    controls.maxDistance = 10;

    let currentModelGroup = null;
    let currentMixer = null;
    const loader = new GLTFLoader();

    function load3DModel(modelUrl) {
        const loadingText = document.getElementById('viewer-loading');
        
        container.classList.add('fade-out');
        if (loadingText) {
            loadingText.classList.add('active');
            loadingText.textContent = 'Cargando modelo...';
        }

        setTimeout(() => {
            if (currentMixer) {
                currentMixer.stopAllAction();
                currentMixer = null;
            }

            if (currentModelGroup) {
                scene.remove(currentModelGroup);
                currentModelGroup = null;
            }

            loader.load(
                modelUrl,
                (gltf) => {
                    const model = gltf.scene;

                    if (gltf.animations && gltf.animations.length > 0) {
                        currentMixer = new THREE.AnimationMixer(model);
                        gltf.animations.forEach((clip) => {
                            const action = currentMixer.clipAction(clip);
                            action.setLoop(THREE.LoopRepeat, Infinity); // Reproducir en loop infinito nativo
                            action.play();
                            action.timeScale = 1;
                        });
                    }

                    model.updateMatrixWorld(true);

                    // Centrar y escalar
                    const box = new THREE.Box3().setFromObject(model);
                    const size = box.getSize(new THREE.Vector3());
                    const center = box.getCenter(new THREE.Vector3());

                    const maxDim = Math.max(size.x, size.y, size.z);
                    // ZOOM IN: Aumentar el multiplicador de escala (antes 3, ahora 4.2)
                    const scale = 4.2 / (maxDim || 1);

                    model.position.sub(center);

                    const group = new THREE.Group();
                    group.add(model);
                    group.scale.setScalar(scale);

                    if (controls) {
                        controls.target.set(0, 0, 0); // Restaurar pivot exacto al centro
                        camera.position.set(0, 0, 5.5);
                        controls.update();
                    }

                    model.traverse((child) => {
                        if (child.isMesh) {
                            if (!child.geometry.attributes.normal) {
                                child.geometry.computeVertexNormals();
                            }
                            // Asegurar que los materiales PBR reaccionen bien al HDRI
                            if (child.material) {
                                child.material.envMapIntensity = 1.2;
                                child.material.needsUpdate = true;
                            }
                        }
                    });

                    currentModelGroup = group;
                    scene.add(currentModelGroup);

                    if (loadingText) loadingText.classList.remove('active');
                    container.classList.remove('fade-out');
                },
                undefined,
                (error) => {
                    console.error('Error loading 3D model:', error);
                    if (loadingText) {
                        loadingText.textContent = 'Error al cargar';
                        setTimeout(() => loadingText.classList.remove('active'), 2000);
                    }
                    container.classList.remove('fade-out');
                }
            );
        }, 300);
    }

    // Carga inicial
    const initialModel = container.getAttribute('data-model') || 'assets/models/espadita.glb';
    load3DModel(initialModel);

    // Interacción UI: Cambio de Modelos 3D
    const modelMenu = document.querySelectorAll('.viewer-menu-item');
    const dynamicTitle = document.getElementById('viewer-dynamic-title');
    const dynamicDesc = document.getElementById('viewer-dynamic-desc');

    modelMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const btnEl = e.currentTarget;
            const modelUrl = btnEl.getAttribute('data-model');
            const title = btnEl.getAttribute('data-title');
            const desc = btnEl.getAttribute('data-desc');
            const client = btnEl.getAttribute('data-client');
            const cat = btnEl.getAttribute('data-cat');
            const url = btnEl.getAttribute('data-url');

            // Cargar nuevo modelo 3D
            if (modelUrl) {
                load3DModel(modelUrl);
            }

            // Actualizar el Texto Glow Flotante
            if (dynamicTitle && title) dynamicTitle.textContent = title;
            if (dynamicDesc && desc) dynamicDesc.textContent = desc;

            // Actualizar el Bento Overlay restaurado
            const clientBadge = document.getElementById('viewer-client-badge');
            const catBadge = document.getElementById('viewer-cat-badge');
            const linkBtn = document.getElementById('viewer-link-btn');
            const featuredCard = document.querySelector('.featured-viewer-item');

            if (clientBadge && client) clientBadge.textContent = client;
            if (catBadge && cat) catBadge.textContent = cat;
            if (linkBtn && url) {
                linkBtn.setAttribute('href', url);
                if (featuredCard) featuredCard.setAttribute('data-url', url);
            }

            // Actualizar menú activo
            modelMenu.forEach(m => m.classList.remove('active'));
            btnEl.classList.add('active');
        });
    });

    // Handle Window and Container Resize
    function updateViewerSize() {
        if (!container || !container.clientWidth || !container.clientHeight) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        
        camera.aspect = w / h;
        
        // Desplazar el centro focal hacia la derecha (solo en escritorio)
        // Esto mueve el modelo visualmente a la derecha sin romper el eje de rotación.
        if (window.innerWidth > 768) {
            camera.setViewOffset(w, h, -w * 0.22, 0, w, h);
        } else {
            camera.clearViewOffset();
        }
        
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        composer.setSize(w, h);
    }

    window.addEventListener('resize', updateViewerSize);

    if (window.ResizeObserver) {
        const ro = new ResizeObserver(() => {
            updateViewerSize();
        });
        ro.observe(container);
    }

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (currentMixer) {
            currentMixer.update(delta);
        }
        controls.update();
        // Usar el composer para renderizar el post-procesado (Bloom)
        composer.render();
    }
    
    animate();
}
