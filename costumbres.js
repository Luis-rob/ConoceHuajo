// JS COMPLEJO: Motor Isótopo / Animación por Matrix de filtrado de nodos en el DOM con temporizadores síncronos
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover estado activo previo
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                // Algoritmo de desvanecimiento y reordenamiento visual
                card.style.transform = 'scale(0.2)';
                card.style.opacity = '0';
                
                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.transform = 'scale(1)';
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 400);
            });
        });
    });
});
