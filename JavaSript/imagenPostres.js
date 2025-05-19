// JavaScript para mostrar descripciones de productos al hacer clic en las imágenes
document.addEventListener('DOMContentLoaded', function() {
    // Datos de descripciones de los entrantes
    const productDescriptions = {
        "Coulant de chocolate con relleno de praliné": 
            "Un pequeño bizcocho de chocolate con exterior ligeramente crujiente que, al partirlo, revela un corazón líquido de praliné que fluye deliciosamente. La combinación del intenso chocolate y el cremoso praliné de avellanas crea una experiencia sensorial única y decadente.",
        
        "Cheesecake con base de anacardos y frutos rojos": 
            "Una versión contemporánea y saludable del clásico cheesecake, elaborada con una cremosa mezcla de anacardos que proporciona una textura similar al queso tradicional. Coronada con una brillante capa de frutos rojos que aporta un toque fresco y ligeramente ácido que complementa la suavidad de la base.",
        
        "Mousse de aguacate y cacao": 
            "Una combinación sorprendente y deliciosa que une la cremosidad del aguacate con el intenso sabor del cacao. Este postre ligero y aterciopelado ofrece un equilibrio perfecto entre lo saludable y lo indulgente, con una textura sedosa y un sabor ligeramente dulce con notas profundas de chocolate.",
        
        "Tarta de limon confitado": 
            "Un postre elegante que destaca por su equilibrio entre acidez y dulzor. La base crujiente sostiene una crema suave de limón cubierta con finas rodajas de limón confitado, proporcionando un contraste de texturas y un refrescante sabor cítrico que despierta los sentidos.",
        
    };

    // Seleccionar todos los elementos de menú
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Para cada elemento del menú, añadir la funcionalidad
    menuItems.forEach(menuItem => {
        const image = menuItem.querySelector('.item-image img');
        const title = menuItem.querySelector('.item-title').textContent;
        const description = productDescriptions[title] || "Descripción no disponible.";
        
        // Creamos un div para la descripción desplegable
        const descriptionBox = document.createElement('div');
        descriptionBox.className = 'product-description';
        descriptionBox.style.backgroundColor = '#fff';
        descriptionBox.style.padding = '15px';
        descriptionBox.style.borderRadius = '0 0 15px 15px';
        descriptionBox.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        descriptionBox.style.margin = '-15px -15px 15px -15px';
        descriptionBox.style.borderTop = '1px solid #eee';
        descriptionBox.style.display = 'none';
        descriptionBox.style.position = 'relative';
        descriptionBox.style.zIndex = '1';
        descriptionBox.style.transition = 'all 0.3s ease';
        descriptionBox.style.overflow = 'hidden';
        descriptionBox.style.maxHeight = '0';
        
        // Contenido de la descripción
        const descriptionTitle = document.createElement('h4');
        descriptionTitle.textContent = 'Descripción';
        descriptionTitle.style.color = '#097D4C';
        descriptionTitle.style.marginBottom = '8px';
        descriptionTitle.style.fontSize = '16px';
        
        const descriptionText = document.createElement('p');
        descriptionText.textContent = description;
        descriptionText.style.fontSize = '14px';
        descriptionText.style.lineHeight = '1.5';
        descriptionText.style.color = '#555';
        descriptionText.style.margin = '0';
        
        // Añadir elementos al descriptionBox
        descriptionBox.appendChild(descriptionTitle);
        descriptionBox.appendChild(descriptionText);
        
        // Añadir la caja de descripción después de la información básica
        const infoDiv = menuItem.querySelector('.item-info');
        infoDiv.insertBefore(descriptionBox, infoDiv.querySelector('.nutrition-info'));
        
        // Indicador visual en la imagen
        const indicator = document.createElement('div');
        indicator.className = 'click-indicator';
        indicator.style.position = 'absolute';
        indicator.style.bottom = '10px';
        indicator.style.right = '10px';
        indicator.style.backgroundColor = 'rgba(9, 125, 76, 0.85)';
        indicator.style.color = 'white';
        indicator.style.width = '28px';
        indicator.style.height = '28px';
        indicator.style.borderRadius = '50%';
        indicator.style.display = 'flex';
        indicator.style.justifyContent = 'center';
        indicator.style.alignItems = 'center';
        indicator.style.transition = 'transform 0.2s ease';
        indicator.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        indicator.style.fontSize = '16px';
        indicator.innerHTML = '<i class="fas fa-info"></i>';
        
        // Añadir el indicador al contenedor de la imagen
        const imageContainer = menuItem.querySelector('.item-image');
        imageContainer.style.position = 'relative'; // Aseguramos que el contenedor sea posicionado
        imageContainer.appendChild(indicator);
        imageContainer.style.cursor = 'pointer';
        
        // Control para verificar si el desplegable está abierto
        let isOpen = false;
        
        // Función para alternar la descripción
        function toggleDescription() {
            isOpen = !isOpen;
            
            if (isOpen) {
                // Mostrar el desplegable
                descriptionBox.style.display = 'block';
                setTimeout(() => {
                    descriptionBox.style.maxHeight = '300px'; // Altura máxima suficiente
                    descriptionBox.style.padding = '15px';
                    indicator.style.transform = 'rotate(45deg)';
                }, 10);
            } else {
                // Ocultar el desplegable
                descriptionBox.style.maxHeight = '0';
                descriptionBox.style.padding = '0 15px';
                indicator.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    descriptionBox.style.display = 'none';
                }, 300); // Esperar a que termine la animación
            }
        }
        
        // Evento de clic en la imagen
        imageContainer.addEventListener('click', toggleDescription);
        
        // Mejorar la interactividad del indicador
        indicator.addEventListener('mouseenter', () => {
            indicator.style.transform = isOpen ? 'rotate(45deg) scale(1.1)' : 'scale(1.1)';
        });
        
        indicator.addEventListener('mouseleave', () => {
            indicator.style.transform = isOpen ? 'rotate(45deg)' : 'scale(1)';
        });
    });
    
    // Añadir estilos adicionales para móviles
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .product-description {
                margin: -10px -10px 10px -10px;
                padding: 10px;
            }
            
            .product-description h4 {
                font-size: 14px;
            }
            
            .product-description p {
                font-size: 13px;
            }
        }
    `;
    document.head.appendChild(style);
});