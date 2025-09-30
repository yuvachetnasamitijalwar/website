// ENHANCED SMOOTH SCROLL FUNCTIONS WITH MOBILE OPTIMIZATION

// Utility function to detect mobile devices
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Enhanced scroll to questions function
function scrollToQuestions() {
    console.log('📄 Scrolling to questions section...');

    const questionsSection = document.getElementById('questions-section');
    if (questionsSection) {
        // Mobile-friendly offset calculation
        const offset = isMobile() ? 80 : 100;
        const offsetTop = questionsSection.offsetTop - offset;

        // Smooth scroll with better mobile performance
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        console.log('✅ Successfully scrolled to questions section');

        // Enhanced highlight effect with mobile optimization
        setTimeout(() => {
            questionsSection.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            questionsSection.style.transform = isMobile() ? 'scale(1.01)' : 'scale(1.02)';
            questionsSection.style.boxShadow = '0 25px 50px rgba(255, 126, 179, 0.4)';

            // Remove highlight after animation
            setTimeout(() => {
                questionsSection.style.transform = 'scale(1)';
                questionsSection.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
            }, 1200);
        }, 600);

    } else {
        console.error('❌ Questions section not found');
        // Fallback scroll
        window.scrollTo({
            top: document.body.scrollHeight * 0.7,
            behavior: 'smooth'
        });
    }
}

// Enhanced scroll to toppers function
function scrollToToppers() {
    console.log('🏆 Scrolling to toppers section...');

    const toppersSection = document.getElementById('toppers-section');
    if (toppersSection) {
        // Mobile-friendly offset calculation
        const offset = isMobile() ? 80 : 100;
        const offsetTop = toppersSection.offsetTop - offset;

        // Smooth scroll
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        console.log('✅ Successfully scrolled to toppers section');

        // Enhanced highlight effect
        setTimeout(() => {
            toppersSection.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            toppersSection.style.transform = isMobile() ? 'scale(1.01)' : 'scale(1.02)';
            toppersSection.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.4)';

            // Remove highlight after animation
            setTimeout(() => {
                toppersSection.style.transform = 'scale(1)';
                toppersSection.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
            }, 1200);
        }, 600);

    } else {
        console.error('❌ Toppers section not found');
        // Fallback scroll to end
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
}

// Debug function to check if elements exist when page loads
function checkElements() {
    const questionsSection = document.getElementById('questions-section');
    const toppersSection = document.getElementById('toppers-section');

    console.log('🔍 Debug - Checking elements:');
    console.log('Questions section found:', !!questionsSection);
    console.log('Toppers section found:', !!toppersSection);

    if (questionsSection) {
        console.log('Questions section position:', questionsSection.offsetTop);
    }

    if (toppersSection) {
        console.log('Toppers section position:', toppersSection.offsetTop);
    }
}

// Enhanced performance-optimized animations
function initializeAnimations() {
    // Enhanced button hover effects with mobile optimization
    const buttons = document.querySelectorAll('.beautiful-button');
    buttons.forEach(button => {
        // Mouse/touch events for better mobile support
        button.addEventListener('mouseenter', function() {
            if (!isMobile()) {
                this.style.transform = 'translateY(-4px) scale(1.06)';
            }
        });

        button.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });

        // Touch events for mobile
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.03)';
        });

        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Enhanced card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!isMobile()) {
                this.style.transform = 'translateY(-12px) rotateX(3deg)';
            }
        });

        card.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                this.style.transform = 'translateY(0) rotateX(0deg)';
            }
        });

        // Touch feedback for mobile
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.01)';
        });

        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Enhanced logo animation
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            if (!isMobile()) {
                this.style.transform = 'scale(1.15) rotate(8deg)';
            }
        });

        logo.addEventListener('mouseleave', function() {
            if (!isMobile()) {
                this.style.transform = 'scale(1) rotate(0deg)';
            }
        });

        logo.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });

        logo.addEventListener('touchend', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
}

