// WORKING SMOOTH SCROLL FUNCTIONS FOR NAVIGATION BUTTONS
        function scrollToQuestions() {
            console.log('📄 Scrolling to questions section...');
            const questionsSection = document.getElementById('questions-section');
            if (questionsSection) {
                // Calculate proper offset position (accounting for any fixed headers)
                const offsetTop = questionsSection.offsetTop - 100; // 100px offset for better visibility

                // Smooth scroll to section
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                console.log('✅ Successfully scrolled to questions section');

                // Add highlight effect after scrolling
                setTimeout(() => {
                    questionsSection.style.transition = 'all 0.5s ease';
                    questionsSection.style.transform = 'scale(1.02)';
                    questionsSection.style.boxShadow = '0 25px 50px rgba(255, 126, 179, 0.3)';

                    // Remove highlight after animation
                    setTimeout(() => {
                        questionsSection.style.transform = 'scale(1)';
                        questionsSection.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    }, 1000);
                }, 500);
            } else {
                console.error('❌ Questions section not found');
                // Fallback scroll
                window.scrollTo({
                    top: document.body.scrollHeight * 0.7,
                    behavior: 'smooth'
                });
            }
        }

        function scrollToToppers() {
            console.log('🏆 Scrolling to toppers section...');
            const toppersSection = document.getElementById('toppers-section');
            if (toppersSection) {
                // Calculate proper offset position
                const offsetTop = toppersSection.offsetTop - 100; // 100px offset for better visibility

                // Smooth scroll to section
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                console.log('✅ Successfully scrolled to toppers section');

                // Add highlight effect after scrolling
                setTimeout(() => {
                    toppersSection.style.transition = 'all 0.5s ease';
                    toppersSection.style.transform = 'scale(1.02)';
                    toppersSection.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.3)';

                    // Remove highlight after animation
                    setTimeout(() => {
                        toppersSection.style.transform = 'scale(1)';
                        toppersSection.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    }, 1000);
                }, 500);
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

        // Enhanced button hover effects
        document.addEventListener('DOMContentLoaded', function() {
            // Run debug check
            setTimeout(checkElements, 1000);

            const button = document.querySelector('.beautiful-button');

            if (button) {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px) scale(1.05)';
                });

                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            }

            // Card hover effects
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });

                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // Logo rotation on hover
            const logo = document.querySelector('.logo');
            if (logo) {
                logo.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1) rotate(5deg)';
                });

                logo.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1) rotate(0deg)';
                });
            }
        });

        // Add ripple effect to buttons
        function createRipple(event) {
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
            `;

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        }

        // Add ripple effect to all buttons
        document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.beautiful-button');
            buttons.forEach(button => {
                button.addEventListener('click', createRipple);
            });
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
        `;
        document.head.appendChild(style);
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
    
    // Active section highlighting while scrolling
    const sections = document.querySelectorAll('section[id], .card[id]');
    const navLinksList = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinksList.forEach(link => {
            link.classList.remove('current-section');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('current-section');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
});

// Enhanced Smooth Scroll with Offset
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // 80px offset for sticky nav
            
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

