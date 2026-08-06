document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLL & 2. NAV SCROLL EFFECT
    const nav = document.querySelector('.nav');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const headerOffset = 80; // offset for fixed nav

    // Mostrar el ícono de scroll después de 2 segundos (Fade In)
    setTimeout(() => {
        scrollIndicator?.classList.add('ready');
    }, 2000);

    // Add scroll event listener for nav styling and active link
    window.addEventListener('scroll', () => {
        // Nav background effect and scroll indicator hide (Fade Out)
        if (window.scrollY > 50) {
            nav?.classList.add('scrolled');
            scrollIndicator?.classList.add('hidden');
        } else {
            nav?.classList.remove('scrolled');
            scrollIndicator?.classList.remove('hidden');
        }

        // Active link update based on scroll position
        let currentSection = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerOffset - 10;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });

        // 8. SCROLL INDICATOR
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }
    });

    // Smooth scroll behavior
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. MOBILE NAV
    const burger = document.querySelector('.nav-burger');
    const mobileNav = document.querySelector('.nav-mobile');
    const mobileNavLinks = document.querySelectorAll('.nav-mobile a');

    if (burger && mobileNav) {
        burger.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            burger.classList.toggle('active'); // Optional: for burger animation
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }

    // 4. PROJECT FILTERS
    const filterBtns = document.querySelectorAll('.filter-btn');
    const bentoItems = document.querySelectorAll('.bento-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            bentoItems.forEach(item => {
                // Add brief fade out inline or toggle a class that handles it
                item.style.transition = 'opacity 0.3s ease';
                item.style.opacity = '0';
                
                setTimeout(() => {
                    const itemCategory = item.getAttribute('data-category');
                    if (filterValue === 'all' || filterValue === itemCategory) {
                        item.classList.remove('hidden');
                        // Fade back in
                        setTimeout(() => { item.style.opacity = '1'; }, 50);
                    } else {
                        item.classList.add('hidden');
                    }
                }, 300); // match transition duration
            });
        });
    });

    // 5. MODAL/LIGHTBOX
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-img');
    const modalTitle = document.querySelector('.modal-title');
    const modalCat = document.querySelector('.modal-cat');
    const modalDesc = document.querySelector('.modal-desc');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    bentoItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // If clicking directly on a link button, let the default <a> navigation happen
            if (e.target.closest('.bento-link-btn') || e.target.closest('.viewer-btn')) {
                return;
            }

            // Do not redirect or open modal if clicking inside the 3D Viewer canvas
            if (item.classList.contains('featured-viewer-item')) {
                return;
            }

            const projectUrl = item.getAttribute('data-url');
            if (projectUrl) {
                window.open(projectUrl, '_blank', 'noopener,noreferrer');
                return;
            }

            if (modal) {
                const title = item.getAttribute('data-title') || 'Project Title';
                const desc = item.getAttribute('data-desc') || 'Project Description';
                const cat = item.getAttribute('data-category') || 'Category';
                
                const imgEl = item.querySelector('.bento-img');
                const imgSrc = imgEl ? imgEl.getAttribute('src') : '';

                if (modalImg) modalImg.src = imgSrc;
                if (modalTitle) modalTitle.textContent = title;
                if (modalDesc) modalDesc.textContent = desc;
                if (modalCat) modalCat.textContent = cat;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (modal) {
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // 6. SCROLL ANIMATIONS
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, {
            threshold: 0.15
        });

        animateElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers without IntersectionObserver
        animateElements.forEach(el => el.classList.add('visible'));
    }

    // 7. RIGHT-CLICK PROTECTION ON IMAGES
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });


});