// Enhanced ripple effect function
function createRipple(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    // Get click/touch position
    let x, y;
    if (event.type === 'touchstart') {
        const touch = event.touches[0];
        x = touch.clientX - rect.left - size / 2;
        y = touch.clientY - rect.top - size / 2;
    } else {
        x = event.clientX - rect.left - size / 2;
        y = event.clientY - rect.top - size / 2;
    }

    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.7);
        transform: scale(0);
        animation: ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        z-index: 1000;
    `;

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// Enhanced mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        // Toggle menu
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// Enhanced scroll-based navigation highlighting
function initializeScrollNavigation() {
    const sections = document.querySelectorAll('section[id], .card[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200; // Offset for better accuracy

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('current-section');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('current-section');
            }
        });
    }

    // Throttled scroll event for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Enhanced smooth scroll for navigation links
function initializeSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = isMobile() ? 70 : 80;
                const offsetTop = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update active nav immediately
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('current-section');
                });
                this.classList.add('current-section');
            }
        });
    });
}

// Enhanced intersection observer for animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Add staggered animation for children
                const children = entry.target.querySelectorAll('.card, .worker-card, .memory-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.animation = `fadeIn 0.8s ease-out ${index * 0.1}s both`;
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('.scroll-reveal, section').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced lazy loading for images
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // Add loading animation
                img.style.transition = 'opacity 0.6s ease';
                img.style.opacity = '0';

                // Load image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }

                img.onload = () => {
                    img.style.opacity = '1';
                    img.classList.add('loaded');
                };

                imageObserver.unobserve(img);
            }
        });
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Enhanced touch gesture support for mobile
function initializeTouchGestures() {
    if (!isMobile()) return;

    let startY = 0;
    let startX = 0;

    document.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
    });

    document.addEventListener('touchmove', (e) => {
        // Prevent pull-to-refresh on mobile when scrolling
        if (window.scrollY === 0 && e.touches[0].clientY > startY) {
            e.preventDefault();
        }
    }, { passive: false });

    // Swipe gestures for navigation
    document.addEventListener('touchend', (e) => {
        const endY = e.changedTouches[0].clientY;
        const endX = e.changedTouches[0].clientX;
        const diffY = startY - endY;
        const diffX = startX - endX;

        // Horizontal swipe detection
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe left - could navigate to next section
                console.log('Swipe left detected');
            } else {
                // Swipe right - could navigate to previous section
                console.log('Swipe right detected');
            }
        }
    });
}

// Performance optimization for animations
function optimizePerformance() {
    // Reduce animations on low-end devices
    const isLowEndDevice = navigator.hardwareConcurrency < 4 || 
                          /Android.*Chrome/i.test(navigator.userAgent);

    if (isLowEndDevice) {
        document.documentElement.style.setProperty('--animation-duration', '0.2s');

        // Disable complex animations
        const style = document.createElement('style');
        style.textContent = `
            .card:hover { transform: translateY(-5px) !important; }
            .category-card:hover { transform: translateY(-5px) !important; }
            .worker-card:hover { transform: translateY(-5px) !important; }
            .memory-card:hover { transform: translateY(-5px) !important; }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced preloader
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="spinner"></div>
            <p>लोड हो रहा है...</p>
        </div>
    `;

    const preloaderStyle = document.createElement('style');
    preloaderStyle.textContent = `
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        }

        .preloader-content {
            text-align: center;
            color: white;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .preloader-content p {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0;
        }
    `;

    document.head.appendChild(preloaderStyle);
    document.body.appendChild(preloader);

    // Hide preloader when page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
                preloaderStyle.remove();
            }, 500);
        }, 1000);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing enhanced website features...');

    // Show preloader
    showPreloader();

    // Run debug check
    setTimeout(checkElements, 1000);

    // Initialize all enhanced features
    initializeAnimations();
    initializeMobileMenu();
    initializeScrollNavigation();
    initializeSmoothScroll();
    initializeScrollAnimations();
    initializeLazyLoading();
    initializeTouchGestures();
    optimizePerformance();

    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('.beautiful-button, .nav-link, .contact-link');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
        button.addEventListener('touchstart', createRipple);
    });

    console.log('✅ All enhanced features initialized successfully!');
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .beautiful-button,
    .nav-link,
    .contact-link {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Enhanced window resize handler
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate positions and update mobile state
        console.log('🔄 Window resized, updating layout...');

        // Close mobile menu if window becomes larger
        if (window.innerWidth > 768) {
            const navMenu = document.querySelector('.nav-menu');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Re-initialize some features if needed
        initializeScrollNavigation();
    }, 250);
});

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('❌ JavaScript Error:', e.error);

    // Graceful fallback for critical features
    if (e.error && e.error.message.includes('scroll')) {
        console.log('🔧 Applying scroll fallback...');
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
});

// Enhanced console welcome message
console.log(`
🎉 युवा चेतना समिति Quiz Website
🚀 Enhanced version with mobile optimization
📱 Mobile-friendly features enabled
✨ Performance optimized
`);

console.log('Mobile device detected:', isMobile());
console.log('Screen size:', window.innerWidth + 'x' + window.innerHeight);
console.log('User agent:', navigator.userAgent);

// Enhanced Helpline Section Functionality
function initializeHelplineSection() {
    const helplineSection = document.querySelector('.helpline-section');
    const helplineItems = document.querySelectorAll('.helpline-item');
    const featureItems = document.querySelectorAll('.feature-item');
    
    // Add enhanced animations on scroll
    if (helplineSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    helplineSection.style.animation = 'fadeIn 1s ease-out';
                    
                    // Staggered animation for helpline items
                    helplineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0) scale(1)';
                            item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                        }, index * 200);
                    });
                    
                    // Animate feature items
                    featureItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
                        }, 800 + (index * 100));
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });
        
        observer.observe(helplineSection);
        
        // Initially hide items for animation
        helplineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px) scale(0.8)';
        });
    }
    
    // Enhanced click interactions
    helplineItems.forEach(item => {
        const phoneLink = item.querySelector('a[href^="tel:"]');
        const emailLink = item.querySelector('a[href^="mailto:"]');
        
        if (phoneLink) {
            phoneLink.addEventListener('click', function(e) {
                // Add ripple effect
                createHelplineRipple(e, this);
                
                // Show confirmation (optional)
                setTimeout(() => {
                    if (confirm('क्या आप कॉल करना चाहते हैं?')) {
                        // Analytics tracking (if needed)
                        console.log('Helpline call initiated');
                    } else {
                        e.preventDefault();
                    }
                }, 100);
            });
        }
        
        if (emailLink) {
            emailLink.addEventListener('click', function(e) {
                createHelplineRipple(e, this);
                console.log('Email support initiated');
            });
        }
    });
    
    // Feature items interaction
    featureItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'translateY(0) scale(1)';
            }, 150);
            
            // Show feature details (optional)
            const featureTexts = [
                'हमारी टीम 24/7 आपकी सहायता के लिए तैयार है!',
                'आपकी सभी जानकारी पूर्णतः सुरक्षित और गोपनीय है।',
                'हमारे सभी कर्मचारी हिंदी में बात करने में सक्षम हैं।'
            ];
            
            showHelplineTooltip(this, featureTexts[index]);
        });
    });
}

// Create ripple effect for helpline links
function createHelplineRipple(event, element) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(102, 126, 234, 0.6);
        transform: scale(0);
        animation: helplineRipple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        z-index: 1000;
    `;
    
    // Add ripple animation keyframes if not exists
    if (!document.getElementById('helplineRippleStyle')) {
        const style = document.createElement('style');
        style.id = 'helplineRippleStyle';
        style.textContent = `
            @keyframes helplineRipple {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(2); opacity: 0; }
            }
            @keyframes slideInUp {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    const parent = element.parentElement;
    parent.style.position = 'relative';
    parent.style.overflow = 'hidden';
    parent.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// Show tooltip for feature items
function showHelplineTooltip(element, text) {
    // Remove existing tooltip
    const existingTooltip = document.querySelector('.helpline-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    const tooltip = document.createElement('div');
    tooltip.className = 'helpline-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0,0,0,0.9);
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 14px;
        max-width: 250px;
        z-index: 1001;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
        pointer-events: none;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width/2 - tooltip.offsetWidth/2) + 'px';
    tooltip.style.top = (rect.bottom + 10) + 'px';
    
    // Show tooltip
    setTimeout(() => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
    }, 10);
    
    // Hide tooltip after 3 seconds
    setTimeout(() => {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(10px)';
        setTimeout(() => {
            tooltip.remove();
        }, 300);
    }, 3000);
}

// Add scroll to helpline function
function scrollToHelpline() {
    console.log('📞 Scrolling to helpline section...');
    const helplineSection = document.getElementById('helpline-section');
    
    if (helplineSection) {
        const offset = isMobile() ? 80 : 100;
        const offsetTop = helplineSection.offsetTop - offset;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        console.log('✅ Successfully scrolled to helpline section');
        
        // Highlight effect
        setTimeout(() => {
            helplineSection.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            helplineSection.style.transform = isMobile() ? 'scale(1.01)' : 'scale(1.02)';
            helplineSection.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.6)';
            
            setTimeout(() => {
                helplineSection.style.transform = 'scale(1)';
                helplineSection.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
            }, 1200);
        }, 600);
    } else {
        console.error('❌ Helpline section not found');
    }
}

// Initialize helpline functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Add to existing initialization
    setTimeout(() => {
        initializeHelplineSection();
    }, 500);
});

// Update the existing DOMContentLoaded event listener to include helpline
// Add this to your existing initialization functions
