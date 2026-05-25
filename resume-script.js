// Super Interactive Multi-Color Resume JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSuperAnimations();
    initAdvancedInteractions();
    initParticleSystem();
    initPrintButton();
    initThemeSwitcher();
    initSoundEffects(); // Visual feedback only
});





// Super Advanced Animations with Multi-Color Effects
    function initSuperAnimations() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    
    // Staggered section animations
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
                section.style.opacity = '0';
        section.style.transform = 'translateY(50px) scale(0.95)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                        section.style.opacity = '1';
            section.style.transform = 'translateY(0) scale(1)';
            
            // Color flash effect
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            section.style.boxShadow = `0 0 40px ${randomColor}`;
            setTimeout(() => {
                section.style.boxShadow = '';
            }, 800);
        }, index * 200);
    });

    // Skill tag pulse animation
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = 'pulseTag 1.5s infinite';
        }, index * 150);
    });

    // Timeline bounce
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'bounceIn 0.8s ease-out';
        }, 500 + index * 200);
    });

    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulseTag {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
        @keyframes bounceIn {
            0% { transform: translateY(50px) scale(0.8); opacity: 0; }
            60% { transform: translateY(-10px) scale(1.05); opacity: 1; }
            100% { transform: translateY(0) scale(1); }
        }
    `;
    document.head.appendChild(style);
}



// Advanced Mouse Interactions
    
function initAdvancedInteractions() {

    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    
    // Mouse trail effect
    document.addEventListener('mousemove', function(e) {
        createParticle(e.clientX, e.clientY, colors[Math.floor(Math.random() * colors.length)]);
    });

    // Tilt effect on cards
    const cards = document.querySelectorAll('.skill-category, .cert-card, .project-card, .timeline-content');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
                    
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            this.style.transition = 'none';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
    });

            // Enhanced hover effects
    document.querySelectorAll('.hobby-item, .about-trait, .personal-item').forEach((item, index) => {
        const hue = (index * 40) % 360;
        item.style.setProperty('--hue', hue);
        
                item.addEventListener('mouseenter', function() {
            this.style.filter = 'hue-rotate(var(--hue)) brightness(1.2)';
            this.style.transform += ' rotateY(360deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    });

    // Progress bar effect for mentorship items
    const mentorshipItems = document.querySelectorAll('.mentorship-list li');
    mentorshipItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const progress = document.createElement('div');
            progress.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 0%;
                background: linear-gradient(90deg, var(--primary-green), var(--primary-blue));
                transition: width 1s ease;
                z-index: -1;
                    `;
            this.appendChild(progress);
            setTimeout(() => progress.style.width = '100%', 100);
        });
        
        item.addEventListener('mouseleave', function() {
            const progress = this.querySelector('div');
}r;ax,c,scl) {
    });raParx,,clo){dv
creaex,c,sco.sor) {cssTdiv
functionc,siTo{n:fixed;div
    conslp.T:p$nx}px;: f=x.d;lement('div');
    partxp$ny}px:fixed;
        wdh8px
left:p$nheighxxw8px;:e8px
xp${y}pxbackgrund:h$color};x;
bckgroub;dus:%
border-rpasner-evens50nonex
    heigz-index:89999;x;: 8px;
poingrou:himaticnorpar}icFlo.sese-ou fowrds;-ie:9999
bc;dius:animati%n: rtileFloaa1.5ssease-outnforwards;er-even:s50none;
      boy       animabony: particleFloat 1.5s );
        
    sesTemeaut(() =>ip) => pa.r-moveroic1500eu, 1500);t forwards;
    `;boy   document.body.appendChild(particle);
        
//}Dy ami CSSforparseles
cStylestyle
StCsTtent
//eD@ktyfrum(syi) SSip)Fmratr)clesic1500e;, 1500);
0%tstyle
    Sranfrmtranlate(0, 0) cal(1)onent
//}D@keyynamcpacay1
cStylestsae(0,0) scale(1)
StConten10
// D@keyyconaformtranslate(${Math.radm() *p100a-c50}me,e${M th.rasfom() * 100 0r50}p)seare(0)ate(0, 0) scale(1)ontent = `
        @keyncmctmy(0-}px, ${Math.random() * 100 - 50}sx) acal;(0)
       }      ranca0y: 0 ${Math.random() * 100 0 50}p)scale(0)
    }
        nrmctmy:(0- 50}px, ${Math.random() * 100 - 50}px) scale(0);
    }heaSy   }    heaoacity: 0;Sy   }heaSyocument.head.appendChild(particleStyle);

// Enhanced Print Button
function initPrintButton() {
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i> 🖨️ Print Resume';
    printBtn.className = 'super-print-btn';
    printBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 18px 30px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
        background-size: 400% 400%;
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 700;
        box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        transition: all 0.4s ease;
        z-index: 10000;
        animation: rainbow 3s ease infinite;
        text-transform: uppercase;
        letter-spacing: 1px;
    `;
        
    printBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-10px)';
        this.style.boxShadow = '0 20px 50px rgba(255, 107, 107, 0.6)';
    });
        
    printBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.4)';
    });
        
    printBtn.addEventListener('click', function() {
        createFireworks();
        setTimeout(() => window.print(), 500);
    });
        
    document.body.appendChild(printBtn);
}

// Dynamic rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(rainbowStyle);

// Theme Switcher
function initThemeSwitcher() {
    const themeBtn = document.createElement('button');
    themeBtn.innerHTML = '<i class="fas fa-palette"></i>';
    themeBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(45deg, #ff9ff3, #f368e0);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        box-shadow: 0 8px 25px rgba(249, 104, 224, 0.4);
        z-index: 10000;
        transition: all 0.3s ease;
        animation: spin 4s linear infinite;
    `;
    
    let themeCount = 0;
    const themes = [
        { '--primary-blue': '#ff6b6b', '--primary-purple': '#4ecdc4' },
        { '--primary-blue': '#4ecdc4', '--primary-purple': '#45b7d1' },
        { '--primary-blue': '#45b7d1', '--primary-purple': '#96ceb4' },
        { '--primary-blue': '#96ceb4', '--primary-purple': '#feca57' }
    ];
    
    themeBtn.addEventListener('click', function() {
        themeCount = (themeCount + 1) % themes.length;
        const theme = themes[themeCount];
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
        createFireworks();
    });
    
    document.body.appendChild(themeBtn);
}

const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
document.head.appendChild(spinStyle);

// Fireworks effect
function createFireworks() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: #ffd700;
                border-radius: 50%;
                left: 50%;
                top: 50%;
                pointer-events: none;
                z-index: 10001;
                animation: firework 1s ease-out forwards;
            `;
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 1000);
        }, i * 50);
    }
}

const fireworkStyle = document.createElement('style');
fireworkStyle.textContent = `
    @keyframes firework {
        0% { transform: scale(0) translate(0, 0); opacity: 1; }
        100% { 
            transform: scale(1) translate(var(--dx), var(--dy));
            opacity: 0;
        }
    }
`;
document.head.appendChild(fireworkStyle);

// Visual feedback sounds (using Web Audio API for visual enhancement)
function initSoundEffects() {
    // Create visual ripple effects on click
    document.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,0.8), transparent);
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 20px;
            height: 20px;
            pointer-events: none;
            z-index: 10000;
        `;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

console.log('🌈 SUPER MULTICOLOR INTERACTIVE RESUME LOADED! 🎉');

