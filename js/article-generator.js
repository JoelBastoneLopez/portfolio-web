/**
 * JBL Studio CMS — Standalone Article HTML & SEO Export Generator
 * Encapsulated in pure JavaScript to prevent HTML parser tokenization conflicts.
 */

// Helper functions for safe string handling & formatting
function escapeHtml(str) {
  return (str || '').replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

function slugify(text) {
  return (text || '').toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function renderRichText(str) {
  if (!str) return '';
  let safe = escapeHtml(str);
  safe = safe.replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/|\.\.\/)[^\s)]+)\)/g, 
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  safe = safe.replace(/(?<!href=")(https?:\/\/[^\s<)]+)/g, 
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  safe = safe.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#ffffff;">$1</strong>');
  safe = safe.replace(/\*([^*]+)\*/g, '<em style="color:#e4e4e7;">$1</em>');
  return safe;
}

// Helper to fix relative image paths from blog/ subdirectory
function fixAssetPath(path) {
  if (!path) return '../assets/img/foto_perfil.webp';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('../') || path.startsWith('/')) {
    return path;
  }
  return '../' + path;
}

function getArticleData() {
  const title = (document.getElementById('post-title-input')?.value || 'Untitled Article').trim();
  let slug = (document.getElementById('post-slug-input')?.value.trim() || slugify(title)).replace(/\.html$/, '');
  const category = document.getElementById('post-cat-input')?.value || '3D E-commerce';
  const date = (document.getElementById('post-date-input')?.value || 'Oct 18, 2026').trim();
  const readTime = (document.getElementById('post-readtime-input')?.value || '5 min read').trim();
  const cover = (document.getElementById('post-cover-input')?.value || 'assets/img/primicia/long-primicia.jpg').trim();
  let excerpt = (document.getElementById('post-excerpt-input')?.value || '').trim();

  if (!excerpt) {
    const firstP = document.querySelector('#blocks-list .block-card[data-type="paragraph"] textarea');
    excerpt = firstP ? firstP.value.slice(0, 160) + '...' : 'In-depth technical breakdown and insights by Joel Bastone Lopez.';
  }

  return { title, slug, category, date, readTime, cover, excerpt };
}

