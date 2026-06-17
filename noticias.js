document.addEventListener('DOMContentLoaded', () => {
    
    const curiosidades = [
        "El nombre 'Huajolotitlán' proviene de la lengua Náhuatl y hace alusión a un territorio poblado por pavos silvestres.",
        "Su iglesia tiene un marcado estilo dominico barroco del periodo virreinal temprano.",
        "El Río Mixteco es el principal afluente que da vida a sus cultivos frutales y de hortalizas.",
        "Su máxima festividad del año se lleva a cabo a finales del mes de julio.",
        "Los primeros pobladores fueron mixtecos Ñuine alrededor del año 350 a. n. e., mucho antes de la llegada de los españoles.",
        "Durante la Revolución Mexicana, grupos zapatistas pasaron por la comunidad. Un general llamado Cástulo Villagómez exigió alimentos y ganado para sus tropas."
    ];

    const factText = document.getElementById('factTextBox');
    const factBtn = document.getElementById('btnTriggerFact');
    let lastIndex = -1;

    factBtn.addEventListener('click', () => {
        let currentSelection;
        do {
            currentSelection = Math.floor(Math.random() * curiosidades.length);
        } while (currentSelection === lastIndex);

        lastIndex = currentSelection;
        factText.style.opacity = 0;
        
        setTimeout(() => {
            factText.textContent = curiosidades[currentSelection];
            factText.style.opacity = 1;
        }, 300);
    });
    const form = document.getElementById('feedbackForm');
    const emailInput = document.getElementById('usrEmail');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailRegex = /^[a-zA-Z0-0._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const errorMsg = document.querySelector('.error-text');

        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('shake-trigger');
            errorMsg.style.display = 'block';
            
            setTimeout(() => {
                emailInput.classList.remove('shake-trigger');
            }, 400);
        } else {
            errorMsg.style.display = 'none';
            alert('¡Muchas gracias por tu recomendación! Ha sido guardada con éxito.');
            form.reset();
        }
    });
});

