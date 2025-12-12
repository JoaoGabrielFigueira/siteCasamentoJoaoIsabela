// Carousel Functionality
let currentSlide = 0;
let slides = [];
let totalSlides = 0;
let carouselWrapper = null;

// Initialize carousel
function initCarousel() {
    slides = document.querySelectorAll('.carousel-slide');
    totalSlides = slides.length;
    carouselWrapper = document.querySelector('.carousel-wrapper');
    
    if (slides.length === 0 || !carouselWrapper) return;
    
    // Set initial active slide
    updateCarousel();
    
    // Auto-play carousel - passa automaticamente a cada 4 segundos
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 4000);
}

function updateCarousel() {
    if (!carouselWrapper) return;
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Calculate transform for smooth scrolling
    const translateX = -currentSlide * (100 / totalSlides);
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
}

// Menu Hambúrguer
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    
    if (!menuToggle || !nav) return;
    
    // Criar overlay se não existir
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }
    
    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fechar menu ao clicar no overlay
    overlay.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Fechar menu ao clicar em um link ou botão
    nav.querySelectorAll('.nav-link, .btn-book').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Fechar menu ao redimensionar a janela (se voltar para desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize carousel only if it exists on the page
    if (document.querySelector('.carousel-wrapper')) {
        initCarousel();
    }
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('.section, .main-content, .experience-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Botão de confirmação agora é um link para confirmar.html

// Smooth scroll for anchor links (only if target exists on current page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Gift purchase buttons functionality
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        const giftItem = this.closest('.gift-item');
        if (giftItem) {
            const checkoutUrl = giftItem.getAttribute('data-checkout');
            if (checkoutUrl) {
                window.open(checkoutUrl, '_blank');
            }
        }
    });
});