function buildArticleHTML(data) {
  const { title, slug, category, date, readTime, cover, excerpt } = data;
  const coverRel = fixAssetPath(cover);
  const coverFull = cover.replace(/^\.\.\//, '').replace(/^\//, '');
  const year = new Date().getFullYear();
  const isoDate = new Date().toISOString().split('T')[0];

  // Build blocks HTML
  const blocks = document.querySelectorAll('#blocks-list .block-card');
  let bodyHtml = '';

  blocks.forEach((block, index) => {
    const type = block.dataset.type;

    if (type === 'subheading') {
      const text = block.querySelector('input').value || '';
      bodyHtml += `\n      <h2>${renderRichText(text)}</h2>\n`;
    }
    else if (type === 'paragraph') {
      const text = block.querySelector('textarea').value;
      bodyHtml += `\n      <p>\n        ${renderRichText(text)}\n      </p>\n`;
    }
    else if (type === 'comparison') {
      const inputs = block.querySelectorAll('input');
      const img1 = fixAssetPath(inputs[0].value || 'assets/img/primicia/long-primicia.jpg');
      const img2 = fixAssetPath(inputs[1].value || 'assets/img/foto_perfil.webp');
      const caption = inputs[2].value || '';
      bodyHtml += `
      <div class="post-grid-2x" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; margin:2.5rem 0;">
        <figure style="margin:0;"><img src="${img1}" alt="Variant 1" loading="lazy" style="width:100%; height:260px; object-fit:cover; border-radius:12px; border:1px solid rgba(255,255,255,0.08);" /></figure>
        <figure style="margin:0;"><img src="${img2}" alt="Variant 2" loading="lazy" style="width:100%; height:260px; object-fit:cover; border-radius:12px; border:1px solid rgba(255,255,255,0.08);" /></figure>
      </div>
      ${caption ? `<figcaption class="post-figure-caption" style="text-align:center; font-size:0.85rem; color:var(--txt-muted); margin-top:-1.5rem; margin-bottom:2rem;"><span>${renderRichText(caption)}</span></figcaption>` : ''}\n`;
    }
    else if (type === 'callout') {
      const cTitle = block.querySelector('input').value || 'Key Takeaway';
      const cText = block.querySelector('textarea').value || '';
      bodyHtml += `
      <aside class="post-callout">
        <div class="post-callout-title">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--gold)" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          ${renderRichText(cTitle)}
        </div>
        <p>${renderRichText(cText)}</p>
      </aside>\n`;
    }
    else if (type === 'quote') {
      const qText = block.querySelector('textarea').value || '';
      bodyHtml += `
      <blockquote class="post-blockquote">
        "${renderRichText(qText)}"
        <span class="post-blockquote-cite">&mdash; Joel Bastone Lopez</span>
      </blockquote>\n`;
    }
    else if (type === 'code') {
      const code = block.querySelector('textarea').value || '';
      bodyHtml += `
      <div class="post-code-block">
        <div class="post-code-header">
          <div class="post-code-dots">
            <span></span><span></span><span></span>
          </div>
          <div class="post-code-lang">
            <span>Three.js / WebGL</span>
          </div>
          <button class="post-code-copy-btn" onclick="copyCode(this)">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy code
          </button>
        </div>
        <pre class="post-code-content"><code>${escapeHtml(code)}</code></pre>
      </div>\n`;
    }
    else if (type === 'image') {
      const inputs = block.querySelectorAll('input');
      const url = fixAssetPath(inputs[0].value || 'assets/img/primicia/long-primicia.jpg');
      const caption = inputs[1].value || '';
      bodyHtml += `
      <figure class="post-hero-figure" style="margin:2.5rem 0;">
        <img src="${url}" alt="${renderRichText(caption || title)}" loading="lazy" />
        ${caption ? `<figcaption class="post-figure-caption"><span>${renderRichText(caption)}</span></figcaption>` : ''}
      </figure>\n`;
    }
    else if (type === 'share') {
      const sPrompt = block.querySelector('input').value || 'Found this breakdown insightful? Share with your network';
      bodyHtml += `
      <div class="post-share-widget">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div style="width:38px; height:38px; border-radius:10px; background:rgba(201,169,110,0.12); display:flex; align-items:center; justify-content:center; color:var(--gold); flex-shrink:0;">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <div>
            <h4 style="font-family:var(--font-d); font-size:1.02rem; color:#ffffff; margin:0 0 0.2rem; font-weight:600;">Share this Article</h4>
            <p style="margin:0; font-size:0.85rem; color:var(--txt-muted);">${renderRichText(sPrompt)}</p>
          </div>
        </div>
        <button type="button" class="btn-share-trigger" onclick="openShareModal()" style="display:inline-flex; align-items:center; gap:0.45rem; background:linear-gradient(135deg, var(--gold-light), var(--gold)); color:#000; font-weight:700; font-size:0.85rem; padding:0.6rem 1.2rem; border-radius:8px; border:none; cursor:pointer; font-family:var(--font-b); transition:transform 0.2s, box-shadow 0.2s;">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
          Share Post
        </button>
      </div>\n`;
    }
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <script>
    (function() {
      if (window.location.hostname.includes('github.io')) {
        var p = window.location.pathname.replace(/^\\/portfolio-web\\/?/, '');
        window.location.replace('https://joelbastonelopez.com/' + p + window.location.search + window.location.hash);
      }
    })();
  <\/script>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)} | JBL Journal</title>
  <meta name="description" content="${escapeHtml(excerpt)}" />
  <meta name="author" content="Joel Bastone Lopez" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://joelbastonelopez.com/blog/${slug}.html" />

  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://joelbastonelopez.com/blog/${slug}.html" />
  <meta property="og:title" content="${escapeHtml(title)} | JBL Journal" />
  <meta property="og:description" content="${escapeHtml(excerpt)}" />
  <meta property="og:image" content="https://joelbastonelopez.com/${coverFull}" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)} | JBL Journal" />
  <meta name="twitter:description" content="${escapeHtml(excerpt)}" />
  <meta name="twitter:image" content="https://joelbastonelopez.com/${coverFull}" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="../assets/img/favicon.ico" />
  <link rel="shortcut icon" href="../assets/img/favicon.ico" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Alien+Block&family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../css/style.css" />

  <!-- Schema.org Technical Article JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(excerpt)},
    "image": "https://joelbastonelopez.com/${coverFull}",
    "author": {
      "@type": "Person",
      "name": "Joel Bastone Lopez",
      "url": "https://joelbastonelopez.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Joel Bastone Lopez"
    },
    "datePublished": "${isoDate}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://joelbastonelopez.com/blog/${slug}.html"
    }
  }
  <\/script>
