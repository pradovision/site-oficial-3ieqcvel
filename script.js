document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mainNav = document.getElementById('main-nav');

    // Funcionalidade do Menu Mobile
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Fechar o menu ao clicar em um link (opcional)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        });
    }

    // Funcionalidade de Animação de Scroll (Scroll Reveal)
    // Para replicar o efeito de surgimento suave do conteúdo
    const sections = document.querySelectorAll('.content-section, .banner-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para que o efeito só aconteça uma vez
            }
        });
    }, {
        threshold: 0.1 // 10% da seção visível
    });

    sections.forEach(section => {
        section.classList.add('hidden'); // Adiciona classe inicial para esconder
        observer.observe(section);
    });

});