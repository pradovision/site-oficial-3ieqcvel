// VARIÁVEL GLOBAL PARA ACOMPANHAR O SLIDE ATUAL
let slideIndex = 0;

function showSlides() {
    let i;
    // Seleciona todos os slides
    let slides = document.getElementsByClassName("mySlides");
    
    // Esconde todos os slides (opacidade 0)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
    }
    
    // Avança o índice
    slideIndex++;
    
    // Reseta para o primeiro slide se o índice for muito alto
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    
    // Mostra o slide atual (opacidade 1)
    slides[slideIndex - 1].style.opacity = "1";  
    
    // Chama a função novamente após 5000 milissegundos (5 segundos)
    setTimeout(showSlides, 5000); 
}


document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INICIALIZAÇÃO DO CARROSSEL
    // Verifica se a seção hero com o slideshow existe antes de rodar
    if (document.querySelector('.slideshow-container')) {
        showSlides();
    }
    
    // 2. FUNCIONALIDADE DO MENU MOBILE (SEU CÓDIGO ORIGINAL)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    // const mainNav = document.getElementById('main-nav'); // Esta linha pode ser removida se não for usada

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

    // 3. FUNCIONALIDADE DE ANIMAÇÃO DE SCROLL (SEU CÓDIGO ORIGINAL)
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