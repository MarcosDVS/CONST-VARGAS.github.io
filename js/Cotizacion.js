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
        detalle += `<li>${servicio.nextElementSibling.textContent}: $${costo.toFixed(2)}</li>`;
    });

    detalle += `</ul><h4>Total: $${total.toFixed(2)}</h4>`;

    document.getElementById('resultado').innerHTML = detalle;
}

function generarDocumento() {
    const resultado = document.getElementById('resultado').innerHTML;
    if (!resultado) {
        alert('Por favor, realice una cotización antes de generar el documento.');
        return;
    }

    const contenido = document.createElement('div');
    contenido.innerHTML = `
        <h1 style="text-align: center;">CONSTRUCTORA VARGAS</h1>
        <div style="text-align: center; margin-bottom: 20px;">
        </div>
        <div>${resultado}</div>
        <h3 style="margin-top: 20px;">Información de contacto:</h3>
        <p><b>Ing. Emanuel De Vargas Serrano</b></p>
        <p>Teléfono: +1 (829) 870-7794</p>
        <p>Instagram: @constructoravargas839</p>
        <p>FaceBook: @constructoravargas839</p>
        <p>Dirección: Calle Duarte #92, La Cueva</p>
    `;

    const ventana = window.open('', '_blank');
    ventana.document.write(`
        <html>
        <head>
            <title>Cotización</title>
        </head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
            ${contenido.innerHTML}
        </body>
        </html>
    `);
    ventana.document.close();
    ventana.print();
}
