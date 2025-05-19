// Función para manejar el menú desplegable
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // Función para alternar la visibilidad del menú
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        
        // Cambiar el ícono según el estado del menú
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Cerrar el menú al hacer clic en cualquier enlace
    const navLinksElements = navLinks.querySelectorAll('a');
    navLinksElements.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target) && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
