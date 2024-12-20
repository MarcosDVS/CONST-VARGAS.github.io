function calcularCosto() {
    const metros = parseFloat(document.getElementById('metros').value);
    if (isNaN(metros) || metros <= 0) {
        alert('Por favor, ingrese una cantidad válida de metros cuadrados.');
        return;
    }

    const servicios = document.querySelectorAll('.form-check-input:checked');
    let total = 0;
    let detalle = '<h3>Detalle de costos:</h3><ul>';

    servicios.forEach(servicio => {
        const precio = parseFloat(servicio.getAttribute('data-precio'));
        const costo = precio * metros;
        total += costo;
        detalle += `<li>${servicio.nextElementSibling.textContent}: $${costo.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</li>`;
    });

    detalle += `</ul><h4>Total: $${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>`;

    document.getElementById('resultado').innerHTML = detalle;
}