</head>
<body>
  <!-- Reading Progress Bar -->
  <div class="blog-progress-bar" id="reading-progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

  <!-- Navigation -->
  <nav class="nav" id="main-nav" aria-label="Main Navigation">
    <div class="nav-inner">
      <a href="../index.html" class="nav-logo" aria-label="JBL Homepage">
        JBL
        <span class="logo-badge-3d">3D</span>
      </a>
      <div class="nav-links">
        <a href="../index.html#proyectos" class="nav-link">Projects</a>
        <a href="../index.html#sobre-mi" class="nav-link">About</a>
        <a href="../blog.html" class="nav-link active">Blog</a>
        <a href="../index.html#reviews" class="nav-link">Reviews</a>
        <a href="../index.html#contacto" class="nav-link">Contact</a>
      </div>
      <div class="nav-actions">
        <button type="button" class="blog-lang-btn" onclick="toggleBlogLanguage()" aria-label="Cambiar idioma / Switch language" title="Traducir artículo al español">
          <span class="lang-btn-icon" aria-hidden="true">
            <svg class="globe-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              <path d="M2 12h20"></path>
            </svg>
            <span class="lang-flag">🇪🇸</span>
          </span>
          <span class="lang-btn-label">Traducir a Español</span>
          <span class="comic-sparkle" aria-hidden="true">✦</span>
        </button>
      </div>
      <button class="nav-burger" aria-label="Toggle mobile menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile" aria-label="Mobile Navigation">
      <a href="../index.html#proyectos" class="nav-link">Projects</a>
      <a href="../index.html#sobre-mi" class="nav-link">About</a>
      <a href="../blog.html" class="nav-link active">Blog</a>
      <a href="../index.html#reviews" class="nav-link">Reviews</a>
      <a href="../index.html#contacto" class="nav-link">Contact</a>
      <button type="button" class="blog-lang-btn blog-lang-btn-mobile" onclick="toggleBlogLanguage()" aria-label="Cambiar idioma / Switch language" title="Traducir artículo al español">
        <span class="lang-btn-icon" aria-hidden="true">
          <svg class="globe-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
          <span class="lang-flag">🇪🇸</span>
        </span>
        <span class="lang-btn-label">Traducir a Español</span>
        <span class="comic-sparkle" aria-hidden="true">✦</span>
      </button>
    </div>
  </nav>

  <!-- Article Container -->
  <main class="post-article">

    <!-- Back to Journal link -->
    <a href="../blog.html" class="post-back-link">
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Journal &amp; Articles
    </a>

    <!-- Post Header -->
    <header class="post-header">
      <div class="post-header-meta">
        <span class="blog-tag">${escapeHtml(category)}</span>
        <span class="blog-date">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          ${escapeHtml(date)}
        </span>
        <span class="blog-readtime">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ${escapeHtml(readTime)}
        </span>
      </div>

      <h1 class="post-title">${escapeHtml(title)}</h1>

      <p class="post-lead">${escapeHtml(excerpt)}</p>

      <!-- Author and Share bar -->
      <div class="post-author-bar">
        <div class="blog-author">
          <img src="../assets/img/foto_perfil.webp" alt="Joel Bastone Lopez" class="blog-author-avatar" />
          <div class="blog-author-info">
            <span class="blog-author-name">Joel Bastone Lopez</span>
            <span class="blog-author-role">3D Artist &amp; WebGL Developer</span>
          </div>
        </div>

        <div class="post-share-actions">
          <button class="post-share-btn" onclick="openShareModal()" title="Share article" aria-label="Share article">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Cover Image -->
    <figure class="post-hero-figure">
      <img src="${coverRel}" alt="${escapeHtml(title)}" />
      <figcaption class="post-figure-caption">
        <span>${escapeHtml(title)}</span>
        <span style="color:var(--gold);">${escapeHtml(category)}</span>
      </figcaption>
    </figure>

    <!-- Post Body -->
    <div class="post-body">${bodyHtml}
    </div>

    <!-- B2B CONVERSION CTA -->
    <section id="contacto" class="section contact" style="border-top: 1px solid var(--border); padding: 5rem 0 4rem; margin-top: 4rem;">
      <div class="section-inner" style="max-width: 800px; margin: 0 auto; text-align: center; padding: 0 2rem;">
        <h2 class="contact-title" style="font-size: clamp(2rem, 4vw, 3rem); font-family: var(--font-d); color: var(--gold-light); margin-bottom: 1rem;">Ready to upgrade your product visuals?</h2>
        <p class="contact-subtitle" style="color: var(--txt-secondary); font-size: 1.1rem; line-height: 1.6; max-width: 600px; margin: 0 auto 2rem;">Let's discuss how 3D CGI and interactive WebGL can scale your imagery. Book a 15-min intro call or request a quote.</p>

        <div class="b2b-cta-actions">
          <a href="https://calendar.app.google/RBKw6fTPh1y5PajF9" target="_blank" rel="noopener noreferrer" class="btn-cta-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Book a Discovery Call
          </a>

          <a href="mailto:joel.bastonelopez@gmail.com?subject=Project%20Inquiry%20%7C%203D%20%26%20WebGL&body=Brand%20%2F%20Company%3A%0AProject%20Type%3A%0ATarget%20Launch%3A%0ABudget%20Range%3A%0A%0AProject%20Details%3A" class="btn-cta-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Request a Quote
          </a>
        </div>

        <div class="b2b-social-row">
          <a href="https://www.linkedin.com/in/joel-bastone-lopez/" target="_blank" rel="noopener" class="b2b-social-link">LinkedIn</a>
          <a href="https://www.behance.net/joelbastone1" target="_blank" rel="noopener" class="b2b-social-link">Behance</a>
          <a href="mailto:joel.bastonelopez@gmail.com" class="b2b-social-link">joel.bastonelopez@gmail.com</a>
        </div>
      </div>
    </section>

    <!-- Author Bio Box -->
    <section class="post-author-box" aria-label="About the author">
      <img src="../assets/img/foto_perfil.webp" alt="Joel Bastone Lopez" class="post-author-box-avatar" />
      <div class="post-author-box-content">
        <h4>Joel Bastone Lopez</h4>
        <span class="role">3D CGI Artist &amp; Real-time WebGL Developer</span>
        <p>
          Specializing in luxury product CGI, art direction, and interactive 3D configurators with Three.js for international brands.
        </p>
        <div class="post-author-box-links">
          <a href="../index.html#contacto">Let's work together &rarr;</a>
          <a href="../blog.html">Explore more articles &rarr;</a>
        </div>
      </div>
    </section>

  </main>

  <!-- Global Footer -->
  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-text">Joel Bastone Lopez &mdash; ${year}</span>
      <span class="footer-text">Buenos Aires, Argentina</span>
    </div>
  </footer>

  <!-- Toast Notification -->
  <div class="blog-toast" id="post-toast" role="status" aria-live="polite"></div>

  <script>
    // Navigation toggle for mobile
    const burger = document.querySelector('.nav-burger');
    const mobileMenu = document.querySelector('.nav-mobile');
    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        const isOpen = mobileMenu.style.display === 'flex';
        mobileMenu.style.display = isOpen ? 'none' : 'flex';
      });
    }

    // Scroll Navbar & Progress bar
    const nav = document.getElementById('main-nav');
    const progressBar = document.getElementById('reading-progress');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      if (progressBar) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = (window.scrollY / totalHeight) * 100;
          progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
          progressBar.setAttribute('aria-valuenow', Math.round(progress));
        }
      }
    });

    function showToast(message) {
      const toast = document.getElementById('post-toast');
      if (!toast) return;
      toast.innerHTML = \`<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--gold)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> \${message}\`;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }

    function copyCode(button) {
      const pre = button.closest('.post-code-block').querySelector('code');
      if (!pre) return;
      const codeText = pre.innerText;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText).then(() => {
          const original = button.innerHTML;
          button.innerHTML = \`<span style="color:var(--gold);">✓ Copied!</span>\`;
          setTimeout(() => {
            button.innerHTML = original;
          }, 2500);
        });
      }
    }

    // Social Share Modal Functions
    function openShareModal() {
      const modal = document.getElementById('social-share-modal');
      if (!modal) return;
      const url = window.location.href;
      const title = document.title;
      const encUrl = encodeURIComponent(url);
      const encTitle = encodeURIComponent(title);

      const linkedin = document.getElementById('share-link-linkedin');
      if (linkedin) linkedin.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encUrl;

      const whatsapp = document.getElementById('share-link-whatsapp');
      if (whatsapp) whatsapp.href = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(title + ' ' + url);

      const telegram = document.getElementById('share-link-telegram');
      if (telegram) telegram.href = 'https://t.me/share/url?url=' + encUrl + '&text=' + encTitle;

      const twitter = document.getElementById('share-link-twitter');
      if (twitter) twitter.href = 'https://twitter.com/intent/tweet?url=' + encUrl + '&text=' + encTitle;

      const facebook = document.getElementById('share-link-facebook');
      if (facebook) facebook.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encUrl;

      const urlInput = document.getElementById('share-modal-url-input');
      if (urlInput) urlInput.value = url;

      modal.style.display = 'flex';
    }

    function closeShareModal() {
      const modal = document.getElementById('social-share-modal');
      if (modal) modal.style.display = 'none';
    }

    function copyShareModalUrl(btn) {
      const urlInput = document.getElementById('share-modal-url-input');
      const url = urlInput ? urlInput.value : window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          if (btn) {
            const original = btn.innerText;
            btn.innerText = '✓ Copiado!';
            setTimeout(() => { btn.innerText = original; }, 2200);
          }
          if (typeof showToast === 'function') {
            showToast('Link copiado al portapapeles!');
          }
        });
      }
    }
  <\/script>

  <!-- SOCIAL SHARE MODAL DIALOG -->
  <div id="social-share-modal" class="social-share-backdrop" style="display:none;" onclick="if(event.target===this)closeShareModal();">
    <div class="social-share-card">
      <div class="social-share-head">
        <div>
          <h3 class="social-share-title">Compartir este Articulo</h3>
          <p class="social-share-sub">Elige tu plataforma preferida o copia el enlace directo</p>
        </div>
        <button type="button" class="social-share-close" onclick="closeShareModal()" aria-label="Cerrar modal">&times;</button>
      </div>

      <!-- 6 Platforms in exact requested order: 1. LinkedIn, 2. Copiar Link, 3. WhatsApp, 4. Telegram, 5. Twitter/X, 6. Facebook -->
      <div class="social-share-grid">
        <!-- 1. LinkedIn -->
        <a id="share-link-linkedin" href="#" target="_blank" rel="noopener noreferrer" class="share-btn-item">
          <div class="share-icon-wrap" style="background: rgba(10, 102, 194, 0.15); color: #0a66c2;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/></svg>
          </div>
          <div>
            <span class="share-btn-label">LinkedIn</span>
            <span class="share-btn-desc">Red profesional</span>
          </div>
        </a>

        <!-- 2. Copiar Link -->
        <button type="button" class="share-btn-item" onclick="copyShareModalUrl(this)">
          <div class="share-icon-wrap" style="background: rgba(201, 169, 110, 0.15); color: var(--gold-light);">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
          </div>
          <div>
            <span class="share-btn-label">Copiar Link</span>
            <span class="share-btn-desc">Al portapapeles</span>
          </div>
        </button>

        <!-- 3. WhatsApp -->
        <a id="share-link-whatsapp" href="#" target="_blank" rel="noopener noreferrer" class="share-btn-item">
          <div class="share-icon-wrap" style="background: rgba(37, 211, 102, 0.15); color: #25d366;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.78 11.66c-.2-.1-.19-.1-1.11-.56-.93-.45-1.07-.48-1.23-.23-.15.24-.61.76-.75.92-.14.15-.28.17-.48.07-.2-.1-.85-.31-1.61-.99-.6-.53-1-1.18-1.12-1.38-.11-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.14-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.48-.34h-.41c-.14 0-.37.05-.56.26-.2.2-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.74 2.05-1.45.26-.71.26-1.32.18-1.45-.07-.13-.27-.2-.47-.3z"/></svg>
          </div>
          <div>
            <span class="share-btn-label">WhatsApp</span>
            <span class="share-btn-desc">Chats y grupos</span>
          </div>
        </a>

        <!-- 4. Telegram -->
        <a id="share-link-telegram" href="#" target="_blank" rel="noopener noreferrer" class="share-btn-item">
          <div class="share-icon-wrap" style="background: rgba(34, 158, 217, 0.15); color: #229ed9;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
          </div>
          <div>
            <span class="share-btn-label">Telegram</span>
            <span class="share-btn-desc">Canales y mensajes</span>
          </div>
        </a>

        <!-- 5. Twitter / X -->
        <a id="share-link-twitter" href="#" target="_blank" rel="noopener noreferrer" class="share-btn-item">
          <div class="share-icon-wrap" style="background: rgba(255, 255, 255, 0.08); color: #ffffff;">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </div>
          <div>
            <span class="share-btn-label">Twitter / X</span>
            <span class="share-btn-desc">Publicar post</span>
          </div>
        </a>

        <!-- 6. Facebook -->
        <a id="share-link-facebook" href="#" target="_blank" rel="noopener noreferrer" class="share-btn-item">
          <div class="share-icon-wrap" style="background: rgba(24, 119, 242, 0.15); color: #1877f2;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </div>
          <div>
            <span class="share-btn-label">Facebook</span>
            <span class="share-btn-desc">Feed o grupo</span>
          </div>
        </a>
      </div>

      <!-- Direct URL Bar -->
      <div class="share-url-box">
        <input type="text" id="share-modal-url-input" class="share-url-input" readonly value="https://joelbastonelopez.com/blog/..." />
        <button type="button" class="share-url-copy-btn" onclick="copyShareModalUrl(this)">Copiar</button>
      </div>
    </div>
  </div>

  <script src="../js/blog-i18n.js" defer></script>
  <script src="../js/analytics.js" defer></script>
</body>
</html>`;
}

