// JS COMPLEJO: Renderizador Matemático de Cierre Dinámico Mutuo (Accordion Auto-collapse con scrollHeight)
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const currentContent = this.nextElementSibling;
            const isOpen = currentContent.style.maxHeight && currentContent.style.maxHeight !== '0px';

            // Colapsar todos los paneles abiertos para simular memoria de un solo canal activo
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.maxHeight = '0px';
                content.style.paddingTop = '0px';
                content.style.paddingBottom = '0px';
            });

            // Si estaba cerrado, lo abrimos calculando la altura exacta en pixeles del nodo oculto
            if (!isOpen) {
                currentContent.style.paddingTop = '15px';
                currentContent.style.paddingBottom = '15px';
                currentContent.style.maxHeight = (currentContent.scrollHeight + 30) + 'px';
            }
        });
    });
});


