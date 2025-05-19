// JavaScript para mostrar descripciones de productos al hacer clic en las imágenes
document.addEventListener('DOMContentLoaded', function() {
    // Datos de descripciones de los entrantes
    const productDescriptions = {
        "Albondigas de cordero con salsa de yogur y menta": 
            "Tiernas albóndigas elaboradas con carne de cordero especiada, servidas con una refrescante salsa de yogur griego, menta fresca y un toque de limón.",
        
        "Pollo con mantequilla de cacahuete y lima": 
            "Jugosos trozos de pollo marinados y cocinados en una cremosa salsa de mantequilla de cacahuete con un toque cítrico de lima que aporta frescura y equilibrio.",
        
        "tacos de cochinita pibil con cebolla morada encurtida": 
            "Auténticos tacos mexicanos con cerdo marinado en achiote y cítricos, cocinado lentamente hasta deshilacharse, servidos con tortillas de maíz y coronados con cebolla morada encurtida.",
        
        "Pollo al curry con plátano macho": 
            "Sabroso estofado de pollo en salsa curry aromática con trozos de plátano macho frito que aportan un dulzor contrastante.",
        
        "Pastel de carne con puré de boniato": 
            "Tradicional pastel de carne especiada y verduras, cubierto con un cremoso puré de boniato ligeramente dulce y gratinado en horno.",
        
        "Brochetas de pollo con salsa de sésamo y miel": 
            "Tiernas brochetas de pollo marinado, asadas y bañadas en una glaseada salsa de sésamo tostado y miel que aporta un toque dulce y ligeramente picante.",
        
        "Rollitos vietnamitas de carne de cerdo y mango": 
            "Frescos rollitos de papel de arroz rellenos de cerdo marinado, mango fresco, hierbas aromáticas y vegetales crujientes, acompañados de salsa de cacahuete.",
        
        "Gyozas de gambas con jengibre y cebollino": 
            "Delicadas empanadillas asiáticas rellenas de gambas picadas, jengibre fresco y cebollino, marcadas a la plancha y terminadas al vapor para una textura perfecta.",

        "Pimientos del piquillo rellenos de merluza": 
            "Tradicionales pimientos del piquillo rellenos con un suave guiso de merluza, cebolla y ajo, napados con una ligera salsa de pescado.",
        
        "Arroz con pulpo al estilo gallego": 
            "Cremoso arroz cocinado con caldo de pescado y azafrán, acompañado de pulpo cocido y aliñado al estilo gallego con pimentón, aceite de oliva y sal gorda.",
        
        "CURRY DE GARBANZOS Y BONIATO CON LECHE DE COCO": 
            "Reconfortante curry vegetariano con garbanzos, trozos de boniato y verduras en una aromática salsa de leche de coco y especias.",
        
        "Berenjenas asadas con miso y sésamo": 
            "Berenjenas asadas hasta conseguir una textura cremosa, glaseadas con una salsa de miso dulce y decoradas con semillas de sésamo tostado y cebollino.",
        
        "Arroz salvaje con setas, espárragos y soja texturizada": 
            "Nutritiva combinación de arroz salvaje con variedad de setas silvestres, espárragos verdes y soja texturizada, aromatizado con hierbas frescas.",
        
        "Falafel al horno con crema de tahini y pepino": 
            "Croquetas de garbanzos y hierbas frescas horneadas en lugar de fritas, servidas con una cremosa salsa de tahini y refrescante pepino.",
        
        "Pasta de calabacin con pesto rojo de anacardos": 
            "Espaguetis de calabacín al estilo vegetariano, cubiertos con un cremoso pesto rojo elaborado con tomates secos, anacardos y albahaca.",
        
        "Pollo tikka masala con arroz basmati": 
            "Clásico plato indio de pollo marinado en yogur y especias, cocinado en horno tandoor y cubierto con una cremosa salsa de tomate aromática, servido con esponjoso arroz basmati."
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
