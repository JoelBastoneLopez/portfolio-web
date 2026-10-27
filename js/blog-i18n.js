/**
 * JBL Studio — Master Client-Side Translation Engine (i18n)
 * Provides seamless, zero-reload translation between English and Spanish
 * with delightful micro-animations, full DOM coverage, and persistence.
 */

(function () {
  'use strict';

  // Master UI and Technical Translation Dictionary (All pages & case studies)
  const I18N_DICT = {
  "Skip to main content": "Saltar al contenido principal",
  "Projects": "Proyectos",
  "About": "Sobre mí",
  "Blog": "Blog",
  "Reviews": "Reseñas",
  "Contact": "Contacto",
  "Get a Quote": "Solicitar Cotización",
  "Get a quote": "Solicitar Cotización",
  "Request a Quote": "Solicitar Cotización",
  "Book a Discovery Call": "Agendar Llamada",
  "Send an Email": "Enviar un Email",
  "Send Message": "Enviar Mensaje",
  "View case study": "Ver caso de estudio",
  "View project": "Ver proyecto",
  "View Projects": "Ver Proyectos",
  "Explore Work ↓": "Explorar Trabajos ↓",
  "Explore Work": "Explorar Trabajos",
  "Joel Bastone Lopez — 2026": "Joel Bastone Lopez — 2026",
  "Buenos Aires, Argentina": "Buenos Aires, Argentina",
  "Buenos Aires, Argentina (GMT-3)": "Buenos Aires, Argentina (GMT-3)",
  "Available for projects": "Disponible para proyectos",
  "Other Projects": "Otros Proyectos",
  "MORE CASE STUDIES": "MÁS CASOS DE ESTUDIO",
  "Explore other commercial 3D productions": "Explora otras producciones 3D comerciales",
  "Live App": "App en Vivo",
  "Verified profile ↗": "Verificar perfil ↗",
  "Verify profile ↗": "Verificar perfil ↗",
  "Connected IoT Hardware CGI": "CGI para Hardware IoT Conectado",
  "4K 60fps": "4K 60fps",
  "Repeat Client (2+ yrs)": "Cliente Recurrente (+2 años)",
  "4th repeat project": "4to proyecto recurrente",
  "2nd repeat project": "2do proyecto recurrente",
  "Ongoing Collaboration": "Colaboración Continua",
  "New Zealand": "Nueva Zelanda",
  "Canada": "Canadá",
  "United States": "Estados Unidos",
  "Ecuador": "Ecuador",
  "Australia": "Australia",
  "Thailand": "Tailandia",
  "Spain": "España",
  "Role": "Rol",
  "Client": "Cliente",
  "Sector": "Sector",
  "Year": "Año",
  "Duration": "Duración",
  "Stack": "Stack",
  "Deliverables": "Entregables",
  "Venues": "Espacios",
  "CONTEXT": "CONTEXTO",
  "THE PROBLEM": "EL PROBLEMA",
  "OBJECTIVES": "OBJETIVOS",
  "CONSTRAINTS": "RESTRICCIONES",
  "PROCESS": "PROCESO",
  "KEY DECISIONS": "DECISIONES CLAVE",
  "RESULTS": "RESULTADOS",
  "LEARNINGS": "APRENDIZAJES",
  "3D Product CGI & Interactive WebGL for E-Commerce": "CGI de Producto 3D & WebGL Interactivo para E-Commerce",
  "Product visuals that scale, without the photo studio. 3D product CGI and interactive WebGL viewers for e-commerce brands and agencies.": "Visuales de producto que escalan, sin la logística de un estudio fotográfico. CGI de producto 3D y visores WebGL interactivos para marcas y agencias de e-commerce.",
  "PROJECTS": "PROYECTOS",
  "Curated selection of 3D CGI assets, animation, and real-time interactive web experiences.": "Selección de producciones CGI 3D, animación y experiencias web interactivas en tiempo real.",
  "All": "Todos",
  "Product CGI & Animation": "CGI de Producto & Animación",
  "Interactive 3D / WebGL": "3D Interactivo / WebGL",
  "Primicia": "Primicia",
  "Product CGI & Interactive WebGL": "CGI de Producto & WebGL Interactivo",
  "Primicia — Línea Lab": "Primicia — Línea Lab",
  "Development of real-time interactive 3D customization experience for e-commerce.": "Desarrollo de experiencia interactiva 3D en tiempo real para personalización en e-commerce.",
  "8Bottle": "8Bottle",
  "IoT Hardware & Launch CGI": "Hardware IoT & CGI de Lanzamiento",
  "8Bottle — Connected IoT Hardware Launch": "8Bottle — Lanzamiento de Hardware IoT Conectado",
  "3D visual development, procedural technical blueprints, and global launch ecosystem for connected smart hardware.": "Desarrollo visual 3D, blueprints técnicos procedurales y ecosistema de lanzamiento global para hardware inteligente conectado.",
  "KAISAR": "KAISAR",
  "Horology & Real-Time UE5": "Relojería & UE5 en Tiempo Real",
  "KAISAR — Luxury Horology & Real-Time LookDev": "KAISAR — Relojería de Lujo & LookDev en Tiempo Real",
  "High-precision hard-surface modeling, procedural PBR shader engineering, and real-time Unreal Engine 5 visualization.": "Modelado hard-surface de alta precisión, ingeniería de shaders PBR procedurales y visualización en tiempo real en Unreal Engine 5.",
  "MWO": "MWO",
  "Modular 3D Pipeline & Sculpting": "Pipeline 3D Modular & Escultura",
  "MWO — Modular 3D Character Pipeline": "MWO — Pipeline Modular de Personajes 3D",
  "High-fidelity modular 3D character asset ecosystem, ZBrush digital sculpting, and hard-surface LookDev for digital collectibles.": "Ecosistema de assets 3D modulares de alta fidelidad para personajes, escultura digital en ZBrush y LookDev hard-surface para coleccionables digitales.",
  "MWO — Modular 3D Character Asset Pipeline & LookDev": "MWO — Pipeline de Assets 3D Modulares & LookDev",
  "Modular Character Asset Pipeline & Faction LookDev": "Pipeline de Assets Modulares para Personajes & LookDev de Facciones",
  "Development of a high-fidelity modular 3D character asset ecosystem for multi-faction avatar generation. From initial 2D conceptual briefs to digital sculpting in ZBrush, hard-surface modeling in Cinema 4D and Blender, and procedural LookDev delivered in engine-ready OBJ and GLB formats.": "Desarrollo de un ecosistema de assets 3D modulares de alta fidelidad para generación de avatares multifacción. Desde bocetos conceptuales 2D hasta escultura digital en ZBrush, modelado hard-surface en Cinema 4D y Blender, y LookDev procedural entregado en formatos OBJ y GLB listos para motor gráfico.",
  "Explore 3D Trait Showcase": "Explorar Galería de Traits 3D",
  "30+ Modular Assets": "+30 Assets Modulares",
  "Lead 3D Hard-Surface Artist & Sculptor": "Artista Lead 3D Hard-Surface & Escultor",
  "MWO (Meta World Order)": "MWO (Meta World Order)",
  "Digital Collectibles / Character Asset Pipeline": "Coleccionables Digitales / Pipeline de Assets para Personajes",
  "Modular asset library across factions, clean subdivision meshes, PBR texture maps, presentation renders": "Librería de assets modulares por facciones, mallas de subdivisión limpias, mapas de textura PBR y renders de presentación",
  "Modular 3D Pipeline": "Pipeline 3D Modular",
  "ZBrush Sculpting": "Escultura en ZBrush",
  "Hard-Surface CGI": "CGI Hard-Surface",
  "Digital Collectibles": "Coleccionables Digitales",
  "Modular Faction Ecosystem:": "Ecosistema Modular de Facciones:",
  "Multi-category asset staging exhibiting material contrast across polished polymers, tactical leather, hydraulic joints, and emissive elements.": "Composición de assets multicategoría exhibiendo contraste de materiales entre polímeros pulidos, cuero táctico, uniones hidráulicas y elementos emisivos.",
  "Hero Staging Pass": "Pase de Composición Hero",
  "CONTEXT & THE BRIEF": "CONTEXTO & EL BRIEF",
  "Building a tactile, believable 3D universe for faction-based digital collectibles.": "Construyendo un universo 3D táctil y creíble para coleccionables digitales basados en facciones.",
  "During the peak of the digital collectibles and avatar generation era, MWO contacted me to lead the 3D asset production for their universe. Characters were categorized into distinct narrative factions—ranging from high-tech cybernetic operatives and underground scavengers to alchemical engineers. The client provided initial 2D concept sketches and broad art direction notes. My mission was to translate flat line drawings into volumetric, high-fidelity 3D assets that would feel tangible, functional, and seamlessly swappable across all character base bodies without clipping.": "Durante el auge de los coleccionables digitales y la generación de avatares, MWO me contactó para liderar la producción de assets 3D de su universo. Los personajes estaban divididos en facciones narrativas bien diferenciadas: desde operativos cibernéticos de alta tecnología y recolectores clandestinos hasta ingenieros alquímicos. El cliente entregó bocetos conceptuales 2D iniciales y directrices generales de arte. Mi misión fue traducir esos dibujos lineales planos en assets 3D volumétricos de alta fidelidad que se sintieran tangibles, funcionales y perfectamente intercambiables entre los diferentes cuerpos base de los personajes sin colisiones de malla.",
  "Visual Brief & Category Mapping:": "Brief Visual & Mapeo de Categorías:",
  "The master moodboard grouping 2D character sketches and asset categories: robotic arms, tactical masks, gloves, eyewear, bags, and props.": "El moodboard principal agrupando bocetos 2D de personajes y categorías de accesorios: brazos robóticos, máscaras tácticas, guantes, antiparras, mochilas y props.",
  "Art Direction & Moodboard": "Dirección de Arte & Moodboard",
  "RESEARCH & REFERENCE CURATION": "INVESTIGACIÓN & CURADURÍA DE REFERENCIAS",
  "Grounding stylized concepts in real-world engineering and tactile materiality.": "Anclando conceptos estilizados en ingeniería del mundo real y materialidad táctil.",
  "2D sketches communicate silhouette and mood, but they often leave mechanical joints, rear angles, and fabric construction unresolved. Before opening 3D software, I spearheaded an extensive visual research phase. I curated dedicated reference sheets for each asset type, drawing from real industrial hydraulics for cybernetic limbs, military webbing and Cordura leather for utility belts, vintage aviator goggles for ocular gear, and technical glassware for energy capsules. This step ensured that every faction had an authentic design language that resonated with collectors.": "Los bocetos 2D comunican silueta y atmósfera, pero suelen dejar sin resolver las articulaciones mecánicas, los ángulos posteriores y la confección de telas. Antes de abrir el software 3D, lideré una exhaustiva fase de investigación visual. Curé paneles de referencia dedicados para cada tipo de asset, basándome en sistemas hidráulicos industriales reales para extremidades cibernéticas, correas militares y cuero cordura para cinturones tácticos, antiparras de aviador vintage para visores ópticos y cristalería técnica para cápsulas energéticas. Este paso garantizó que cada facción tuviera un lenguaje de diseño auténtico con alto impacto para los coleccionistas.",
  "Mechanical Joints:": "Articulaciones Mecánicas:",
  "Hydraulic pistons, ball-and-socket knuckles, and industrial clamping mechanisms researched for robotic limbs.": "Pistones hidráulicos, rótulas esféricas y mecanismos de fijación industrial investigados para extremidades robóticas.",
  "Hard-Surface References": "Referencias Hard-Surface",
  "Tactical Eyewear:": "Óptica Táctica:",
  "Investigating leather stitching, brass buckles, and slotted protective lenses for scavenger factions.": "Investigación de costuras en cuero, hebillas de latón y lentes ranurados de protección para facciones recolectoras.",
  "Materiality References": "Referencias de Materialidad",
  "PRODUCTION OBJECTIVES": "OBJETIVOS DE PRODUCCIÓN",
  "Four architectural principles governed the modeling and asset delivery pipeline:": "Cuatro principios rectores gobernaron el pipeline de modelado y entrega de assets:",
  "Modular interoperability across all base body archetypes": "Interoperabilidad modular entre todos los arquetipos de cuerpo base",
  "0 Clipping": "0 Colisiones",
  "0 Clipping": "0 Colisiones",
  "Zero mesh penetration between multi-layered accessories": "Cero penetración de malla entre accesorios superpuestos en capas",
  "SubD Clean": "SubD Limpia",
  "SubD Clean": "SubD Limpia",
  "All-quad subdivision-ready geometry for high-res marketing renders": "Geometría all-quad lista para subdivisión en renders de marketing de alta resolución",
  "Dual Format": "Formato Dual",
  "Dual Format": "Formato Dual",
  "Master high-poly OBJ files alongside lightweight GLB for web pipelines": "Archivos maestros OBJ high-poly junto a GLB livianos para pipelines web",
  "SCULPTING & HARD-SURFACE PIPELINE": "PIPELINE DE ESCULTURA & HARD-SURFACE",
  "A hybrid workflow blending ZBrush digital sculpting with precision Cinema 4D and Blender modeling.": "Un flujo de trabajo híbrido combinando escultura digital en ZBrush con modelado de precisión en Cinema 4D y Blender.",
  "Character assets require two fundamentally different skill sets: organic drapery that responds to gravity, and rigid mechanical parts that look industrially manufactured. To achieve both, I deployed a hybrid software pipeline:": "Los accesorios para personajes requieren dos disciplinas fundamentales: telas orgánicas con caída natural que responden a la gravedad y componentes mecánicos rígidos con acabado industrial. Para lograr ambos, implementé un pipeline híbrido de software:",
  "Digital Sculpting in ZBrush": "Escultura Digital en ZBrush",
  "Used for cloth wrinkles, tactical sling bags, tension folds along strap seams, and leather pouch elasticity over anatomical mannequins. Panel loops and dynamic sub-divisions ensured crisp seam definitions.": "Utilizado para arrugas de telas, pecheras tácticas, pliegues de tensión en costuras de correas y elasticidad de cartucheras de cuero sobre maniquíes anatómicos. Panel loops y subdivisiones dinámicas aseguraron costuras sumamente nítidas.",
  "Precision Hard-Surface in C4D & Blender": "Hard-Surface de Precisión en C4D & Blender",
  "Used for robotic limbs, Kunai blades, tactical eye gear, and modular helmets. Prioritized clean edge flow, weighted bevels, and mechanical pivot alignment for realistic joint articulation.": "Utilizado para extremidades robóticas, dagas Kunai, visores tácticos y cascos modulares. Se priorizó un edge flow limpio, biseles ponderados y alineación de pivotes mecánicos para articulaciones realistas.",
  "Standardized Coordinate Origins": "Orígenes de Coordenadas Estandarizados",
  "Every trait was authored around identical world pivots (neck socket, belt waistline, shoulder anchor) allowing programmatic assembly scripts to compose avatars automatically.": "Cada trait fue creado alrededor de pivotes espaciales idénticos (anclaje de cuello, línea de cintura, hombros), permitiendo a los scripts de composición ensamblar avatares programáticamente.",
  "Topology & Polygroup Discipline": "Disciplina de Topología & Polygroups",
  "Meshes were organized with clear polygroups and material IDs, making secondary colorway iterations and texture map assignments effortless.": "Las mallas se estructuraron con polygroups e IDs de material claros, agilizando las iteraciones de color secundarias y la asignación de mapas de texturas.",
  "ZBrush Organic Sculpting:": "Escultura Orgánica en ZBrush:",
  "Tactical chest sling sculpted on a character mannequin showing dynamic cloth folds and zipper detailing.": "Pechera táctica cruzada esculpida sobre maniquí anatómico mostrando pliegues dinámicos de tela y detalles de cremallera.",
  "ZBrush Viewport": "Viewport de ZBrush",
  "Belt & Pouch Sculpting:": "Escultura de Cinturones & Bolsillos:",
  "Heavy leather belt with eyelets and modular pouch volume crafted for scavenger factions.": "Cinturón de cuero pesado con ojales y bolsillos modulares confeccionados para facciones recolectoras.",
  "Blender Hand-Gear Modeling:": "Modelado de Guantes en Blender:",
  "Subdivision surface modeling and color-coded material ID layout for tactical combat gloves, knuckle armor, and wrist closures across factions.": "Modelado de superficies de subdivisión y separación por IDs de material para guantes tácticos de combate, nudillos y cierres de muñeca entre facciones.",
  "Blender Viewport": "Viewport de Blender",
  "Helmet Material IDs:": "IDs de Material en Casco:",
  "Color-coded polygroup separation on a futuristic pilot helmet ready for multi-layer PBR shading.": "Separación de polygroups por color en casco de piloto futurista listo para sombreado PBR multicapa.",
  "C4D / Blender Viewport": "Viewport C4D / Blender",
  "TEXTURING & LOOKDEV IN BLENDER": "TEXTURIZADO & LOOKDEV EN BLENDER",
  "Crafting tactile PBR shader networks that celebrate every scratch, reflection, and glow.": "Creación de redes de shaders PBR táctiles que destacan cada rasguño, reflejo y emisión lumínica.",
  "Once high-poly modeling and retopology were locked, texturing and LookDev were developed inside Blender. To make each asset pop on digital marketplace cards and full-screen renders, I authored nuanced physical shader networks:": "Una vez cerrados el modelado high-poly y la retopología, el texturizado y LookDev se desarrollaron en Blender. Para que cada asset destacara tanto en fichas comerciales como en renders a pantalla completa, creé redes de shaders físicos con gran riqueza de matices:",
  "Weathered Leather & Fabrics": "Cueros y Telas Envejecidas",
  "Micro-roughness variations, subtle surface creasing, and edge wear highlighting the handmade quality of scavenger faction gear.": "Variaciones de microrrugosidad, sutiles arrugas superficiales y desgaste en bordes que resaltan la estética artesanal de los recolectores.",
  "Industrial Metals & Machining": "Metales Industriales & Mecanizado",
  "Anodized coatings with faint hairline scratches, radial brush marks on cylinder ends, and realistic metallic reflection falloff.": "Recubrimientos anodizados con microarañazos, marcas radiales de cepillado en extremos cilíndricos y decaimiento realista de reflejos metálicos.",
  "Glass Refraction & Energy Volumes": "Refracción de Cristal & Volúmenes de Energía",
  "Full transmission glass shaders with internal electric filament geometry and emissive bloom for alchemical power capsules.": "Shaders de cristal con transmisión completa, filamentos eléctricos internos y resplandor emisivo para cápsulas de energía alquímica.",
  "Studio Presentation Lighting": "Iluminación de Presentación en Estudio",
  "Clean 3-point rim and key lighting setups against neutral deep-space dark backdrops, ensuring asset silhouettes read immediately.": "Esquemas limpios de luz clave y contraluz (rim light) de 3 puntos sobre fondos oscuros neutros, garantizando lectura instantánea de cada silueta.",
  "MODULAR ASSET SHOWCASE": "SHOWCASE DE ASSETS MODULARES",
  "Curated gallery of production-ready 3D traits rendered across factions.": "Galería curada de traits 3D listos para producción renderizados por facción.",
  "The final asset library encompassed dozens of modular pieces ready for generative deployment. Below is a comprehensive exhibition of the final beauty renders delivered to the MWO team, showcasing the balance between high-end hard-surface precision and rich material storytelling:": "La librería final abarcó decenas de piezas modulares listas para integración generativa. A continuación se presenta una exhibición completa de los renders de presentación entregados al equipo de MWO, demostrando el equilibrio entre precisión hard-surface de alta gama y narrativa visual de materiales:",
  "Headgear · High-Tech": "Cascos · Alta Tecnología",
  "Cybernetic Sentry Helm": "Casco Centinela Cibernético",
  "Beveled polymer plating with articulated neck hydraulics and emissive lower visor.": "Placas de polímero biseladas con articulación hidráulica en cuello y visor inferior emisivo.",
  "Cybernetics · Mechanical": "Cibernética · Mecánica",
  "Heavy Hydraulic Arm Mk.I": "Brazo Hidráulico Pesado Mk.I",
  "Segmented ball-joint linkages, pneumatic cabling, and precision utility claw.": "Eslabones con rótulas segmentadas, cableado neumático y pinza utilitaria de precisión.",
  "Cybernetics · Articulation": "Cibernética · Articulación",
  "Hydraulic Arm (Profile)": "Brazo Hidráulico (Perfil)",
  "Carbon-reinforced shoulder mounting plate designed for zero clipping with body armor.": "Placa de montaje en hombro reforzada en carbono diseñada para evitar colisiones con pecheras.",
  "Cybernetics · Heavy Industrial": "Cibernética · Industrial Pesado",
  "Bionic Servo Arm Mk.II": "Brazo Biónico Servo Mk.II",
  "Reinforced hydraulic pistons and modular wrist interface for auxiliary tool attachments.": "Pistones hidráulicos reforzados e interfaz de muñeca modular para acople de herramientas auxiliares.",
  "Cybernetics · LookDev": "Cibernética · LookDev",
  "Servo Arm (Isometric)": "Brazo Servo (Isométrico)",
  "Anodized dark alloy sleeves with brushed steel knuckle joints and pressure lines.": "Fundas de aleación oscura anodizada con articulaciones de acero cepillado y líneas de presión.",
  "Eyewear · Scavenger": "Visores · Recolector",
  "Slotted Aviator Goggles": "Antiparras Aviador Ranuradas",
  "Aged leather mask with double-stitched strap, brass buckle rings, and steel eye slits.": "Montura de cuero envejecido con correa de doble costura, anillas de latón y rendijas de acero.",
  "Eyewear · Tactical Detail": "Visores · Detalle Táctico",
  "Aviator Goggles (Rear View)": "Antiparras Aviador (Vista Posterior)",
  "Highlighting strap elasticity, inner leather padding, and metallic rivet fasteners.": "Destacando la elasticidad de la correa, el acolchado interior de cuero y los remaches metálicos.",
  "Relics · Alchemist": "Reliquias · Alquimista",
  "Electro-Plasma Potion": "Poción Electro-Plasma",
  "Conical blown-glass vessel with illuminated filament wire and machined brass sealing cap.": "Recipiente cónico de vidrio soplado con filamento interno iluminado y tapón de latón mecanizado.",
  "Relics · Energy Cell": "Reliquias · Celda de Energía",
  "Plasma Cell Variant B": "Celda de Plasma Variante B",
  "Surface refraction highlights and volumetric emissive core engineered in Blender cycles.": "Reflejos de refracción superficial y núcleo emisivo volumétrico creado en Blender Cycles.",
  "Relics · Chemical Flask": "Reliquias · Matraz Químico",
  "Plasma Capsule Mk.III": "Cápsula de Plasma Mk.III",
  "Threaded brass bottom spike allowing integration into modular utility belts and rigs.": "Punta inferior roscada de latón para acople directo en cinturones y arneses tácticos.",
  "Waist Gear · Tactical": "Cinturones · Táctico",
  "Modular Leather Rig 01": "Arnés Modular de Cuero 01",
  "Reinforced saddle leather waist belt with dual ventilation grommets and sculpted field bag.": "Cinturón de vaqueta reforzado con ojales de ventilación y cartuchera de campo esculpida.",
  "Waist Gear · Utility": "Cinturones · Utilitario",
  "Scavenger Belt Rig 02": "Cinturón Recolector 02",
  "Compact belt variant with streamlined utility buckle and fast-access pouch placement.": "Variante compacta con hebilla utilitaria aerodinámica y disposición de bolsillos de acceso rápido.",
  "Waist Gear · Field Gear": "Cinturones · Equipo de Campo",
  "Tactical Utility Harness 03": "Arnés Utilitario Táctico 03",
  "Multi-pocket equipment arrangement optimized for survivalist character archetypes.": "Distribución multipocket optimizada para arquetipos de personajes de supervivencia.",
  "Waist Gear · Heavy Ammo": "Cinturones · Munición Pesada",
  "Artillery Belt Rig 04": "Cinturón de Artillería 04",
  "Featuring specialized cylindrical holster clips designed to house potion canisters and ammo.": "Con clips cilíndricos especializados diseñados para alojar frascos de pociones y munición.",
  "Masks · Faction Cloth": "Máscaras · Tela de Facción",
  "Rebel Face Bandana 01": "Bandana Facial Rebelde 01",
  "Subdivision sculpted face drape with micro-fiber weave and back-knot tension folds.": "Cubreboca esculpido con trama de microfibra y pliegues de tensión con nudo posterior.",
  "Masks · Infiltration": "Máscaras · Infiltración",
  "Ghost Cover Bandana 02": "Bandana Ghost Cover 02",
  "Dark fabric pass with edge fraying details and nose bridge contouring.": "Variante de tela oscura con detalles de deshilachado y contorno anatómico nasal.",
  "Masks · Insignia": "Máscaras · Insignia",
  "Faction Insignia Bandana 03": "Bandana Insignia de Facción 03",
  "Embossed faction sigil across the fabric surface with high-contrast edge highlights.": "Emblema de facción en relieve sobre la superficie de tela con realces de borde en alto contraste.",
  "Environment · Habitat": "Entorno · Hábitat",
  "Brutalist Botanical Planter": "Maceta Botánica Brutalista",
  "Faceted concrete planter asset symbolizing the fragile resurgence of nature in a cyberpunk world.": "Maceta facetada de concreto que simboliza el frágil resurgimiento de la naturaleza en un mundo cyberpunk.",
  "INTEROPERABILITY & DELIVERY": "INTEROPERABILIDAD & ENTREGA",
  "Ensuring smooth ingestion into procedural generation engines and web viewers.": "Garantizando una integración fluida en motores de generación procedural y visores web.",
  "Creating 30+ standalone 3D models is only half the battle in a modular character ecosystem; the real technical challenge is guaranteed interoperability. Every single model was audited against the project’s master mannequin rig to confirm consistent scale, rotation axes, and zero penetration across overlapping accessories (e.g. wearing a bandana underneath goggles while carrying a robotic arm over a heavy leather belt).": "Crear más de 30 modelos 3D independientes es solo la mitad del desafío en un ecosistema de personajes modulares; el verdadero reto técnico radica en garantizar la interoperabilidad. Cada modelo individual fue auditado contra el maniquí maestro del proyecto para confirmar escala consistente, ejes de rotación alineados y cero penetración entre accesorios superpuestos (por ejemplo, llevar una bandana debajo de las antiparras mientras se porta un brazo robótico sobre un cinturón de cuero grueso).",
  "Universal OBJ Geometry": "Geometría OBJ Universal",
  "Preserving high-density quad topology and explicit smoothing groups for offline marketing renders and print collateral.": "Preservación de topología quad de alta densidad y smoothing groups explícitos para renders de marketing y piezas gráficas.",
  "Real-Time GLB & WebGL Ready": "GLB en Tiempo Real & Listo para WebGL",
  "Exported with packed PBR textures (BaseColor, Metallic-Roughness, Normal, Emissive) for real-time web viewers and metaverse avatar compositors.": "Exportación con texturas PBR empaquetadas (BaseColor, Metallic-Roughness, Normal, Emissive) para visores web en tiempo real y componedores de avatares.",
  "Non-Destructive Layering": "Capas No Destructivas",
  "Every piece designed with strict clearance envelopes, ensuring that an avatar generated with 5 simultaneous traits never suffers clipping.": "Cada pieza fue diseñada con tolerancias estrictas de holgura, asegurando que un avatar generado con 5 traits simultáneos nunca sufra colisiones de malla.",
  "Turnkey Asset Hand-off": "Entrega Llave en Mano",
  "Comprehensive naming convention and folder structure delivered to the dev team for automated batch rendering scripts.": "Convención integral de nombres y estructura de carpetas entregada al equipo de desarrollo para scripts de renderizado por lotes.",
  "RESULTS & IMPACT": "RESULTADOS & IMPACTO",
  "Modular 3D traits created, sculpted, and textured": "Traits 3D modulares creados, esculpidos y texturizados",
  "Zero-clipping tolerance achieved across modular combinations": "Tolerancia cero colisiones lograda entre combinaciones modulares",
  "From initial 2D sketches to final production hand-off": "Desde bocetos 2D iniciales hasta entrega final de producción",
  "Dual Pipelines": "Pipelines Duales",
  "Dual Pipelines": "Pipelines Duales",
  "SubD high-res stills alongside real-time GLB assets": "Renders high-res SubD junto con assets GLB en tiempo real",
  "“When building a modular character system, you aren’t just designing individual 3D objects—you are designing the invisible clearance tolerances between them. Establishing the coordinate origins and bounding boxes before sculpting a single fold is what prevents weeks of rework.”": "“Al construir un sistema de personajes modulares, no estás diseñando simplemente objetos 3D individuales: estás diseñando las tolerancias de holgura invisibles entre ellos. Establecer los orígenes de coordenadas y los bounding boxes antes de esculpir el primer pliegue es lo que ahorra semanas de retrabajo.”",
  "Need a modular 3D asset pipeline for your game or project?": "¿Necesitas un pipeline de assets 3D modulares para tu juego o proyecto?",
  "From hard-surface modeling and digital sculpting to real-time engine integration and marketing CGI. Let’s discuss how to bring your character and product universes to life.": "Desde modelado hard-surface y escultura digital hasta integración en tiempo real y CGI de marketing. Hablemos de cómo dar vida al universo de tus personajes y productos.",
  "Real-Time WebGL 3D Configurator": "Configurador 3D WebGL en Tiempo Real",
  "Connected IoT Hardware CGI": "CGI para Hardware IoT Conectado",
  "Luxury Horology LookDev": "LookDev de Relojería de Lujo",
  "Ducharme Seating": "Ducharme Seating",
  "Large-Scale Venue ArchViz": "ArchViz de Espacios a Gran Escala",
  "Ducharme Seating — Large-Scale Venue ArchViz": "Ducharme Seating — ArchViz de Espacios a Gran Escala",
  "Photorealistic architectural visualization, instanced raytracing, and kinematics for world-class auditoriums.": "Visualización arquitectónica fotorrealista, raytracing instanciado y cinemática para auditorios de clase mundial.",
  "Lab / R&D": "Lab / I+D",
  "Explorations, generative AI concepts, and experimental 3D assets.": "Exploraciones, conceptos con IA generativa y assets 3D experimentales.",
  "Spec Work": "Proyecto Conceptual",
  "AI Concept & Generative Art": "Concepto IA & Arte Generativo",
  "AI-Generated Product Concepts - Lattafa Perfumes": "Conceptos de Producto Generados con IA - Lattafa Perfumes",
  "High-end 3D product concept generation using generative AI and digital post-production.": "Generación de conceptos de producto 3D de alta gama utilizando inteligencia artificial generativa y postproducción digital.",
  "About Me & Methodology": "Sobre Mí & Metodología",
  "Professional background, collaborative approach, and workflow.": "Trayectoria profesional, enfoque colaborativo y metodología de trabajo.",
  "I am a 3D product artist with": "Soy artista de CGI de producto 3D con",
  "over 7 years of experience": "más de 7 años de experiencia",
  ". I work with brands and agencies that need photo-quality images and experiences without the cost and logistics of a physical studio. I model, texture, and render the product once, and that same model powers catalog images, animations for ads, and interactive web viewers (Three.js). I work from Buenos Aires (GMT-3), offering great overlap with US time zones.": ". Trabajo con marcas y agencias que necesitan imágenes y experiencias con calidad fotográfica sin los costos y la logística de un estudio físico. Modela, textura y renderizo el producto una sola vez, y ese mismo modelo alimenta imágenes de catálogo, animaciones para anuncios y visores web interactivos (Three.js). Trabajo desde Buenos Aires (GMT-3), con excelente coincidencia horaria con EE. UU. y Europa.",
  "Brief & Scope": "Brief & Alcance",
  "We define what you need to sell, the reference materials (CAD, samples), and pieces required. Fixed quote and timeline provided.": "Definimos lo que necesitas vender, el material de referencia (CAD, muestras físicas) y las piezas requeridas. Presupuesto fijo y cronograma detallado.",
  "3D Model & Look Test": "Modelo 3D & Look Test",
  "Before full production, you approve materials and lighting on a test render. Course-correct when it's still cheap.": "Antes de la producción completa, apruebas materiales e iluminación en un render de prueba. Corrección de rumbo cuando aún es ágil y económico.",
  "Production": "Producción",
  "Catalog images, lifestyle scenes, animations, and web viewers all generated from the same core model.": "Imágenes de catálogo, escenas lifestyle, animaciones y visores web generados a partir del mismo modelo central.",
  "Delivery & Scale": "Entrega & Escalabilidad",
  "Optimized files with review rounds included. New colors and SKUs can be generated in a fraction of the time.": "Archivos optimizados con rondas de revisión incluidas. Nuevos colores y variantes SKU pueden generarse en una fracción del tiempo original.",
  "CLIENT REVIEWS": "RESEÑAS DE CLIENTES",
  "Verified feedback from international brands, founders, and creative directors.": "Opiniones verificadas de marcas internacionales, fundadores y directores creativos.",
  "Verified 5.0 / 5.0 Rating · Ongoing collaborations across USA, Canada, Australia, NZ, Spain & Latin America.": "Calificación Verificada 5.0 / 5.0 · Colaboraciones continuas en EE. UU., Canadá, Australia, Nueva Zelanda, España y Latinoamérica.",
  "Polished Marketing CGI": "CGI Pulido para Marketing",
  "“Joel did an outstanding job on our 3D product render. The quality was sharp, realistic, and exactly what we needed for our marketing materials. He took feedback on board and delivered ahead of schedule. We'll definitely be working with him again!”": "“¡Joel hizo un trabajo sobresaliente en el render 3D de nuestro producto! La calidad fue nítida, realista y exactamente lo que necesitábamos para nuestro material de marketing. Incorporó el feedback de inmediato y entregó antes de tiempo. ¡Definitivamente volveremos a trabajar con él!”",
  "3D Modelling & Rendering": "Modelado & Renderizado 3D",
  "“Je travaille avec Joel depuis longtemps et je lui confie tous mes projets! Il fait toujours l'impossible pour ma satisfaction! Je recommande.”": "“¡Trabajo con Joel desde hace mucho tiempo y le confío todos mis proyectos! ¡Siempre hace lo imposible para mi total satisfacción! Lo recomiendo al 100%.”",
  "3D ArchViz & Seating CGI": "ArchViz 3D & CGI de Mobiliario",
  "“Another excellent job from Joel. I believe this is my 4th project with Joel and my go-to for any future edits or 3D projects.”": "“Otro trabajo excelente de Joel. Creo que este es mi cuarto proyecto con él y es mi referente indiscutido para cualquier edición o proyecto 3D futuro.”",
  "3D Industrial & Product CGI": "CGI Industrial & de Producto 3D",
  "3D Animation & Motion": "Animación 3D & Motion",
  "“Excelente trabajo de Joel, puso atención a todos los detalles y al final la animación quedó perfecta. Muy buena comunicación y siempre presto a resolver cualquier inquietud. Recomendado 100%.”": "“Excelente trabajo de Joel, puso atención a todos los detalles y al final la animación quedó perfecta. Muy buena comunicación y siempre presto a resolver cualquier inquietud. Recomendado 100%.”",
  "3D Product Animation": "Animación 3D de Producto",
  "Professional & Detailed": "Profesional & Detallista",
  "“Joel B is AMAZING! His work is highly professional, visually stunning, and detailed. Collaborating with him was seamless, thanks to his deep understanding, great cooperation, and timely delivery.”": "“¡Joel B es INCREÍBLE! Su trabajo es sumamente profesional, visualmente impactante y detallado. Colaborar con él fue impecable gracias a su comprensión profunda, gran cooperación y entrega puntual.”",
  "Exceptional Proactivity": "Proactividad Excepcional",
  "“Joel B exceeded all my expectations with his exceptional professionalism and incredible attention to detail. His proactive communication and deep understanding made working together a breeze. Highly recommend!”": "“Joel B superó todas mis expectativas con su excepcional profesionalismo y atención al detalle. Su comunicación proactiva y rápida comprensión hicieron que trabajar juntos fuera muy fluido. ¡Muy recomendado!”",
  "Professional Packaging": "Packaging Profesional",
  "“Joel ha hecho un muy buen trabajo con el packaging. Entendió rápido lo que necesitaba, fue atento en todo momento y tuvo mucha paciencia con los ajustes. El resultado final quedó muy profesional y estoy muy contento.”": "“Joel ha hecho un muy buen trabajo con el packaging. Entendió rápido lo que necesitaba, fue atento en todo momento y tuvo mucha paciencia con los ajustes. El resultado final quedó muy profesional y estoy muy contento.”",
  "3D Packaging & Branding": "Packaging 3D & Branding",
  "“This is my second time working with Joel because he's quick and easy to work with... and the product is awesome and fairly priced. Will definitely work with him again in the future.”": "“Esta es mi segunda vez trabajando con Joel porque es rápido y muy fácil trabajar con él... el producto final es increíble y a un precio muy justo. Definitivamente volveré a trabajar con él en el futuro.”",
  "3D Product Rendering": "Renderizado 3D de Producto",
  "“Always a pleasure working with Joel! High-end renders, quick understanding of the brief, and consistent five-star delivery every single time.”": "“¡Siempre es un placer trabajar con Joel! Renders de alta gama, rápida comprensión del brief y entrega consistente de cinco estrellas en cada oportunidad.”",
  "Ready to upgrade your product visuals?": "¿Listo para elevar los visuales de tus productos?",
  "Let's discuss how 3D CGI and interactive WebGL can scale your imagery. Book a 15-min intro call or request a quote.": "Conversemos sobre cómo el CGI 3D y el WebGL interactivo pueden escalar tu catálogo visual. Agenda una llamada de 15 min o solicita una cotización.",
  "Name": "Nombre",
  "Email": "Email",
  "Project Type": "Tipo de Proyecto",
  "Budget Range": "Rango de Presupuesto",
  "Project Details": "Detalles del Proyecto",
  "Tell me about your project...": "Cuéntame sobre tu proyecto...",
  "Select project type...": "Selecciona tipo de proyecto...",
  "Select range...": "Selecciona rango...",
  "Product Rendering / CGI": "Render de Producto / CGI",
  "3D Animation / Motion": "Animación 3D / Motion",
  "ArchViz / Spatial": "ArchViz / Espacial",
  "Other": "Otro",
  "IoT Smart Hardware": "Hardware Inteligente IoT",
  "Product CGI & Shaders": "CGI de Producto & Shaders",
  "Brand Identity & Launch": "Identidad de Marca & Lanzamiento",
  "Connected IoT Hardware — Visual Identity & Global Launch Campaign": "Hardware IoT Conectado — Identidad Visual & Campaña Global de Lanzamiento",
  "Comprehensive 3D visual development, procedural technical schematics, and commercial launch ecosystem for a connected smart bottle — designed to highlight internal IoT features, drive high-volume pre-orders, and secure global cobranding partnerships with FIFA World Cup Qatar and Orangetheory Fitness.": "Desarrollo visual 3D integral, esquemáticas técnicas procedurales y ecosistema comercial de lanzamiento para una botella inteligente conectada — diseñado para visibilizar la ingeniería interna, impulsar reservas masivas y asegurar acuerdos de cobranding con la Copa Mundial FIFA Qatar y Orangetheory Fitness.",
  "Physical Product Simulation:": "Simulación Física de Producto:",
  "Photorealistic PBR lookdev of the 8Bottle smart vessel docked on its inductive wireless charging station with active capacitive micro-LED indicators.": "LookDev PBR fotorrealista de la botella 8Bottle acoplada a su estación de carga inalámbrica por inducción con indicadores táctiles micro-LED activos.",
  "Hero Launch Key Visual": "Visual Clave de Lanzamiento",
  "Lead 3D CGI Artist & Visual Identity Designer": "Artista CGI 3D Líder & Diseñador de Identidad Visual",
  "8Bottle Inc. (San Francisco / Global)": "8Bottle Inc. (San Francisco / Global)",
  "Connected Consumer IoT & Premium Lifestyle": "IoT de Consumo Conectado & Estilo de Vida Premium",
  "10 weeks": "10 semanas",
  "10 weeks": "10 semanas",
  "Cinema 4D · Redshift · Substance 3D · After Effects · Photoshop": "Cinema 4D · Redshift · Substance 3D · After Effects · Photoshop",
  "Full CGI launch campaign, C4D procedural blueprint teardown, PBR droplet lookdev, 7 technical infographics, cobranding editions": "Campaña de lanzamiento 100% CGI, despiece blueprint procedural en C4D, lookdev de gotas PBR, 7 infografías técnicas, ediciones de cobranding",
  "8Bottle was conceived as the next generation of connected hydration hardware — a premium smart bottle engineered with an integrated micro-LED capacitive touch display, algorithmic sip-tracking sensors, and a 15-day battery powered via inductive wireless charging.": "8Bottle fue concebida como la nueva generación de hardware de hidratación conectada: una botella inteligente premium con pantalla táctil capacitiva micro-LED integrada, sensores de seguimiento algorítmico de consumo y batería de 15 días con carga inalámbrica por inducción.",
  "With the physical product still locked in engineering prototypes and tooling phases, the brand faced a high-stakes market entry: they needed to launch a global crowdfunding campaign, pitch international retail distributors, and negotiate high-profile cobranding partnerships (including limited editions for the FIFA World Cup Qatar and Orangetheory Fitness) without a single manufactured production unit in hand.": "Con el producto físico aún en prototipos de ingeniería y fases de matricería, la marca afrontaba un lanzamiento de alto riesgo: necesitaban lanzar una campaña global de crowdfunding, presentar el producto a distribuidores internacionales y negociar alianzas de cobranding de primer nivel (incluyendo ediciones para la Copa Mundial FIFA Qatar y Orangetheory Fitness) sin tener una sola unidad física terminada.",
  "Procedural Blueprint & Internal Structure:": "Blueprint Procedural & Estructura Interna:",
  "Custom Cinema 4D technical shader engineered to illustrate internal vacuum chamber geometry, wall thicknesses, and sensor housing for technical launch collateral.": "Shader técnico personalizado en Cinema 4D desarrollado para ilustrar la geometría de la cámara de vacío interna, espesores de pared y alojamiento de sensores para material técnico de lanzamiento.",
  "C4D Technical Shader": "Shader Técnico C4D",
  "A product cannot sell on technical specifications alone — it requires compelling 3D visuals engineered to seduce buyers, prove innovation, and close commercial deals before tooling begins.": "Un producto no puede venderse únicamente con especificaciones técnicas: requiere piezas 3D convincentes diseñadas para seducir compradores, demostrar la innovación y cerrar acuerdos comerciales antes de iniciar la matricería.",
  "Crowdfunding backers, retail buyers, and brand partners evaluate consumer tech with their eyes in the first few seconds of scroll. Generic 3D renders placed on sterile studio backdrops fail to communicate what makes the product smart: the capacitive LED interaction, the vacuum-insulated thermal retention, the tactile grip of powder-coated steel, and the ergonomics of daily athletic use.": "Los patrocinadores de crowdfunding, compradores retail y socios comerciales evalúan el hardware de consumo en los primeros segundos de visualización. Los renders genéricos en fondos estériles de estudio no logran transmitir el valor inteligente del producto: la interacción capacitiva con LED, el aislamiento térmico al vacío, la textura táctil del acero con recubrimiento en polvo y la ergonomía deportiva.",
  "Without physical units for commercial photography, every micro-detail — from condensation beads forming on cold steel to optical light diffusion through the cap's LED array — had to be synthesized digitally with uncompromising fidelity.": "Sin unidades físicas para fotografía comercial, cada microdetalle —desde las gotas de condensación sobre el acero frío hasta la difusión óptica de la luz en la matriz LED de la tapa— debió sintetizarse digitalmente con absoluta fidelidad física.",
  "Bridging Technical Innovation & Commercial Appeal:": "Conectando Innovación Técnica & Atractivo Comercial:",
  "Translating functional product design into a tactile, aspirational consumer tech artifact engineered to maximize pre-order conversions and retail distribution.": "Traducción del diseño funcional en un artefacto tecnológico táctil y aspiracional, concebido para maximizar las conversiones de preventa y la distribución retail.",
  "Form & Silhouette": "Forma & Silueta",
  "Three hard commercial and technical targets framed the visual pipeline:": "Tres objetivos comerciales y técnicos definieron el pipeline visual:",
  "0 Units": "0 Unidades",
  "Manufactured production units in hand at project kickoff — 100% synthetic visual launch": "Unidades de producción fabricadas al inicio del proyecto — lanzamiento 100% visual y sintético",
  "15-Day": "15 Días",
  "Battery life & wireless inductive charging system visualized through exploded 3D architecture": "Autonomía de batería y sistema de carga inalámbrica por inducción visualizados mediante arquitectura 3D explosionada",
  "6 Channels": "6 Canales",
  "Single master 3D pipeline powering Crowdfunding, Retail Decks, FIFA/Gym Cobranding & Social": "Un único pipeline 3D maestro abasteciendo Crowdfunding, Decks de Inversión, Cobranding FIFA/Gym y Redes",
  "Zero Photographic References": "Cero Referencias Fotográficas",
  "Every material property (double-wall vacuum stainless steel, food-grade silicone seals, soft-touch matte powder coat) had to be calibrated procedurally within Cinema 4D and Redshift without physical production samples.": "Cada propiedad material (acero inoxidable de doble pared al vacío, sellos de silicona de grado alimenticio, recubrimiento en polvo mate) debió calibrarse proceduralmente en Cinema 4D y Redshift sin muestras físicas terminadas.",
  "Capacitive LED Sub-surface Diffusion": "Difusión Subsuperficial de Micro-LED",
  "The smart cap features micro-LED notifications hidden beneath a semi-translucent polymer shell. The shader had to accurately replicate physical light scattering, falloff, and ambient contrast.": "La tapa inteligente cuenta con notificaciones micro-LED ocultas bajo un polímero semitranslúcido. El shader debió replicar con precisión la dispersión de luz física, el decaimiento y el contraste ambiental.",
  "Multi-Brand Partnership Integrity": "Integridad de Alianzas Multimarca",
  "Cobranding integrations for the FIFA World Cup Qatar and Orangetheory Fitness demanded strict Pantone color matching, logo displacement mapping, and premium brand alignment.": "Las integraciones de cobranding para la Copa Mundial FIFA Qatar y Orangetheory Fitness exigieron coincidencia estricta de colores Pantone, mapeo de desplazamiento de logotipos y coherencia de marca premium.",
  "Physics-Driven Condensation": "Condensación Basada en Física",
  "To convey active cold hydration without physical moisture, hundreds of thousands of micro-droplets had to be distributed across curved surfaces using procedural particle clumping and meniscus surface tension.": "Para transmitir hidratación fría sin humedad física en estudio, se distribuyeron cientos de miles de microgotas sobre superficies curvas utilizando dispersión de partículas y tensión superficial procedural.",
  "Capacitive Micro-LED & Powder Coat LookDev:": "LookDev de Micro-LED Capacitivo & Recubrimiento en Polvo:",
  "Calibrating sub-surface light diffusion through the polymer matrix, balanced with microscopic electrostatic powder-coat grain and precision brand engraving.": "Calibración de la difusión de luz subsuperficial a través del polímero, equilibrada con el grano electrostático microscópico del recubrimiento y el grabado de marca de alta precisión.",
  "Sub-Surface LED LookDev": "LookDev LED Subsuperficial",
  "High-Speed Fluid Dynamics & Splash:": "Dinámica de Fluidos & Salpicadura a Alta Velocidad:",
  "Physical fluid simulation capturing dynamic water impact, surface tension cling, and optical caustics around the cap assembly.": "Simulación física de fluidos capturando el impacto dinámico del agua, la adherencia por tensión superficial y cáusticas ópticas alrededor de la tapa.",
  "Fluid Dynamic Sim": "Simulación de Fluidos Dinámica",
  "Procedural Blueprint Shaders & Internal Structure": "Shaders Blueprint Procedurales & Estructura Interna",
  "Engineered custom non-photorealistic blueprint shaders in Cinema 4D to visualize internal thermal insulation, wall thicknesses, and sensor placement for high-impact social and technical brand explainers.": "Diseño de shaders blueprint técnicos no fotorrealistas en Cinema 4D para visualizar el aislamiento térmico interno, espesores de pared y ubicación de sensores para publicaciones y presentaciones de marca.",
  "Advanced PBR Material System": "Sistema Avanzado de Materiales PBR",
  "Engineered Redshift shaders replicating high-durability electrostatic powder coating with micro-grain bump, brushed stainless steel inner lining, and silicone gasket compliance.": "Desarrollo de shaders en Redshift que replican recubrimiento en polvo electrostático de alta durabilidad con microrelieve, revestimiento interior de acero cepillado y sellos de silicona.",
  "Procedural Meniscus & Droplet LookDev": "LookDev Procedural de Gotas & Menisco",
  "Developed dual-layer procedural displacement and particle scattering to simulate realistic condensation droplets with Fresnel refraction and internal reflection.": "Desarrollo de desplazamiento procedural en doble capa y dispersión de partículas para simular gotas de condensación hiperrealistas con refracción de Fresnel y reflexión interna.",
  "Technical Infographics & Feature Staging": "Infografías Técnicas & Puesta en Escena",
  "Engineered 7 high-clarity technical breakdown plates and infographic diagrams detailing sensor telemetry, capacitive touch feedback, wireless charging, and hydration reminders.": "Creación de 7 láminas de despiece técnico y diagramas infográficos de alta claridad que detallan la telemetría de sensores, respuesta táctil capacitiva, carga inalámbrica y recordatorios de hidratación.",
  "Stylized Exploded Teardown:": "Despiece Explosionado Estilizado:",
  "Custom Cinema 4D blueprint render isolating the smart capacitive lid, silicone seals, vacuum chamber, and wireless charging tray for launch marketing.": "Render blueprint en Cinema 4D aislando la tapa capacitiva inteligente, sellos de silicona, cámara de vacío y base de carga inalámbrica para marketing de lanzamiento.",
  "C4D Blueprint Teardown": "Despiece Blueprint C4D",
  "Physical Droplet LookDev:": "LookDev de Gotas Físicas:",
  "Geometry-based condensation beads with micro-contact shadows and caustic refractions over matte powder-coat.": "Gotas de condensación generadas como geometría con sombras de microcontacto y refracciones cáusticas sobre acabado mate.",
  "Procedural Meniscus Pass": "Pase de Menisco Procedural",
  "The '1 Master 3D Asset to 6 Channels' Architecture": "Arquitectura '1 Asset 3D Maestro para 6 Canales'",
  "Built a unified 3D staging rig where changing the bottle's colorway or corporate logo automatically propagates across hero stills, studio macros, e-commerce whites, and technical infographic plates.": "Creación de un set 3D unificado donde cambiar el color de la botella o el logotipo corporativo se propaga automáticamente a renders hero, macros de estudio, fondos blancos de e-commerce y láminas infográficas.",
  "Procedural Droplet Physics over Texture Baking": "Física de Gotas Procedurales vs Texturas Horneadas",
  "Instead of painting static wet maps, droplets were generated as physical geometry instances, preserving true optical caustic highlights under dynamic studio lighting.": "En lugar de pintar mapas de humedad estáticos, las gotas se instanciaron como geometría física, conservando reflejos cáusticos ópticos reales bajo iluminación de estudio dinámica.",
  "Cobranding as a Growth Engine": "El Cobranding como Motor de Crecimiento",
  "Rendered high-impact commemorative editions for the FIFA World Cup Qatar and Orangetheory Fitness, providing the sales team with turnkey mockups that unlocked partnership conversations.": "Renderizado de ediciones conmemorativas para la Copa Mundial FIFA Qatar y Orangetheory Fitness, entregando al equipo comercial mockups listos que abrieron negociaciones estratégicas.",
  "Functional Visual Storytelling": "Narrativa Visual Funcional",
  "Composed feature-led visual staging inspired by premium tech benchmark Larq, highlighting the rhythmic glow of the hydration reminder LED and the seamless magnetic wireless charging puck.": "Composición de puestas visuales inspiradas en referentes de alta tecnología como Larq, destacando el brillo rítmico del LED de hidratación y el acople magnético en la base inalámbrica.",
  "Master 3D Product Asset & Specs": "Asset 3D Maestro de Producto & Specs",
  "Normalized 3D Master Model & Quad Rig": "Modelo 3D Maestro Normalizado & Rig Quad",
  "Calibrated PBR LookDev, Shaders & Lighting Rig": "LookDev PBR Calibrado, Shaders & Set de Iluminación",
  "01 / OUTPUT": "01 / ENTREGABLE",
  "Hero Renders": "Renders Principales (Hero)",
  "02 / OUTPUT": "02 / ENTREGABLE",
  "Studio Lighting": "Iluminación de Estudio",
  "03 / OUTPUT": "03 / ENTREGABLE",
  "Real-World Compositing": "Composición en Entornos Reales",
  "04 / OUTPUT": "04 / ENTREGABLE",
  "Droplet Physics LookDev": "LookDev de Física de Gotas",
  "05 / OUTPUT": "05 / ENTREGABLE",
  "Technical Infographics": "Infografías Técnicas",
  "06 / OUTPUT": "06 / ENTREGABLE",
  "Cobranding Editions": "Ediciones de Cobranding",
  "1 Source Pipeline Fuels 6 High-Conversion Touchpoints:": "1 Pipeline Fuente Alimenta 6 Canales de Alta Conversión:",
  "Crowdfunding Campaign": "Campaña de Crowdfunding",
  "Investor & Partner Decks": "Decks de Inversores & Socios",
  "FIFA Qatar & Gym Cobranding": "Cobranding FIFA Qatar & Gimnasios",
  "Social Media & Ads": "Redes Sociales & Publicidad",
  "E-Commerce PDP": "Fichas de Producto E-Commerce",
  "Sensor & Telemetry Infographics:": "Infografías de Sensores & Telemetría:",
  "Communicating daily hydration tracking and capacitive touch feedback without physical photos.": "Comunicación visual del registro de hidratación y respuesta táctil capacitiva sin requerir fotos de estudio.",
  "Technical Infographic": "Infografía Técnica",
  "Wireless Inductive Docking:": "Base Inductiva Inalámbrica:",
  "Visualizing the 15-day battery architecture and magnetic alignment base for investor decks.": "Visualización de la arquitectura de batería de 15 días y base magnética para presentaciones comerciales.",
  "Hardware Feature Pass": "Pase de Funcionalidad Hardware",
  "Production-ready 4K visual assets delivered across all campaign touchpoints": "Assets visuales 4K listos para producción entregados para todos los canales de la campaña",
  "Signature colorways launched (Midnight Black, Arctic White, Cobalt Blue, Maroon, Coral, Orange)": "Variantes de color lanzadas (Midnight Black, Arctic White, Cobalt Blue, Maroon, Coral, Orange)",
  "2 Major": "2 Alianzas",
  "Strategic cobranding decks delivered (FIFA World Cup Qatar & Orangetheory Fitness)": "Presentaciones estratégicas de cobranding entregadas (Copa Mundial FIFA Qatar & Orangetheory Fitness)",
  "Technical exploded and sensor-breakdown infographics engineered": "Infografías técnicas de despiece y sensores desarrolladas",
  "Pre-tooling launch assets delivered on schedule without a physical photoshoot": "Assets de lanzamiento previos a matricería entregados en fecha sin sesión fotográfica",
  "Tier-1": "Nivel Tier-1",
  "Visual parity achieved with market benchmarks (Larq, Apple Health Ecosystem)": "Paridad visual alcanzada con referentes globales del mercado (Larq, Ecosistema Apple Health)",
  "Architectural Staging · Light Interior:": "Puesta Arquitectónica · Interior Claro:",
  "Arctic Sand edition docked on its wireless inductive charger, staged in a sunlit architectural space with natural travertine stone.": "Edición Arctic Sand sobre su cargador inalámbrico por inducción, ambientada en un espacio arquitectónico bañado por luz natural con piedra travertino.",
  "Arctic Sand Edition": "Edición Arctic Sand",
  "Architectural Staging · Dark Monolith:": "Puesta Arquitectónica · Monolito Oscuro:",
  "Midnight Black edition resting on a dark honed granite island within a contemporary residence, emphasizing silhouette and LED contrast.": "Edición Midnight Black sobre una isla de granito apomazado oscuro en una residencia contemporánea, resaltando la silueta y el contraste del LED.",
  "Midnight Black Edition": "Edición Midnight Black",
  "Real-World Environmental Compositing:": "Composición en Entornos Reales:",
  "Matched HDRI reflections, ground contact shadows, and optical color grading for lifestyle editorial.": "Reflejos HDRI calibrados, sombras de contacto en suelo y gradación de color óptica para editorial lifestyle.",
  "Lifestyle Compositing": "Composición Lifestyle",
  "Commercial Studio Staging:": "Puesta en Escena de Estudio Comercial:",
  "Controlled rim highlights and soft key lights defining the dual-wall silhouette in Midnight Black.": "Luces de recorte controladas y luz principal suave definiendo la silueta de doble pared en acabado Midnight Black.",
  "Studio LookDev": "LookDev de Estudio",
  "“When visualizing connected IoT hardware, custom technical schematics and blueprint shaders are your greatest narrative asset. By visually celebrating the internal sensors, vacuum chamber walls, and wireless charging coils rather than hiding them, we gave the brand iconic engineering collateral that proved their technology to investors, partners, and backers before tooling was even finished.”": "“Al visualizar hardware IoT conectado, los esquemas técnicos y shaders blueprint son tu recurso narrativo más potente. Al mostrar con orgullo los sensores internos, las paredes de la cámara de vacío y las bobinas de carga inalámbrica en lugar de ocultarlas, dotamos a la marca de un respaldo de ingeniería icónico que demostró su tecnología ante inversores, socios comerciales y compradores antes de fabricar la primera pieza.”",
  "Launching new consumer hardware or connected IoT products?": "¿Lanzando nuevo hardware de consumo o productos IoT conectados?",
  "Let's transform your product concepts, technical specifications, and prototypes into investor-ready visuals, procedural schematics, and high-converting launch campaigns. Book a 15-min intro call or request a quote.": "Transformemos tus conceptos de producto, especificaciones técnicas y prototipos en visuales listos para inversores, esquemáticas procedurales y campañas de alto impacto. Agenda una llamada de 15 min o solicita una cotización.",
  "PRIMICIA": "PRIMICIA",
  "Real-Time 3D Configurator": "Configurador 3D en Tiempo Real",
  "DUCHARME SEATING": "DUCHARME SEATING",
  "LookDev & Animation": "LookDev & Animación",
  "LATTAFA PERFUMES": "LATTAFA PERFUMES",
  "AI Concept Art": "Arte Conceptual con IA",
  "ArchViz & Spatial CGI": "ArchViz & CGI Espacial",
  "Two Distinct Venues": "Dos Espacios Distintos",
  "Commercial Seating": "Mobiliario Comercial",
  "Two Distinct Architectural Venues: Grand Theater & Cinema Screening Hall": "Dos Espacios Arquitectónicos Distintos: Gran Teatro & Sala de Cine",
  "Engineering photorealistic 3D visualizations for two entirely separate architectural commissions — a 2,500-seat multi-tier Grand Performance Theater built from 2D DWG blueprints, and a high-density Cinema Screening Room reconstructed from on-site construction photography.": "Desarrollo de visualizaciones 3D fotorrealistas para dos encargos arquitectónicos independientes: un Gran Teatro de 2.500 butacas modelado a partir de planos DWG 2D, y una Sala de Cine de alta densidad reconstruida a partir de fotografías de obra en hormigón crudo.",
  "Lead 3D Visualizer & ArchViz Specialist": "Visualizador 3D Líder & Especialista en ArchViz",
  "Ducharme Seating — Canada": "Ducharme Seating — Canadá",
  "Grand Performance Theater & Cinema Screening Hall": "Gran Teatro de Espectáculos & Sala de Cine",
  "8 weeks": "8 semanas",
  "Cinema 4D · Redshift · Photoshop · CAD Tools": "Cinema 4D · Redshift · Photoshop · CAD Tools",
  "2 independent venue environments, modular finish matrix, 4K walkthrough animation": "2 entornos arquitectónicos independientes, matriz modular de acabados, animación walkthrough 4K",
  "Venue 02 — Cinema Screening Room Kinematics:": "Espacio 02 — Cinemática de Sala de Cine:",
  "Photorealistic architectural walkthrough visualizing seating ergonomics, folding clearance, and spectator sightlines inside the fully realized 3D screening hall.": "Recorrido arquitectónico fotorrealista visualizando la ergonomía de butacas, radios de plegado y líneas de visión de los espectadores en la sala de cine 3D.",
  "Redshift · 4K 60fps": "Redshift · 4K 60fps",
  "Ducharme Seating has been engineering spectator and institutional seating since 1959 — outfitting world-renowned auditoriums, concert halls, arena luxury suites, and university lecture theaters across North America. Their commercial pipeline relies on architects, general contractors, and venue operators who review technical spec sheets, architectural bids, and catalog presentations before awarding multi-million-dollar tenders.": "Ducharme Seating fabrica butacas para auditorios e instituciones desde 1959, equipando salas de conciertos, suites de estadios y auditorios universitarios en toda Norteamérica. Su ciclo comercial depende de arquitectos, contratistas generales y operadores que revisan pliegos técnicos, licitaciones y catálogos antes de adjudicar contratos multimillonarios.",
  "This commission required delivering high-impact architectural CGI for": "Este encargo requirió entregar visualizaciones CGI arquitectónicas de alto impacto para",
  "two completely separate venue projects": "dos proyectos arquitectónicos completamente distintos",
  "with totally different spatial programs, lighting conditions, and architectural typologies:": "con programas espaciales, iluminación y tipologías arquitectónicas totalmente diferentes:",
  "Venue 01 — The Grand Performance Theater:": "Espacio 01 — El Gran Teatro de Espectáculos:",
  "A prestigious, multi-tiered auditorium designed from architectural DWG plans — featuring an orchestra floor, a sweeping curved wood-slat mezzanine balcony, acoustic perimeter curtains, and luxury upholstered seating for wide catalog and procurement presentations.": "Un prestigioso auditorio con múltiples niveles diseñado a partir de planos DWG: platea baja, anfiteatro curvo con lamas de madera, cortinados acústicos perimetrales y butacas tapizadas de lujo para licitaciones y catálogo.",
  "Venue 02 — The Cinema Screening Room:": "Espacio 02 — La Sala de Cine de Proyección:",
  "A specialized projection screening room with steep concrete risers, dark acoustic wall baffles, and high-density red folding cinema chairs requiring pre-installation verification and kinematic motion validation.": "Una sala de proyección especializada con gradas de hormigón pronunciadas, paneles acústicos oscuros y butacas rojas de alta densidad que requerían verificación preinstalación y validación de movimiento cinemático.",
  "Venue 01 — Grand Theater Seating Blueprint:": "Espacio 01 — Plano de Butacas del Gran Teatro:",
  "Precision 2D architectural DWG detailing stage proscenium, orchestra radial rows, curved balcony tiers, and egress aisle clearances.": "Plano DWG 2D de arquitectura detallando el proscenio, filas radiales en platea, gradas curvas de anfiteatro y anchos de pasillos de evacuación.",
  "Theater Blueprint · DWG Layout": "Plano del Teatro · Distribución DWG",
  "You cannot photograph chairs inside spaces that exist only as CAD line drawings or raw concrete construction sites.": "No puedes fotografiar butacas en espacios que solo existen como planos CAD o como obras en hormigón crudo.",
  "When bidding for major architectural tenders, commercial seating manufacturers face two fundamentally different visualization challenges depending on the venue's stage of development:": "Al licitar grandes proyectos arquitectónicos, los fabricantes de butacas afrontan dos desafíos de visualización totalmente diferentes según la etapa de la obra:",
  "In Venue 01 (The Grand Theater)": "En el Espacio 01 (El Gran Teatro)",
  ", the building was purely in schematic planning. There were no physical rooms to photograph — only 2D flat plans and finish swatches. Ducharme needed to prove how their luxury seating models would define the vast architectural volume under different wood stains and fabric colors.": ", el edificio estaba en fase de proyecto esquemático. No había salas físicas que fotografiar: solo planos 2D y muestras de materiales. Ducharme necesitaba demostrar cómo sus butacas de lujo definirían el volumen arquitectónico bajo distintos tintes de madera y tapicerías.",
  "In Venue 02 (The Cinema Screening Room)": "En el Espacio 02 (La Sala de Cine)",
  ", the venue was an active, bare-bones construction site: raw concrete stepped risers, unpainted acoustic surfaces, and temporary overhead downlights. The client needed absolute spatial proof of row spacing, folding clearances, and sightlines to the screen before signing off on chair manufacturing and delivery.": ", la sala era una obra en construcción activa: gradas de hormigón crudo, paneles acústicos sin terminar e iluminación provisional. El cliente necesitaba certeza espacial de distancias entre filas, holguras de plegado y líneas de visión a la pantalla antes de autorizar la fabricación.",
  "Venue 02 — Construction Site Reality (Cinema):": "Espacio 02 — Realidad de Obra (Cine):",
  "The cinema room during construction — bare concrete stepped tiers, unfinished acoustic panels, and ceiling downlights prior to chair delivery.": "La sala de cine durante la construcción: gradas de hormigón en bruto, paneles acústicos sin terminar e iluminación de obra previa a la instalación.",
  "On-Site Reality": "Realidad en Obra",
  "Venue 02 — Finished 3D Digital Twin (Cinema):": "Espacio 02 — Gemelo Digital 3D Terminado (Cine):",
  "The exact same cinema room digitally finished in Redshift, populated with red Ducharme cinema seating, calibrated illumination, and aisle markers.": "La misma sala terminada digitalmente en Redshift, poblada con las butacas rojas de Ducharme, iluminación calibrada y señalización de pasillos.",
  "Finished 3D Twin": "Gemelo 3D Terminado",
  "Three hard commercial and architectural targets framed the project across both commissions:": "Tres metas comerciales y arquitectónicas rigurosas definieron el proyecto:",
  "2 Venues": "2 Espacios",
  "Separate spatial typologies visualized: 2,500-seat Grand Theater & Tiered Screening Cinema": "Dos tipologías visualizadas: Gran Teatro de 2.500 butacas y Sala de Cine en gradas",
  "Active raytraced seats per environment without fidelity loss or GPU memory crashes": "Butacas con raytracing activo por espacio sin pérdida de fidelidad ni sobrecarga de memoria GPU",
  "1 Pipeline": "1 Pipeline",
  "Modular instancing system enabling instant finish swaps across both wood species & upholstery": "Sistema de instanciado modular que permite cambios instantáneos de madera y tapicería",
  "Divergent Input Data": "Datos de Entrada Divergentes",
  "Reconstructing Venue 01 purely from flat 2D DWG vector plans, while reverse-engineering Venue 02 from uncalibrated construction site photos and structural riser sections.": "Reconstrucción del Espacio 01 exclusivamente desde planos vectoriales DWG 2D, e ingeniería inversa del Espacio 02 a partir de fotos de obra y secciones de gradas.",
  "High-Density Instanced Geometry": "Geometría Instanciada de Alta Densidad",
  "Populating thousands of complex mechanical chairs across both venues without exceeding GPU VRAM limits during Redshift raytracing passes.": "Población de miles de butacas mecánicas complejas en ambos espacios sin exceder los límites de VRAM en los pases de raytracing en Redshift.",
  "Acoustic Material Realism": "Realismo de Materiales Acústicos",
  "Specifying realistic light-bounce and anisotropic micro-sheen on theatre velours, acoustic cinema wall felt, and clearcoat varnished wood slat surfaces.": "Simulación precisa de rebote lumínico y brillo anisotrópico en terciopelos teatrales, fieltro acústico para cine y lamas de madera barnizada.",
  "Kinematics & Code Compliance": "Cinemática & Cumplimiento Normativo",
  "Accurately animating the mechanical pivot and gravity-tilt fold of cinema seats to demonstrate clear egress aisle widths and unobstructed screen sightlines.": "Animación precisa del pivote mecánico y plegado por gravedad para certificar anchos de evacuación reglamentarios y líneas de visión libres.",
  "Venue 01 — Material Variant 01:": "Espacio 01 — Variante de Material 01:",
  "Blue woven upholstery with medium natural wood backing and armrests, simulated under auditorium cove lighting.": "Tapicería azul tejida con respaldo y reposabrazos en madera natural media, simulada bajo foseados de luz de auditorio.",
  "Theater Finish Option 01": "Acabado Teatro Opción 01",
  "Venue 01 — Material Variant 02:": "Espacio 01 — Variante de Material 02:",
  "Dark walnut timber shell panels with deep blue fabric, demonstrating acoustic wall sheen and stage illumination.": "Paneles de nogal oscuro con tela azul profundo, demostrando el brillo de muros acústicos e iluminación de escenario.",
  "Theater Finish Option 02": "Acabado Teatro Opción 02",
  "Theater Shell Construction (Venue 01)": "Construcción de la Envolvente del Teatro (Espacio 01)",
  "Extruded the curved balcony mezzanine, proscenium stage boundary, and acoustic vertical wood slat walls directly from DWG elevation prints (A-101).": "Extrusión del anfiteatro curvo, embocadura de escenario y lamas verticales de madera acústica directamente desde planos DWG de elevación (A-101).",
  "Camera Match to Site Photos (Venue 02)": "Camera Match con Fotos de Obra (Espacio 02)",
  "Calibrated 3D virtual camera focal lengths and sensor pitch in Redshift to match real-world construction site photos of the cinema's concrete stepped risers.": "Calibración de distancias focales y ángulo de cámara en Redshift para coincidir exactamente con las fotografías reales de las gradas de hormigón en obra.",
  "Procedural Shader Networks": "Redes de Shaders Procedurales",
  "Built modular PBR shader trees with swappable diffuse maps and roughness values to audition multiple fabric and wood species within minutes.": "Creación de árboles de shaders PBR con mapas de difusión y rugosidad intercambiables para evaluar múltiples telas y maderas en minutos.",
  "Instanced Raytracing & Kinematics": "Raytracing Instanciado & Cinemática",
  "Deployed Redshift proxy instancing along curved seating splines, rigging pivot axes to animate seat-fold motion in the cinema walkthrough.": "Implementación de proxies en Redshift sobre splines curvas, configurando ejes de pivote para animar el plegado de asientos en el recorrido del cine.",
  "Venue 01 Elevation (Theater DWG A-101):": "Espacio 01 — Elevación (Plano DWG A-101):",
  "Vertical incline, wood slat paneling boundaries, door openings, and balcony overhang dimensions.": "Pendiente vertical, modulación de lamas de madera, vanos de puertas y voladizos de anfiteatro.",
  "Theater Elevation DWG": "DWG Elevación Teatro",
  "Venue 02 Plan (Cinema Level 1 DWG):": "Espacio 02 — Planta (Plano DWG Cine Nivel 1):",
  "Structural layout detailing projection booth, acoustic wall spacing, and stepped riser heights.": "Distribución estructural detallando cabina de proyección, tabiquería acústica y alturas de escalones.",
  "Cinema DWG Plan Level 1": "DWG Planta Cine Nivel 1",
  "Two Dedicated Lighting Environments": "Dos Entornos de Iluminación Específicos",
  "Rather than a one-size-fits-all lighting rig, Venue 01 was lit with theatrical warm spotlights and cove lights, while Venue 02 utilized direct downlights and aisle illuminance.": "En lugar de un esquema genérico, el Espacio 01 se iluminó con proyectores cálidos teatrales y foseados, mientras el Espacio 02 utilizó downlights directos y balizas de pasillo.",
  "Proxy Instancing over Raw Geometry": "Proxies Instanciados vs Geometría Pura",
  "Populated over 2,500 individual chairs via lightweight GPU proxies, keeping master project files under 350 MB and enabling real-time navigation.": "Población de más de 2.500 butacas mediante proxies ligeros en GPU, manteniendo el archivo maestro por debajo de 350 MB y permitiendo navegación fluida.",
  "Finish Variant Matrix for the Theater": "Matriz de Acabados para el Teatro",
  "Separated chair geometry from material definitions, allowing Ducharme to generate complete auditorium colorway options (walnut, crimson, navy) without re-rendering geometry.": "Desacople entre geometría de butacas y materiales, permitiendo a Ducharme generar gamas cromáticas completas (nogal, carmín, azul marino) sin remodelar.",
  "Cinema Walkthrough & Kinematics Rig": "Recorrido de Cine & Rig Cinemático",
  "Engineered an animated camera flythrough to illustrate spectator eye levels and demonstrate automatic counterweight seat retraction under commercial codes.": "Animación de cámara en vuelo para ilustrar la altura de visión de los espectadores y demostrar el retorno por contrapeso exigido por normativas de evacuación.",
  "Venue 01 — 3D Axonometric Model:": "Espacio 01 — Modelo Axonométrico 3D:",
  "Translating 2D flat drawings into an isometric volume mapping wood slat walls, carpet boundaries, and balcony tiers for the Theater.": "Traducción de planos 2D a un volumen isométrico mapeando paredes de lamas de madera, alfombras y niveles de anfiteatro para el Teatro.",
  "Theater 3D Volume": "Volumen 3D Teatro",
  "Venue 01 — Stage Spatial Perspective:": "Espacio 01 — Perspectiva Espacial desde Escenario:",
  "The completed architectural shell rendered from stage level looking toward the curved acoustic balcony.": "La envolvente arquitectónica terminada renderizada desde el escenario hacia el anfiteatro acústico curvo.",
  "Theater Stage Perspective": "Perspectiva Escenario Teatro",
  "Entirely separate venue environments modeled and rendered (Grand Theater & Cinema Hall)": "Entornos arquitectónicos independientes modelados y renderizados (Gran Teatro & Sala de Cine)",
  "Production-ready catalog and RFP tender renders delivered across both spaces": "Renders para licitaciones y catálogo entregados para ambos espacios",
  "Individually instanced seats raytraced without GPU memory overhead": "Butacas instanciadas renderizadas con raytracing sin sobrecarga de GPU",
  "Spatial accuracy validated against physical on-site construction photos": "Precisión espacial certificada contra fotos reales de obra",
  "~45 min": "~45 min",
  "Average render turnaround per finish swap using modular proxy pipeline": "Tiempo promedio de render por variante de acabado gracias al pipeline de proxies",
  "Cinematic walkthrough and mechanical seating kinematics animation": "Recorrido cinemático y animación de movimiento mecánico de plegado",
  "Venue 01 — Grand Theater Master Overview:": "Espacio 01 — Vista General Maestra del Gran Teatro:",
  "Complete architectural panorama showcasing the curved wood-slat balcony, acoustic curtains, and royal blue seating.": "Panorama arquitectónico completo mostrando el anfiteatro de lamas de madera, cortinados acústicos y butacas en azul real.",
  "Grand Theater Master": "Master Gran Teatro",
  "Venue 02 — Cinema Screening Room Perspective:": "Espacio 02 — Perspectiva de Sala de Cine:",
  "Vertical camera view matching on-site perspective, showing high-density red seating installed across the concrete tiers.": "Vista de cámara coincidente con la perspectiva de obra, mostrando las butacas rojas instaladas sobre las gradas.",
  "Cinema Screening Hall": "Sala de Proyección Cine",
  "“Commercial seating is never bought in a vacuum — it is bought for a specific architectural volume. Whether the starting point is an abstract 2D CAD blueprint (like the Grand Theater) or a raw, unfinished concrete construction site (like the Cinema Screening Room), the visualizer's job is to replace spatial doubt with undeniable photorealistic certainty. Showing the operator their exact finished venue before the first bolt is delivered is what closes multi-million-dollar architectural tenders.”": "“El mobiliario comercial nunca se compra en el vacío: se adquiere para un volumen arquitectónico concreto. Ya sea que el punto de partida sea un plano CAD 2D abstracto (como el Gran Teatro) o una obra en hormigón en bruto (como la Sala de Cine), el trabajo del visualizador es erradicar toda duda espacial con certeza fotorrealista indiscutible. Mostrarle al operador su sala terminada antes de enviar el primer perno es lo que cierra contratos multimillonarios.”",
  "Need large-scale venue & architectural product CGI?": "¿Necesitas visualización CGI para recintos y arquitectura a gran escala?",
  "Let's turn your CAD designs, floorplans, and finish matrices into high-impact architectural imagery and animations. Book a 15-min intro call or request a quote.": "Transformemos tus planos CAD, plantas y catálogos de acabados en imágenes arquitectónicas y animaciones de alto impacto. Agenda una llamada de 15 min o solicita una cotización.",
  "Luxury Horology CGI": "CGI de Relojería de Lujo",
  "Hard-Surface Modeling": "Modelado Hard-Surface",
  "Unreal Engine 5 Real-Time": "Unreal Engine 5 en Tiempo Real",
  "Luxury Horology — LookDev & Real-Time Visualization": "Relojería de Lujo — LookDev & Visualización en Tiempo Real",
  "High-precision micro-mechanical modeling, procedural PBR shader engineering, and real-time Unreal Engine 5 visualization for a luxury automatic timepiece — where surface finish, bevel tolerance, and light play are design decisions.": "Modelado micromecánico de alta precisión, ingeniería de shaders PBR procedurales y visualización en tiempo real en Unreal Engine 5 para un reloj automático de lujo — donde el acabado superficial, las tolerancias de biselado y el juego de luz definen el diseño.",
  "Commercial Kinematics:": "Cinemática Comercial:",
  "Macro sequence revealing the brushed 316L stainless steel case, faceted Roman indices, and anti-reflective sapphire crystal refraction.": "Secuencia macro revelando la caja de acero inoxidable 316L cepillado, índices romanos facetados y refracción del cristal de zafiro antirreflejo.",
  "Cinematic Motion · 4K": "Motion Cinemático · 4K",
  "Lead 3D Hard-Surface & LookDev Artist": "Artista Líder 3D Hard-Surface & LookDev",
  "Kaisar Horology": "Kaisar Horology",
  "Luxury Horology & Micro-Engineering": "Alta Relojería & Microingeniería",
  "6 weeks": "6 semanas",
  "Blender · Substance 3D · Unreal Engine 5 · Redshift": "Blender · Substance 3D · Unreal Engine 5 · Redshift",
  "Sub-D quad master model, procedural steel/sapphire shaders, dial colorways, real-time UE5 showcase, 4K commercial motion": "Modelo maestro Sub-D en quads, shaders procedurales de acero/zafiro, variantes de esfera, presentación en tiempo real en UE5, motion comercial en 4K",
  "In haute horlogerie, value lives in fractions of a millimeter. Kaisar was designed as a contemporary automatic luxury timepiece combining an architectural fluted bezel, faceted Roman numeral indices, a brushed stainless-steel bracelet, and an exhibition caseback. Luxury watch brands cannot rely on standard CGI: horology collectors and luxury buyers scrutinize light falloff across hand-polished chamfers, the anisotropy of brushed steel links, and the anti-reflective double-coating of sapphire crystals.": "En la alta relojería, el valor reside en fracciones de milímetro. Kaisar fue concebido como un reloj automático de lujo que combina un bisel estriado arquitectónico, índices en números romanos facetados, brazalete de acero cepillado y fondo visto. Las marcas relojeras de lujo no pueden depender de CGI convencional: los coleccionistas examinan la caída de luz en los chaflanes pulidos a mano, la anisotropía de los eslabones y el doble tratamiento antirreflejo del cristal de zafiro.",
  "Haute Horlogerie Staging:": "Puesta en Escena de Alta Relojería:",
  "Studio light sweep highlighting radial brushing, fluted bezel facets, and physical reflections.": "Barrido de luz de estudio resaltando el cepillado radial, las facetas del bisel estriado y reflejos físicos.",
  "Hero Staging Pass": "Pase de Puesta en Escena Hero",
  "Standard commercial photography cannot capture micro-mechanical tolerances without days of focus stacking and dust retouching.": "La fotografía comercial convencional no puede capturar tolerancias micromecánicas sin días de focus stacking y retoque de polvo.",
  "Traditional macro lens photography flattens depth and struggles with high-contrast specular reflections on polished steel. Furthermore, producing physical prototypes for every dial colorway and metallurgical finish creates weeks of manufacturing delays. Kaisar required a digital twin capable of two opposing extremes: delivering offline raytraced 8K catalog stills with microscopic material truth, while running interactively at 60 fps inside Unreal Engine 5 for real-time client reviews and virtual product showcases.": "La fotografía macro tradicional aplana la profundidad y tiene dificultades con reflejos especulares de alto contraste en acero pulido. Además, fabricar prototipos para cada esfera y acabado genera semanas de demora. Kaisar exigía un gemelo digital capaz de dos extremos opuestos: entregar imágenes de catálogo en 8K con trazado de rayos y precisión microscópica, y correr interactivamente a 60 fps en Unreal Engine 5 para presentaciones virtuales.",
  "Micro-Specular Definition:": "Definición Microespecular:",
  "Eliminating photographic lens distortion while maintaining natural light falloff across faceted watch hands.": "Eliminación de distorsiones de lente manteniendo la caída natural de luz en las agujas facetadas.",
  "Macro Specular Pass": "Pase Especular Macro",
  "Three exacting standards defined the horological visualization architecture:": "Tres estándares rigurosos definieron la arquitectura de visualización relojera:",
  "0.02 mm": "0,02 mm",
  "Micro-mechanical tolerance on edge bevels, indices, and bezel fluting": "Tolerancia micromecánica en biseles, índices y estriado de bisel",
  "60 fps": "60 fps",
  "Real-time interactive viewport inspection inside Unreal Engine 5 with dynamic raytraced GI": "Inspección interactiva en tiempo real en Unreal Engine 5 con iluminación global trazada por rayos",
  "100% Quad": "100% Quads",
  "Subdivision-ready topology with zero pinching, poles, or shading artifacts": "Topología optimizada para subdivisión sin pellizcos, polos ni artefactos de sombreado",
  "Anisotropic Light Directionality": "Direccionalidad de Luz Anisotrópica",
  "Brushed stainless steel scatters light along directional grain lines. Radial brush patterns on the bezel and linear brushing on bracelet links required tangent-space micro-normal controls.": "El acero cepillado dispersa la luz siguiendo líneas direccionales de grano. El estriado radial del bisel y el cepillado lineal de los eslabones requirieron controles de micronormales en espacio tangente.",
  "Internal Glass Dispersion & Fresnel": "Dispersión Interna de Cristal & Fresnel",
  "The synthetic sapphire crystal features dual anti-reflective (AR) coatings with a subtle blue/magenta chromatic tint and an exact refractive index (n = 1.77).": "El cristal de zafiro sintético incorpora doble revestimiento antirreflejo (AR) con sutil tinte azul/magenta e índice de refracción exacto (n = 1,77).",
  "Mechanical Kinematics & Sub-Assemblies": "Cinemática Mecánica & Subensamblajes",
  "The watch consists of 48 individual micro-components (bezel, crystal, dial, hands, winding stem, crown, screw-down caseback, bracelet links) that must articulate without mesh intersection.": "El reloj se compone de 48 microelementos independientes (bisel, cristal, esfera, agujas, tija, corona, fondo roscado, eslabones) que deben articular sin intersecciones de malla.",
  "Dual-Engine Asset Optimization": "Optimización de Assets en Motor Dual",
  "Geometry had to support high-density subdivision for offline raytracing while maintaining optimized LODs for smooth 60 fps playback in Unreal Engine 5.": "La geometría debió admitir subdivisión densa para raytracing offline y a la vez niveles de detalle (LODs) optimizados para 60 fps fluidos en Unreal Engine 5.",
  "Sub-D Hard-Surface Modeling": "Modelado Hard-Surface Sub-D",
  "Constructed all case and bracelet components using pure quad topology, edge weighting, and support loops to guarantee artifact-free curvature under macro lighting.": "Construcción de todos los componentes de caja y brazalete utilizando topología de quads puros, bucles de soporte y biseles ponderados para garantizar curvatura impecable bajo iluminación macro.",
  "Procedural Horology PBR Shaders": "Shaders PBR Procedurales para Relojería",
  "Engineered custom roughness-metallicity networks in Substance 3D and Redshift simulating 316L surgical-grade stainless steel with micro-scratches and chamfered polish.": "Desarrollo de redes de rugosidad y metalicidad en Substance 3D y Redshift simulando acero quirúrgico 316L con microrayas y pulido en biseles.",
  "Dial Variation & Micro-Pattern Exploration": "Exploración de Esferas & Microtexturas",
  "Modeled and shaded multiple dial finishes (guilloché texture, meteorite sunburst, and deep matte anthracite) with applied faceted indices.": "Modelado y sombreado de múltiples esferas (guilloché, rayo de sol / sunburst y antracita mate profunda) con índices facetados aplicados.",
  "Unreal Engine 5 Lumen & Nanite Staging": "Puesta en Escena con Lumen & Nanite en UE5",
  "Migrated assets into Unreal Engine 5, establishing calibrated real-time studio lighting, depth of field, and interactive orbit cameras.": "Migración de assets a Unreal Engine 5, configurando iluminación de estudio en tiempo real, profundidad de campo calibrada y cámaras orbitales interactivas.",
  "Pure Quad Topology:": "Topología de Quads Puros:",
  "Zero triangles or n-gons across high-curvature transitional surfaces to prevent shading artifacts under grazing light.": "Cero triángulos o n-gonos en superficies de transición para prevenir artefactos de sombreado bajo luz rasante.",
  "Topology Wireframe Pass": "Pase de Malla Wireframe",
  "Exploded Mechanical Assembly:": "Despiece Mecánico Explosionado:",
  "Component-by-component alignment validating bezel seating, crystal gasket, dial spacer, and caseback threading.": "Alineación pieza por pieza validando el asiento del bisel, junta del cristal, separador de esfera y rosca del fondo.",
  "Mechanical Teardown": "Despiece Mecánico",
  "Micro-Bevels over Smooth Shading": "Microbiseles Físicos vs Suavizado Virtual",
  "Modeled physical micro-chamfers on every edge rather than relying on bump maps, ensuring specular highlights realistically catch light at steep viewing angles.": "Modelado de microchaflanes físicos en cada arista en lugar de mapas de relieve, asegurando que los reflejos especulares atrapen la luz en ángulos pronunciados.",
  "Decoupled Dial & Bezel Material System": "Sistema Desacoplado de Esfera & Bisel",
  "Segmented the watch into modular material channels, enabling instant swaps between dial colorways, bezel finishes, and strap combinations without re-rendering the chassis.": "Segmentación del reloj en canales de material modulares, permitiendo cambios instantáneos de esferas, biseles y correas sin volver a renderizar la caja.",
  "Hybrid Pipeline: Offline Redshift + Real-Time UE5": "Pipeline Híbrido: Redshift Offline + UE5 en Tiempo Real",
  "Provided the client with offline 8K hero plates for print advertising alongside an interactive Unreal Engine 5 scene for virtual showroom presentations.": "Entrega de láminas en 8K para publicidad gráfica junto a una escena interactiva en Unreal Engine 5 para salas de exhibición virtuales.",
  "Optical Macro Sensor Calibration": "Calibración Óptica de Sensor Macro",
  "Tuned virtual focal lengths to 85mm and 100mm macro equivalents with physical aperture blades to produce authentic lens bokeh and horological scale perception.": "Ajuste de distancias focales a equivalentes macro de 85 mm y 100 mm con diafragmas físicos para lograr bokeh auténtico y percepción de escala relojera.",
  "Unreal Engine 5 Real-Time Viewport:": "Viewport en Tiempo Real de Unreal Engine 5:",
  "Real-time raytraced reflections, dynamic exposure, and 60 fps camera orbit for client design reviews.": "Reflejos con trazado de rayos en tiempo real, exposición dinámica y cámara orbital a 60 fps para revisiones con el cliente.",
  "UE5 Real-Time · 60fps": "UE5 en Tiempo Real · 60fps",
  "Dial Colorway Matrix:": "Matriz de Esferas y Acabados:",
  "Exploring guilloché, sunburst, and matte finishes with matching date discs and index metallics.": "Exploración de guilloché, satinado sunburst y acabados mate con discos de fecha a tono.",
  "Dial Colorway Study": "Estudio de Variantes de Esfera",
  "Production-ready 4K and 8K commercial hero stills delivered": "Imágenes comerciales en 4K y 8K listas para producción entregadas",
  "Pure quad topology verified across all 48 mechanical components": "Topología en quads puros verificada en los 48 componentes mecánicos",
  "Interactive viewport performance inside Unreal Engine 5": "Rendimiento interactivo en viewport en Unreal Engine 5",
  "Cinematic motion sequences & exploded component animations": "Secuencias de animación cinemática y despiece explosionado",
  "Physical prototypes required before dial design sign-off": "Prototipos físicos requeridos antes de la aprobación del diseño de esferas",
  "Signature dial variations finalized (Matte Anthracite, Sunburst, Guilloché)": "Variantes distintivas de esfera finalizadas (Matte Anthracite, Sunburst, Guilloché)",
  "Fluted Bezel & Crown Chamfers:": "Bisel Estriado & Chaflanes de Corona:",
  "Raytraced grazing light revealing sharp metallurgical bevels and knurled crown relief.": "Luz rasante trazada por rayos revelando biseles metálicos definidos y relieve moleteado de corona.",
  "Macro Bevel Detail": "Detalle de Bisel Macro",
  "Faceted Hands & Dial Texture:": "Agujas Facetadas & Textura de Esfera:",
  "Precise specular highlights along faceted indices and anti-reflective sapphire reflection.": "Reflejos especulares precisos en índices facetados y destellos en cristal de zafiro antirreflejo.",
  "Horology Macro Pass": "Pase Macro de Relojería",
  "“In luxury horology, lighting is not about illumination — it is about revealing geometry. The breakthrough came when we stopped lighting the watch like a product and started lighting it like a set of polished mirrors. Once each chamfer had its own dedicated highlight card, the craftsmanship instantly jumped from ‘good 3D’ to genuine Swiss luxury.”": "“En la alta relojería, iluminar no es solo dar luz: es revelar la geometría. El salto decisivo ocurrió cuando dejamos de iluminar el reloj como un producto y comenzamos a tratarlo como un conjunto de espejos pulidos. En cuanto cada chaflán tuvo su propio reflector dedicado, la pieza pasó de ser un ‘buen 3D’ a transmitir auténtico lujo suizo.”",
  "Looking for luxury horology & precision hard-surface CGI?": "¿Buscas visualización CGI de alta relojería o hard-surface de precisión?",
  "Let's elevate your timepiece, jewelry, or precision engineering product with museum-grade 3D modeling, PBR shaders, and real-time Unreal Engine 5 experiences. Book a 15-min intro call or request a quote.": "Elevemos tu reloj, joyería o producto de ingeniería con modelado 3D de precisión, shaders PBR de nivel museo y experiencias en tiempo real con Unreal Engine 5. Agenda una llamada de 15 min o solicita una cotización.",
  "Product CGI": "CGI de Producto",
  "Real-time WebGL": "WebGL en Tiempo Real",
  "E-commerce": "E-commerce",
  "Lab Line — Real-time 3D Configurator": "Línea Lab — Configurador 3D en Tiempo Real",
  "A real-time 3D configurator for the Lab line that lets customers assemble their own case component by component, with instant price feedback and photoreal previews.": "Un configurador 3D en tiempo real para la línea Lab que permite a los clientes armar su propia valija componente por componente, con actualización instantánea de precio y vistas fotorrealistas.",
  "Launch Live 3D Configurator": "Abrir Configurador 3D en Vivo",
  "primicia.com.ar/arma-tu-valija": "primicia.com.ar/arma-tu-valija",
  "Primicia — Lab Line": "Primicia — Línea Lab",
  "primicia.com.ar/arma-tu-valija ↗": "primicia.com.ar/arma-tu-valija ↗",
  "16 weeks (Feb–May)": "16 semanas (Feb–May)",
  "Blender · Substance 3D Painter · Three.js · WebGL · Tiendanube": "Blender · Substance 3D Painter · Three.js · WebGL · Tiendanube",
  "Real-time configurator, optimized asset library, cart integration": "Configurador en tiempo real, librería de assets optimizada, integración al carrito",
  "Primicia is one of Argentina's leading luggage brands. With the Lab line, they moved into customizable product: instead of buying a finished case, the customer assembles one — shell, base, details, divider, lining, organizers — each selected separately. The value isn't in any single piece. It's in the combination.": "Primicia es una de las marcas de equipaje líderes en Argentina. Con la línea Lab incursionaron en productos personalizables: en lugar de comprar una valija armada, el cliente la configura por partes —carcasa, base, detalles, divisor, forrería, organizadores— cada uno seleccionado por separado. El valor no reside en una sola pieza, sino en su combinación.",
  "Static photography can't sell a configurable product.": "La fotografía estática no puede vender un producto configurable.",
  "Customers could see the pieces. They could never see their combination. Without a live preview, the buying decision rested on imagination — which produced hesitation, repeated color inquiries, and abandoned carts.": "Los clientes podían ver las piezas individuales, pero nunca su combinación exacta. Sin una vista previa en vivo, la decisión de compra dependía de la imaginación, lo que generaba dudas, consultas repetidas de color y carritos abandonados.",
  "Three hard targets framed the work:": "Tres objetivos rigurosos definieron el desarrollo:",
  "< 2s": "< 2s",
  "Full 3D load on 4G mobile": "Carga completa del 3D en conexiones móviles 4G",
  "Interaction on mid-range phones": "Interacción fluida en dispositivos móviles de gama media",
  "1.26 M": "1,26 M",
  "Possible combinations, with no performance penalty": "Combinaciones posibles sin penalización de rendimiento",
  "Mobile-first": "Enfoque Mobile-First",
  "Mid-range Android was the baseline — not a desktop GPU.": "Dispositivos Android de gama media fueron la referencia base, no una tarjeta gráfica de escritorio.",
  "No third-party visualization SDK": "Sin SDKs de Visualización Externos",
  "No monthly licensing, no external viewer dependency.": "Sin licencias mensuales recurrentes ni dependencias de visores de terceros.",
  "Native to the store": "Integración Nativa en la Tienda",
  "The configurator had to live inside the existing e-commerce platform and feed its native cart.": "El configurador debía operar dentro de la plataforma de e-commerce existente y alimentar su carrito nativo.",
  "One page, no apps": "Una Sola Página, Sin Apps",
  "No plugins, no separate experience to install or maintain.": "Sin extensiones, plugins ni aplicaciones adicionales que instalar o mantener.",
  "Component architecture": "Arquitectura por Componentes",
  "Every part defined as an independent sub-model, mapped to the UI state.": "Cada pieza modelada como submodelo independiente, mapeada al estado de la interfaz.",
  "Modular modeling": "Modelado Modular",
  "Clean topology, low poly count, consistent pivots across pieces.": "Topología limpia, bajo conteo poligonal y pivotes unificados entre todas las piezas.",
  "Procedural texturing": "Texturizado Procedural",
  "Map baking in Substance 3D Painter for polymers, textiles, and metal hardware.": "Horneado de mapas en Substance 3D Painter para polímeros, textiles y herrajes metálicos.",
  "Web integration & QA": "Integración Web & QA",
  "Real-time pipeline, on-demand loading, cart logic, and device testing.": "Pipeline en tiempo real, carga bajo demanda, lógica de carrito y pruebas multidispositivo.",
  "Every part as an independent sub-model": "Cada Pieza como Submodelo Independiente",
  "Rather than one heavy asset, each component loads on demand, keeping the initial payload minimal.": "En lugar de un archivo pesado, cada componente se carga según se solicita, minimizando la descarga inicial.",
  "One source of truth": "Una Sola Fuente de Verdad",
  "The same state that drives the 3D view also drives the price breakdown and cart summary — no duplication, no desync.": "El mismo estado que actualiza el visor 3D calcula el desglose de precios y el resumen del carrito, evitando desincronizaciones.",
  "Native over third-party": "Desarrollo Propio vs Plataformas de Terceros",
  "A custom WebGL engine instead of a licensed viewer meant zero recurring costs for the client and full control over performance.": "Un motor WebGL a medida en vez de un visor con licencia garantizó cero costos fijos para el cliente y control absoluto del rendimiento.",
  "Cart as a set": "Carrito como Conjunto Unificado",
  "Configured pieces are grouped so a design travels to checkout as one unit, not as scattered line items.": "Las piezas elegidas se agrupan para ingresar al checkout como una unidad cohesiva, sin dispersarse en el pedido.",
  "1.2 MB": "1,2 MB",
  "Initial payload": "Peso de descarga inicial",
  "3D load on 4G mobile": "Carga 3D en conexiones móviles 4G",
  "Stable interaction on mid-range devices": "Interacción estable en dispositivos de gama media",
  "Average time on page": "Tiempo promedio en página",
  "Manual color inquiries": "Consultas manuales de color",
  "Monthly licensing cost": "Costo mensual de licenciamiento",
  "“If I ran it again, I'd build the material system first, so the catalog could grow without rework for every new texture. It would have shortened the second half of the project.”": "“Si tuviera que hacerlo de nuevo, estructuraría el sistema de materiales desde el día uno, para que el catálogo creciera sin rehacer código para cada nueva textura. Habría acelerado toda la segunda mitad del proyecto.”",
  "Ready to build a real-time 3D configurator?": "¿Listo para crear un configurador 3D en tiempo real?",
  "Let's discuss how interactive WebGL and 3D product visuals can scale your e-commerce conversion. Book a 15-min intro call or request a quote.": "Conversemos sobre cómo el WebGL interactivo y los visuales 3D pueden disparar la conversión de tu e-commerce. Agenda una llamada de 15 min o solicita una cotización.",
  "AI Concept": "Concepto IA",
  "Generative Art": "Arte Generativo",
  "AI-Generated Product Concepts": "Conceptos de Producto con IA Generativa",
  "Exploration and generation of high-end 3D product concepts using generative artificial intelligence and digital post-production.": "Exploración y generación de conceptos de producto 3D de alta gama utilizando inteligencia artificial generativa y postproducción digital.",
  "Art Direction and Generative AI": "Dirección de Arte e IA Generativa",
  "Leveraging AI tools to quickly conceptualize innovative visuals for luxury perfumery, maintaining precise control over lighting, materials, and composition.": "Aprovechamiento de herramientas de IA para conceptualizar con agilidad visuales de perfumería de lujo, conservando control estricto sobre iluminación, materiales y composición.",
  "Animation and Motion": "Animación y Motion",
  "Based on the approved static images, a fluid animation was created to bring the scene to life, adding subtle movement to the elements and highlighting the product's atmosphere.": "A partir de las imágenes estáticas seleccionadas, se desarrolló una animación fluida que da vida a la escena, aportando movimiento sutil a los elementos y potenciando la atmósfera del producto.",
  "Materials and Composition": "Materiales y Composición",
  "LookDev work focused on how light passes through carved glass and refracts in the liquid — the crucial detail that defines whether a perfume render feels genuine or artificial.": "El trabajo de LookDev se concentró en el paso de la luz a través del cristal tallado y su refracción en el perfume: el detalle que define si un render de fragancia se percibe auténtico o artificial.",
  "Final Concepts": "Conceptos Finales",
  "Final pieces designed to work as campaign photography: atmosphere, texture, and a single dramatic key light guiding the eye toward the product.": "Piezas finales concebidas como fotografía de campaña publicitaria: atmósfera envolvente, texturas tangibles y una iluminación dramática que guía la mirada hacia el perfume.",
  "Looking for high-concept perfume & luxury visuals?": "¿Buscas visuales conceptuales de lujo para perfumería?",
  "Let's craft mood-defining concept art, lighting studies, and motion graphics for your hero campaigns. Book a 15-min intro call or request a quote.": "Creemos arte conceptual, estudios de iluminación y motion graphics que definan la atmósfera de tus campañas principales. Agenda una llamada de 15 min o solicita una cotización.",
  "Joel Bastone Lopez Journal & Technical Writing": "Joel Bastone Lopez Diario & Artículos Técnicos",
  "JBL Journal & Technical Writing": "Joel Bastone Lopez Diario & Artículos Técnicos",
  "Thought, process, and 3D technology.": "Pensamiento, proceso y tecnología 3D.",
  "Production breakdowns, real-time WebGL engineering, pipeline optimizations, and art direction for global brands.": "Desgloses de producción, ingeniería WebGL en tiempo real, optimización de pipelines y dirección de arte para marcas globales.",
  "Coming Soon": "Próximamente",
  "New articles & breakdowns underway": "Nuevos artículos y desgloses técnicos en preparación",
  "Currently preparing the first deep-dive articles on real-time WebGL shaders, PBR material pipelines, and commercial 3D art direction.": "Actualmente preparando los primeros artículos técnicos en profundidad sobre shaders WebGL en tiempo real, pipelines PBR y dirección de arte 3D comercial.",
  "✦ Real-time 3D & Three.js": "✦ 3D en tiempo real & Three.js",
  "✦ Blender & Substance Pipelines": "✦ Pipelines de Blender & Substance",
  "✦ High-Fidelity Product CGI": "✦ CGI de Producto de Alta Fidelidad",
  "✦ Shader Architecture": "✦ Arquitectura de Shaders",
  "Search by topic or keyword...": "Buscar por tema o palabra clave...",
  "Search articles, shaders, CGI pipelines...": "Buscar artículos, shaders, pipelines CGI...",
  "Read article": "Leer artículo",
  "Read article ↗": "Leer artículo ↗",
  "5 min read": "5 min de lectura",
  "Be the first to read new releases": "Sé el primero en leer nuevos artículos",
  "Subscribe to receive exclusive production breakdowns, optimization techniques, and 3D insights as soon as they drop.": "Suscríbete para recibir desgloses de producción exclusivos, técnicas de optimización y análisis 3D en cuanto se publiquen.",
  "Your email address...": "Tu correo electrónico...",
  "Subscribe": "Suscribirse",
  "Thank you for subscribing to the JBL Journal!": "¡Gracias por suscribirte al Journal de Joel Bastone Lopez!",
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
  "Explore more articles →": "Explorar más artículos →"
};

  // Build reverse lookup dictionary (ES -> EN)
  const REVERSE_DICT = {};
  for (const [en, es] of Object.entries(I18N_DICT)) {
    REVERSE_DICT[es] = en;
  }

  function safeGetStorage(key, fallback) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key) || fallback;
      }
    } catch (e) {
      // LocalStorage access denied or restricted on file://
    }
    return fallback;
  }

  function safeSetStorage(key, val) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, val);
      }
    } catch (e) {
      // Storage access blocked or quota exceeded
    }
  }

  // Current language state
  let currentLang = safeGetStorage('jbl_blog_lang', 'en');

  /**
   * Particle Confetti Burst
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
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')
      .replace(/&amp;/g, '&')
      .replace(/&middot;/g, '·')
      .replace(/&rsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
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
        btn.setAttribute('title', 'Traducir al español');
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
    const root = document.body;
    if (!root) return;

    // 1. Process rich HTML elements (paragraphs, list items, headers with inner HTML)
    const blockCandidates = root.querySelectorAll('p, li, blockquote, figcaption, h1, h2, h3, h4');
    blockCandidates.forEach(el => {
      if (
        el.closest('.blog-lang-btn') ||
        el.closest('.nav-logo') ||
        el.closest('.splat-viewer-container') ||
        el.closest('#viewer-3d') ||
        el.closest('.canvas-container')
      ) {
        return;
      }

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
        // Direct block text fallback (matches entire element text normalized IF no child elements)
        if (el.children.length === 0) {
          if (toLang === 'es') {
            const trans = NORM_I18N_DICT[normalizeContent(origHtml)];
            if (trans) {
              el.textContent = trans;
              el.setAttribute('data-i18n-html-done', 'true');
            }
          } else {
            el.innerHTML = origHtml;
            el.removeAttribute('data-i18n-html-done');
          }
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
          if (['script', 'style', 'code', 'pre', 'noscript', 'canvas'].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (
            parent.closest('.blog-lang-btn') ||
            parent.closest('.nav-logo') ||
            parent.classList.contains('nav-logo') ||
            parent.closest('.splat-viewer-container') ||
            parent.closest('#viewer-3d') ||
            parent.closest('.canvas-container')
          ) {
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
      const rawText = node.nodeValue;

      // Store original English text directly on the node object
      if (node._i18n_orig === undefined) {
        node._i18n_orig = rawText;
      }

      const origText = node._i18n_orig;
      const leadingWs = origText.match(/^\s*/)[0];
      const trailingWs = origText.match(/\s*$/)[0];
      const trimmedOrig = origText.trim();

      if (toLang === 'es') {
        const trans = translateString(trimmedOrig, 'es');
        if (trans) {
          node.nodeValue = leadingWs + trans + trailingWs;
        }
      } else {
        node.nodeValue = origText;
      }
    });

    // 3. Placeholders on inputs & textareas
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      const ph = el.getAttribute('placeholder');
      if (!el.hasAttribute('data-i18n-ph-orig')) {
        el.setAttribute('data-i18n-ph-orig', ph);
      }
      if (toLang === 'es') {
        const trans = translateString(el.getAttribute('data-i18n-ph-orig'), 'es');
        if (trans) el.setAttribute('placeholder', trans);
      } else {
        const orig = el.getAttribute('data-i18n-ph-orig');
        if (orig) el.setAttribute('placeholder', orig);
      }
    });

    // 4. Bento and Lightbox data-title and data-desc attributes
    document.querySelectorAll('[data-title], [data-desc]').forEach(el => {
      if (el.hasAttribute('data-title')) {
        const dt = el.getAttribute('data-title');
        if (!el.hasAttribute('data-i18n-title-orig')) {
          el.setAttribute('data-i18n-title-orig', dt);
        }
        if (toLang === 'es') {
          const trans = translateString(el.getAttribute('data-i18n-title-orig'), 'es');
          if (trans) el.setAttribute('data-title', trans);
        } else {
          const orig = el.getAttribute('data-i18n-title-orig');
          if (orig) el.setAttribute('data-title', orig);
        }
      }
      if (el.hasAttribute('data-desc')) {
        const dd = el.getAttribute('data-desc');
        if (!el.hasAttribute('data-i18n-desc-orig')) {
          el.setAttribute('data-i18n-desc-orig', dd);
        }
        if (toLang === 'es') {
          const trans = translateString(el.getAttribute('data-i18n-desc-orig'), 'es');
          if (trans) el.setAttribute('data-desc', trans);
        } else {
          const orig = el.getAttribute('data-i18n-desc-orig');
          if (orig) el.setAttribute('data-desc', orig);
        }
      }
    });
  }

  let isToggling = false;

  /**
   * Main Toggle Function
   * Triggered on clicking the Translate button
   */
  window.toggleBlogLanguage = function () {
    if (isToggling) return;
    isToggling = true;
    setTimeout(() => { isToggling = false; }, 250);

    const nextLang = currentLang === 'en' ? 'es' : 'en';
    const activeBtn = document.querySelector('.blog-lang-btn');

    // 1. Playful Animation on button
    if (activeBtn) {
      activeBtn.classList.remove('is-animating');
      void activeBtn.offsetWidth; // trigger reflow
      activeBtn.classList.add('is-animating');
      spawnComicParticles(activeBtn);
    }

    // 2. Smooth dissolve on content
    const content = document.querySelector('.blog-wrapper') || 
                    document.querySelector('.post-article') || 
                    document.querySelector('.case-study-container') || 
                    document.querySelector('main') || 
                    document.body;
    content.classList.add('i18n-swapping');

    setTimeout(() => {
      currentLang = nextLang;
      safeSetStorage('jbl_blog_lang', currentLang);
      document.documentElement.lang = currentLang;

      // 3. Perform DOM text swap
      translateDOM(currentLang);
      updateButtons(currentLang === 'es');

      // 4. Fade content back in
      content.classList.remove('i18n-swapping');
    }, 180);
  };

  /**
   * Auto-initialize on DOM ready
   */
  function init() {
    // Bind explicit click event listeners to all translation buttons
    document.querySelectorAll('.blog-lang-btn').forEach(btn => {
      if (!btn.hasAttribute('data-i18n-bound')) {
        btn.setAttribute('data-i18n-bound', 'true');
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          window.toggleBlogLanguage();
        });
      }
    });

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
