// Инициализация AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Закрываем мобильное меню после клика
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
            }
        }
    });
});

// Фиксированная шапка с эффектом
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '20px 0';
    }
});

// Фильтрация галереи
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Убираем активный класс у всех кнопок
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Добавляем активный класс текущей кнопке
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Бургер-меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Закрытие меню при клике вне его
document.addEventListener('click', function(e) {
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    }
});

// Параллакс эффект для героя
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Добавляем эффект наведения на карточки услуг
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Плавное появление элементов при скролле
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-item, .service-card, .feature').forEach(el => {
    fadeObserver.observe(el);
});

// Добавляем текущий год в футер
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© ${year} ФотоАрт. Все права защищены.`;
    }
});

console.log('🚀 Сайт фотографа загружен!');