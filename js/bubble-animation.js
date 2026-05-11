// js/bubble-animation.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bubblesBgContainer');
    const toggleBtnCont = document.getElementById('bubbleToggle');
    if (!container || !toggleBtnCont) return;

    const toggleOptions = toggleBtnCont.querySelectorAll('.effect-toggle__option');
    
    // Bubble Generation Logic
    const maxBubbles = window.innerWidth < 768 ? 15 : 30; // Fewer bubbles on mobile
    const bubbles = [];

    const createBubble = () => {
        if (bubbles.length >= maxBubbles) return;

        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Randomize size between 30px and 100px
        const size = Math.random() * 70 + 30; 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Randomize horizontal starting position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Randomize animation duration
        const duration = Math.random() * 5 + 8; // 8s to 13s
        bubble.style.animationDuration = `${duration}s`;
        
        // Randomize animation delay
        const delay = Math.random() * 5; 
        bubble.style.animationDelay = `-${delay}s`;

        container.appendChild(bubble);
        bubbles.push(bubble);

        // Remove from DOM when animation ends to prevent memory leaks and recreate
        bubble.addEventListener('animationend', () => {
           bubble.remove();
           bubbles.splice(bubbles.indexOf(bubble), 1);
        });
    };

    // Stagger initial creation
    const bubbleInterval = setInterval(() => {
        createBubble();
    }, 400);

    // Toggle Logic (Regular vs Smoke)
    toggleOptions.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            toggleOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to clicked
            e.target.classList.add('active');

            const effect = e.target.getAttribute('data-effect');
            
            if (effect === 'smoke') {
                container.classList.add('has-smoke');
            } else {
                container.classList.remove('has-smoke');
            }
        });
    });

    // Bubble Interactive Demo Canvas Logic
    const canvas = document.getElementById('bubbleCanvas');
    const demoArea = document.getElementById('bubbleDemoArea');
    
    if (canvas && demoArea) {
        const ctx = canvas.getContext('2d');
        let width, height;

        const resize = () => {
            width = demoArea.clientWidth;
            height = demoArea.clientHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resize);
        resize();

        const demoBubbles = [];

        class InteractiveBubble {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                // Erupt outwards and upwards
                this.vx = (Math.random() - 0.5) * 4;
                this.vy = -(Math.random() * 3 + 2);
                this.size = Math.random() * 8 + 4;
                this.life = 1.0;
                this.decay = Math.random() * 0.01 + 0.005;
                this.wobble = Math.random() * Math.PI * 2;
                this.wobbleSpeed = Math.random() * 0.1 + 0.05;
            }

            update() {
                this.x += this.vx + Math.sin(this.wobble) * 1;
                this.y += this.vy;
                this.wobble += this.wobbleSpeed;
                this.life -= this.decay;
            }

            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                
                // Colors representing bubbles
                const gradient = ctx.createRadialGradient(
                    this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.1,
                    this.x, this.y, this.size
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
                gradient.addColorStop(0.5, 'rgba(0, 180, 216, 0.4)');
                gradient.addColorStop(1, 'rgba(0, 180, 216, 0.8)');
                
                ctx.fillStyle = gradient;
                ctx.fill();
                
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.restore();
            }
        }

        let isShooting = false;
        let burstInterval = null;

        const shootBubbles = (x, y) => {
            for (let i = 0; i < 5; i++) {
                demoBubbles.push(new InteractiveBubble(x, y));
            }
        };

        const loop = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = demoBubbles.length - 1; i >= 0; i--) {
                const b = demoBubbles[i];
                b.update();
                b.draw(ctx);

                if (b.life <= 0) {
                    demoBubbles.splice(i, 1);
                }
            }
            
            requestAnimationFrame(loop);
        };

        loop();

        const triggerEffect = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            if (burstInterval) clearInterval(burstInterval);
            
            let counter = 0;
            isShooting = true;
            
            // Shoot for ~300ms
            burstInterval = setInterval(() => {
                shootBubbles(x, y);
                counter += 50;
                if(counter > 300) {
                    clearInterval(burstInterval);
                    isShooting = false;
                }
            }, 50);

            // Hide overlay text
            const overlay = demoArea.querySelector('.bubble-demo-overlay-text');
            if(overlay) overlay.style.opacity = '0';
        };

        demoArea.addEventListener('mousedown', triggerEffect);
        demoArea.addEventListener('touchstart', (e) => {
            e.preventDefault();
            triggerEffect(e);
        }, {passive: false});
    }
});
