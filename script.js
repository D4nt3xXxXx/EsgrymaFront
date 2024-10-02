// Seleccionar todas las imágenes de la página
const images = document.querySelectorAll('img');

// Agregar eventos a cada imagen para agrandar al pasar el mouse y restaurar al quitar el mouse
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transition = 'transform 0.3s ease';
        image.style.transform = 'scale(1.1)'; // Aumenta el tamaño un 10%
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Vuelve al tamaño original
    });
});