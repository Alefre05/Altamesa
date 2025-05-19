function mostrarPopupConRetraso() {
    // Comprobamos si ya se ha mostrado antes en esta sesión de navegación
    if (!sessionStorage.getItem("popupMostrado")) {
        setTimeout(() => {
            // Mostrar con animación
            const popup = document.getElementById("popup");
            popup.style.display = "flex";
            
            // Añadir clase para animar la entrada
            setTimeout(() => {
                document.querySelector(".popup-contenido").classList.add("active");
            }, 10);
            
            // Marcar como mostrado en esta sesión
            sessionStorage.setItem("popupMostrado", "true");
        }, 3000);
    }
}

// Cerrar el popup con animación
function cerrarPopup() {
    const popupContenido = document.querySelector(".popup-contenido");
    popupContenido.classList.remove("active");
    
    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
        document.getElementById("popup").style.display = "none";
    }, 300);
}

// Validar y aceptar el formulario
function aceptar() {
    const correo = document.getElementById("correo").value.trim();
    const cookiesAceptadas = document.getElementById("cookies").checked;
    const mensaje = document.getElementById("mensaje");
    
    // Validación de email usando expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Comprobar campos
    if (!correo) {
        mostrarMensaje("Por favor, introduce tu correo electrónico", "error");
        return;
    }
    
    if (!emailRegex.test(correo)) {
        mostrarMensaje("Por favor, introduce un correo electrónico válido", "error");
        return;
    }
    
    if (!cookiesAceptadas) {
        mostrarMensaje("Debes aceptar las cookies para continuar", "error");
        return;
    }
    
    // Todo correcto - simulamos envío
    mostrarMensaje("¡Genial! Te has suscrito correctamente", "ok");
    
    // Aquí iría el código para enviar el email al servidor
    console.log("Email registrado:", correo);
    
    // Guardar en localStorage que se ha suscrito (para no volver a mostrar)
    localStorage.setItem("usuarioSuscrito", "true");
    
    // Cerrar popup después de 2 segundos
    setTimeout(() => {
        cerrarPopup();
    }, 2000);
}

// Función para mostrar mensajes de error o éxito
function mostrarMensaje(texto, tipo) {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
    mensaje.className = tipo;
    
    // Efecto visual de aparición
    mensaje.style.opacity = "0";
    setTimeout(() => {
        mensaje.style.opacity = "1";
    }, 10);
}

// Activar cuando se carga la página
window.addEventListener("load", function() {
    // Solo mostrar si no se ha suscrito antes
    if (!localStorage.getItem("usuarioSuscrito")) {
        mostrarPopupConRetraso();
    }
    
    // Añadir listener para cerrar con ESC
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            cerrarPopup();
        }
    });
    
    // Cerrar al hacer clic fuera del popup
    document.getElementById("popup").addEventListener("click", function(e) {
        if (e.target.id === "popup") {
            cerrarPopup();
        }
    });
});