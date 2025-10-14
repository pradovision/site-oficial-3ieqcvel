// VARIÁVEL GLOBAL PARA ACOMPANHAR O SLIDE ATUAL DO CARROSSEL
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    
    slides[slideIndex - 1].style.opacity = "1";  
    
    // Roda a função novamente após 5 segundos
    setTimeout(showSlides, 5000); 
}


document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INICIALIZAÇÃO DO CARROSSEL
    if (document.querySelector('.slideshow-container')) {
        showSlides();
    }
    
    // 2. FUNCIONALIDADE DO MENU MOBILE
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Fechar o menu ao clicar em um link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        });
    }

    // 3. FUNCIONALIDADE DE ANIMAÇÃO DE SCROLL (Scroll Reveal)
    const sections = document.querySelectorAll('.content-section, .banner-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach(section => {
        section.classList.add('hidden'); 
        observer.observe(section);
    });

});