// Export HTML Action
function exportArticleHTML() {
  const data = getArticleData();
  const html = buildArticleHTML(data);
  const filename = `${data.slug}.html`;

  // Trigger automatic browser file download
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`✓ Downloaded ${filename}`);

  // Prepare snippets for posts.json & sitemap.xml
  const jsonSnippet = JSON.stringify({
    id: data.slug,
    title: data.title,
    url: `blog/${data.slug}.html`,
    category: data.category,
    date: data.date,
    readTime: data.readTime,
    image: data.cover.replace(/^\.\.\//, ''),
    excerpt: data.excerpt,
    author: "Joel Bastone Lopez"
  }, null, 2);

  const isoDate = new Date().toISOString().split('T')[0];
  const xmlSnippet = `  <url>
    <loc>https://joelbastonelopez.com/blog/${data.slug}.html</loc>
    <lastmod>${isoDate}</lastmod>
    <priority>0.8</priority>
  </url>`;

  // Populate Modal
  const fnLabel = document.getElementById('modal-filename-label');
  if (fnLabel) fnLabel.innerText = filename;
  const jsonCode = document.getElementById('modal-json-code');
  if (jsonCode) jsonCode.innerText = jsonSnippet;
  const xmlCode = document.getElementById('modal-xml-code');
  if (xmlCode) xmlCode.innerText = xmlSnippet;

  // Show Modal
  const modal = document.getElementById('export-modal');
  if (modal) modal.style.display = 'flex';
}

function exportPostData(format) {
  const data = getArticleData();
  const jsonSnippet = JSON.stringify({
    id: data.slug,
    title: data.title,
    url: `blog/${data.slug}.html`,
    category: data.category,
    date: data.date,
    readTime: data.readTime,
    image: data.cover.replace(/^\.\.\//, ''),
    excerpt: data.excerpt,
    author: "Joel Bastone Lopez"
  }, null, 2);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(jsonSnippet).then(() => {
      showToast('✓ Copied JSON entry for posts.json!');
    });
  }
}

function copySnippet(type, btn) {
  const elId = type === 'json' ? 'modal-json-code' : 'modal-xml-code';
  const text = document.getElementById(elId)?.innerText || '';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.innerText;
      btn.innerText = '✓ Copied!';
      btn.style.background = 'var(--gold)';
      btn.style.color = '#000';
      setTimeout(() => {
        btn.innerText = original;
        btn.style.background = '';
        btn.style.color = '';
      }, 2500);
    });
  }
}

function closeExportModal() {
  const modal = document.getElementById('export-modal');
  if (modal) modal.style.display = 'none';
}
