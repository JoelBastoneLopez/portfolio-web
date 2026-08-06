class FuzzyText {
  constructor(canvasId, textOptions = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    
    // Parse input text (can be an array for multiple lines)
    this.lines = textOptions.text || ['404', 'not found'];
    
    // Config
    this.fontSize = textOptions.fontSize || 120; // base font size for the first line
    this.fontWeight = textOptions.fontWeight || 900;
    this.fontFamily = textOptions.fontFamily || 'Outfit, sans-serif';
    this.color = textOptions.color || '#ffffff';
    this.baseIntensity = textOptions.baseIntensity || 0.18;
    this.hoverIntensity = textOptions.hoverIntensity || 0.5;
    this.fuzzRange = textOptions.fuzzRange || 30;
    this.fps = textOptions.fps || 60;
    this.enableHover = textOptions.enableHover !== false;
    
    // State
    this.isHovering = false;
    this.currentIntensity = this.baseIntensity;
    this.targetIntensity = this.baseIntensity;
    this.lastFrameTime = 0;
    this.frameDuration = 1000 / this.fps;
    this.animationFrameId = null;
    
    this.init();
  }

  async init() {
    // Wait for fonts to load
    try {
      await document.fonts.load(`${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`);
    } catch (e) {
      await document.fonts.ready;
    }

    // Create offscreen canvas
    this.offscreen = document.createElement('canvas');
    this.offCtx = this.offscreen.getContext('2d');
    
    // Calculate dimensions for multiple lines
    let maxWidth = 0;
    let totalHeight = 0;
    const lineMetrics = [];
    
    // First pass to measure
    this.lines.forEach((text, index) => {
        // Make second line smaller if it exists
        const size = index === 0 ? this.fontSize : this.fontSize * 0.4;
        this.offCtx.font = `${this.fontWeight} ${size}px ${this.fontFamily}`;
        const metrics = this.offCtx.measureText(text);
        
        const width = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight || metrics.width;
        const height = (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) || size * 1.2;
        
        if (width > maxWidth) maxWidth = width;
        
        lineMetrics.push({
            text,
            size,
            width,
            height,
            ascent: metrics.actualBoundingBoxAscent || size * 0.8
        });
        
        totalHeight += height + (index > 0 ? size * 0.2 : 0); // Add line gap
    });

    const extraWidthBuffer = 20;
    const offscreenWidth = Math.ceil(maxWidth) + extraWidthBuffer;
    const offscreenHeight = Math.ceil(totalHeight) + extraWidthBuffer;

    this.offscreen.width = offscreenWidth;
    this.offscreen.height = offscreenHeight;
    this.offCtx.textBaseline = 'alphabetic';
    this.offCtx.fillStyle = this.color;

    // Second pass to draw
    let currentY = 10; // Top padding
    lineMetrics.forEach((line, index) => {
        this.offCtx.font = `${this.fontWeight} ${line.size}px ${this.fontFamily}`;
        
        // Center text horizontally
        const xPos = (offscreenWidth - line.width) / 2;
        currentY += line.ascent;
        
        this.offCtx.fillText(line.text, xPos, currentY);
        
        // Add gap for next line
        currentY += line.height - line.ascent + (line.size * 0.2); 
    });

    // Set main canvas size (include fuzz margin to avoid clipping)
    const margin = this.fuzzRange + 20;
    this.canvas.width = offscreenWidth + margin * 2;
    this.canvas.height = offscreenHeight + margin * 2;
    this.ctx.translate(margin, margin);

    // Interactive bounds
    this.bounds = {
      left: margin,
      top: margin,
      right: margin + offscreenWidth,
      bottom: margin + offscreenHeight
    };

    if (this.enableHover) {
      this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
      this.canvas.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
      this.canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
      this.canvas.addEventListener('touchend', this.handleMouseLeave.bind(this));
    }

    this.run(0);
  }

  isInside(x, y) {
    return x >= this.bounds.left && x <= this.bounds.right && 
           y >= this.bounds.top && y <= this.bounds.bottom;
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.isHovering = this.isInside(x, y);
  }
  
  handleTouchMove(e) {
    e.preventDefault();
    const rect = this.canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    this.isHovering = this.isInside(x, y);
  }

  handleMouseLeave() {
    this.isHovering = false;
  }

  run(timestamp) {
    if (timestamp - this.lastFrameTime < this.frameDuration) {
      this.animationFrameId = requestAnimationFrame(this.run.bind(this));
      return;
    }
    this.lastFrameTime = timestamp;

    const w = this.offscreen.width;
    const h = this.offscreen.height;

    // Clear main canvas
    this.ctx.clearRect(-this.bounds.left, -this.bounds.top, this.canvas.width, this.canvas.height);

    this.targetIntensity = this.isHovering ? this.hoverIntensity : this.baseIntensity;
    
    // Smooth transition
    const step = 0.05;
    if (this.currentIntensity < this.targetIntensity) {
      this.currentIntensity = Math.min(this.currentIntensity + step, this.targetIntensity);
    } else if (this.currentIntensity > this.targetIntensity) {
      this.currentIntensity = Math.max(this.currentIntensity - step, this.targetIntensity);
    }

    // Draw horizontal slices with random shift
    for (let j = 0; j < h; j++) {
      const dx = Math.floor(this.currentIntensity * (Math.random() - 0.5) * this.fuzzRange);
      this.ctx.drawImage(this.offscreen, 0, j, w, 1, dx, j, w, 1);
    }

    this.animationFrameId = requestAnimationFrame(this.run.bind(this));
  }
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    // Adapt to mobile screens
    const fontSize = window.innerWidth < 768 ? 90 : 180;
    
    new FuzzyText('fuzzy-404', {
        text: ['404', 'not found'],
        fontSize: fontSize,
        fuzzRange: 30,
        baseIntensity: 0.2,
        hoverIntensity: 0.6,
        color: '#f0eee8' // var(--txt-primary)
    });
});
