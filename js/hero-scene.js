import * as THREE from 'three';

export function initHeroScene() {
    const container = document.getElementById('hero-canvas');
    if (!container) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    
    // We use an OrthographicCamera for a 2D background shader
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // --- Premium 3D Aesthetic: Aurora Background Shader ---
    
    // A simple plane that covers the entire screen
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uColorBase: { value: new THREE.Color('#000000') }, // Dark background
            uColor1: { value: new THREE.Color('#9a7a4a') },    // Dark Gold
            uColor2: { value: new THREE.Color('#c9a96e') },    // Bright Gold
            uColor3: { value: new THREE.Color('#3a2f1d') }     // Very subtle ambient gold/brown
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform vec2 uResolution;
            uniform vec3 uColorBase;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            uniform vec3 uColor3;
            varying vec2 vUv;

            // Simple 2D noise
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                                    0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                                    -0.577350269189626, // -1.0 + 2.0 * C.x
                                    0.024390243902439); // 1.0 / 41.0
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i); // Avoid truncation effects in permutation
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                    + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m ;
                m = m*m ;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vec2 st = gl_FragCoord.xy / uResolution.xy;
                
                // Animated coordinates for flowing effect
                float t = uTime * 0.15;
                
                // Multi-layered noise for aurora effect
                float q = snoise(st * 2.0 + vec2(t, t * 0.5));
                float q2 = snoise(st * 1.5 - vec2(t * 1.2, t * 0.8));
                
                // Distort coordinates to create sweeping bands
                vec2 dist = st + vec2(q, q2) * 0.3;
                
                // Create sweeping gradient bands
                float band1 = sin(dist.x * 5.0 + t * 2.0) * 0.5 + 0.5;
                float band2 = cos(dist.y * 4.0 - t * 1.5) * 0.5 + 0.5;
                float band3 = sin((dist.x + dist.y) * 3.0 + t) * 0.5 + 0.5;

                // Mix colors based on bands
                vec3 color = uColorBase;
                
                // Add soft ambient light
                color = mix(color, uColor3, band3 * 0.6);
                
                // Add main aurora bands
                // Multiply by a vertical gradient so it fades out at the bottom
                float verticalFade = smoothstep(0.0, 1.0, st.y + 0.2);
                
                color = mix(color, uColor1, band1 * verticalFade * 0.8);
                color = mix(color, uColor2, band2 * band1 * verticalFade);

                // Add grain/noise
                float grain = fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453) * 0.05;
                color -= grain;

                gl_FragColor = vec4(color, 1.0);
            }
        `,
        transparent: false,
        depthWrite: false
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Handle Window Resize
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();
        material.uniforms.uTime.value = elapsedTime;

        renderer.render(scene, camera);
    }

    animate();
    
    // Fade in after the first frame is rendered
    setTimeout(() => {
        container.classList.add('loaded');
    }, 150);
}
