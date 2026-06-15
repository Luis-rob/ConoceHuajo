document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const tarjetas = document.querySelectorAll('.tarjeta-negocio');

    function filtrarNegocios() {
        const textoBusqueda = buscador.value.toLowerCase();
        const categoriaSeleccionada = filtroCategoria.value;

        tarjetas.forEach(tarjeta => {
            // Obtener el texto dentro de la tarjeta (Título y descripción)
            const nombreNegocio = tarjeta.querySelector('h3').textContent.toLowerCase();
            const descripcionNegocio = tarjeta.querySelector('p').textContent.toLowerCase();
            const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

            // Condiciones de filtrado
            const coincideTexto = nombreNegocio.includes(textoBusqueda) || descripcionNegocio.includes(textoBusqueda);
            const coincideCategoria = categoriaSeleccionada === 'todos' || categoriaTarjeta === categoriaSeleccionada;

            // Mostrar u ocultar según coincida con ambos filtros
            if (coincideTexto && coincideCategoria) {
                tarjeta.style.display = 'flex';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    }

    // Escuchar eventos en tiempo real
    buscador.addEventListener('input', filtrarNegocios);
    filtroCategoria.addEventListener('change', filtrarNegocios);
});
