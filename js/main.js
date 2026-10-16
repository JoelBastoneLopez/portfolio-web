document.addEventListener('DOMContentLoaded', () => {
    // Logo 3D Intro animation on page load / refresh
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        setTimeout(() => {
            navLogo.classList.add('intro-loading');
            setTimeout(() => {
                navLogo.classList.remove('intro-loading');
            }, 2500);
        }, 500);
    }


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

    function applyFilter(filterValue) {
        bentoItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const shouldShow = filterValue === 'all' || filterValue === itemCategory;
            if (shouldShow) {
                item.classList.remove('hidden');
                item.style.opacity = '1';
            } else {
                item.classList.add('hidden');
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            if (document.startViewTransition) {
                document.startViewTransition(() => {
                    applyFilter(filterValue);
                });
            } else {
                applyFilter(filterValue);
            }
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

    // Generic Lightbox Triggers (Reviews, delivery images, etc.)
    const lightboxTriggers = document.querySelectorAll('[data-lightbox-img]');
    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (modal) {
                const imgSrc = trigger.getAttribute('data-lightbox-img');
                const title = trigger.getAttribute('data-title') || 'Client Review';
                const desc = trigger.getAttribute('data-desc') || '';
                const cat = trigger.getAttribute('data-category') || 'Verified Review';
                
                if (modalImg) modalImg.src = imgSrc;
                if (modalTitle) modalTitle.textContent = title;
                if (modalDesc) modalDesc.textContent = desc;
                if (modalCat) modalCat.textContent = cat;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    bentoItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // If clicking directly on a link button, let the default <a> navigation happen
            if (e.target.closest('.bento-link-btn') || e.target.closest('.viewer-btn')) {
                return;
            }


            const projectUrl = item.getAttribute('data-url');
            if (projectUrl) {
                window.location.href = projectUrl;
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
            threshold: 0.05,
            rootMargin: '0px 0px -20px 0px'
        });

        animateElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers without IntersectionObserver
        animateElements.forEach(el => el.classList.add('visible'));
    }

    // 7. CLIENT REVIEWS CAROUSEL
    const reviewsTrack = document.getElementById('reviewsTrack');
    const reviewsPrevBtn = document.getElementById('reviewsPrevBtn');
    const reviewsNextBtn = document.getElementById('reviewsNextBtn');
    const reviewsDotsContainer = document.getElementById('reviewsDots');

    if (reviewsTrack) {
        const cards = reviewsTrack.querySelectorAll('.review-card');
        const totalCards = cards.length;
        let isDown = false;
        let startX = 0;
        let scrollStart = 0;
        let autoplayTimer = null;

        // Calculate step (one card width + gap)
        const getStep = () => {
            if (cards.length > 1) {
                return cards[1].offsetLeft - cards[0].offsetLeft;
            }
            return reviewsTrack.clientWidth;
        };

        // Create interactive dots
        if (reviewsDotsContainer) {
            reviewsDotsContainer.innerHTML = '';
            cards.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = `reviews-dot ${idx === 0 ? 'active' : ''}`;
                dot.setAttribute('aria-label', `Ir a reseña ${idx + 1}`);
                dot.addEventListener('click', () => {
                    const step = getStep();
                    reviewsTrack.scrollTo({
                        left: idx * step,
                        behavior: 'smooth'
                    });
                    resetAutoplay();
                });
                reviewsDotsContainer.appendChild(dot);
            });
        }

        // Update active dot on scroll
        const updateActiveDot = () => {
            if (!reviewsDotsContainer) return;
            const step = getStep();
            if (step <= 0) return;
            const activeIndex = Math.min(
                Math.round(reviewsTrack.scrollLeft / step),
                totalCards - 1
            );
            const dots = reviewsDotsContainer.querySelectorAll('.reviews-dot');
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === activeIndex);
            });
        };

        let scrollTicking = false;
        reviewsTrack.addEventListener('scroll', () => {
            if (!scrollTicking) {
                window.requestAnimationFrame(() => {
                    updateActiveDot();
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        });

        // Navigation Next / Prev
        const scrollNext = () => {
            const step = getStep();
            const maxScroll = reviewsTrack.scrollWidth - reviewsTrack.clientWidth;
            if (reviewsTrack.scrollLeft >= maxScroll - 15) {
                reviewsTrack.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                reviewsTrack.scrollBy({ left: step, behavior: 'smooth' });
            }
        };

        const scrollPrev = () => {
            const step = getStep();
            if (reviewsTrack.scrollLeft <= 15) {
                reviewsTrack.scrollTo({ left: reviewsTrack.scrollWidth, behavior: 'smooth' });
            } else {
                reviewsTrack.scrollBy({ left: -step, behavior: 'smooth' });
            }
        };

        if (reviewsNextBtn) {
            reviewsNextBtn.addEventListener('click', () => {
                scrollNext();
                resetAutoplay();
            });
        }

        if (reviewsPrevBtn) {
            reviewsPrevBtn.addEventListener('click', () => {
                scrollPrev();
                resetAutoplay();
            });
        }

        // Autoplay
        const startAutoplay = () => {
            if (autoplayTimer) clearInterval(autoplayTimer);
            autoplayTimer = setInterval(scrollNext, 3800);
        };

        const pauseAutoplay = () => {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        };

        const resetAutoplay = () => {
            pauseAutoplay();
            startAutoplay();
        };

        // Pause on Hover / Focus
        const wrapper = reviewsTrack.closest('.reviews-carousel-wrapper') || reviewsTrack;
        wrapper.addEventListener('mouseenter', pauseAutoplay);
        wrapper.addEventListener('mouseleave', startAutoplay);
        wrapper.addEventListener('focusin', pauseAutoplay);
        wrapper.addEventListener('focusout', startAutoplay);

        // Touch Interaction (Mobile)
        reviewsTrack.addEventListener('touchstart', pauseAutoplay, { passive: true });
        reviewsTrack.addEventListener('touchend', () => {
            setTimeout(startAutoplay, 2500);
        }, { passive: true });

        // Mouse Drag to Scroll
        reviewsTrack.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - reviewsTrack.offsetLeft;
            scrollStart = reviewsTrack.scrollLeft;
            pauseAutoplay();
        });

        reviewsTrack.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - reviewsTrack.offsetLeft;
            const walk = (x - startX) * 1.4;
            reviewsTrack.scrollLeft = scrollStart - walk;
        });

        const stopDrag = () => {
            if (isDown) {
                isDown = false;
                startAutoplay();
            }
        };

        reviewsTrack.addEventListener('mouseup', stopDrag);
        reviewsTrack.addEventListener('mouseleave', stopDrag);

        // Start autoplay
        startAutoplay();
    }

});
