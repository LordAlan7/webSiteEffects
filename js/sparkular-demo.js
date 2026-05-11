// js/sparkular-demo.js

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('sparkularCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const demoArea = document.getElementById('sparkularDemoArea');

    // Canvas size
    let width, height;
    const resize = () => {
        width = demoArea.clientWidth;
        height = demoArea.clientHeight;
        canvas.width = width;
        canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // Particle Configuration
    const particles = [];
    const gravity = 0.05;
    const friction = 0.98;
    // Sparkular colors from exact brand spec: #F5A623 (Primary), #FF6B00 (Hot), #FFD166 (Glow)
    const colors = ['#F5A623', '#FF6B00', '#FFD166'];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            // Erupt upwards with varying force and spread
            this.vx = (Math.random() - 0.5) * 6;
            this.vy = -(Math.random() * 8 + 4); 
            this.life = 1.0; // Opacity / Life
            this.decay = Math.random() * 0.02 + 0.01;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.size = Math.random() * 3 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += gravity; // Pull down slightly
            this.vx *= friction;
            
            this.life -= this.decay;
        }

        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = this.life;
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 10; // The glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    let isShooting = false;
    let burstInterval = null;

    const shootSparks = (x, y) => {
        // Add 20 particles per frame when shooting
        for (let i = 0; i < 20; i++) {
            particles.push(new Particle(x, y));
        }
    };

    const loop = () => {
        // Clear canvas with a very slight trail effect
        ctx.fillStyle = 'rgba(5, 5, 8, 0.3)';
        ctx.fillRect(0, 0, width, height);

        // Update & Draw
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);

            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(loop);
    };

    // Start Simulation
    loop();

    // Interaction handling
    const triggerEffect = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        if (burstInterval) clearInterval(burstInterval);
        
        let counter = 0;
        isShooting = true;
        
        // Shoot for ~500ms
        burstInterval = setInterval(() => {
            shootSparks(x, y);
            counter += 20;
            if(counter > 500) {
                clearInterval(burstInterval);
                isShooting = false;
            }
        }, 20);

        // Hide overlay text
        const overlay = demoArea.querySelector('.sparkular-demo-overlay-text');
        if(overlay) overlay.style.opacity = '0';
    };

    demoArea.addEventListener('mousedown', triggerEffect);
    demoArea.addEventListener('touchstart', (e) => {
        e.preventDefault();
        triggerEffect(e);
    }, {passive: false});

});
