function calcularPorcentaje() {

    const cantidad =
        parseFloat(document.getElementById("cantidad1").value);

    const porcentaje =
        parseFloat(document.getElementById("porcentaje1").value);

    const resultado =
        document.getElementById("resultado1");


    if (isNaN(cantidad) || isNaN(porcentaje)) {

        mostrarError(resultado);

        return;

    }


    const calculo =
        (cantidad * porcentaje) / 100;


    mostrarResultado(
        resultado,
        `${porcentaje}% de ${formatear(cantidad)} es
        <strong>${formatear(calculo)}</strong>`
    );

}


function calcularQuePorcentaje() {

    const cantidad =
        parseFloat(document.getElementById("cantidad2").value);

    const total =
        parseFloat(document.getElementById("cantidadTotal2").value);

    const resultado =
        document.getElementById("resultado2");


    if (isNaN(cantidad) || isNaN(total) || total === 0) {

        mostrarError(resultado);

        return;

    }


    const porcentaje =
        (cantidad / total) * 100;


    mostrarResultado(
        resultado,
        `${formatear(cantidad)} representa el
        <strong>${formatear(porcentaje)}%</strong> de
        ${formatear(total)}`
    );

}


function calcularAumento() {

    const cantidad =
        parseFloat(document.getElementById("cantidad3").value);

    const aumento =
        parseFloat(document.getElementById("aumento3").value);

    const resultado =
        document.getElementById("resultado3");


    if (isNaN(cantidad) || isNaN(aumento)) {

        mostrarError(resultado);

        return;

    }


    const importeAumento =
        cantidad * aumento / 100;

    const resultadoFinal =
        cantidad + importeAumento;


    mostrarResultado(
        resultado,
        `Aumento:
        <strong>${formatear(importeAumento)}</strong><br>
        Resultado final:
        <strong>${formatear(resultadoFinal)}</strong>`
    );

}


function calcularDescuento() {

    const precio =
        parseFloat(document.getElementById("cantidad4").value);

    const descuento =
        parseFloat(document.getElementById("descuento4").value);

    const resultado =
        document.getElementById("resultado4");


    if (isNaN(precio) || isNaN(descuento)) {

        mostrarError(resultado);

        return;

    }


    const importeDescuento =
        precio * descuento / 100;

    const precioFinal =
        precio - importeDescuento;


    mostrarResultado(
        resultado,
        `Descuento:
        <strong>${formatear(importeDescuento)}</strong><br>
        Precio final:
        <strong>${formatear(precioFinal)}</strong>`
    );

}


function calcularDiferencia() {

    const inicial =
        parseFloat(document.getElementById("cantidad5").value);

    const final =
        parseFloat(document.getElementById("cantidadFinal5").value);

    const resultado =
        document.getElementById("resultado5");


    if (isNaN(inicial) || isNaN(final) || inicial === 0) {

        mostrarError(resultado);

        return;

    }


    const diferencia =
        ((final - inicial) / Math.abs(inicial)) * 100;


    let texto;


    if (diferencia > 0) {

        texto =
            `Ha aumentado un
            <strong>${formatear(diferencia)}%</strong>`;

    } else if (diferencia < 0) {

        texto =
            `Ha disminuido un
            <strong>${formatear(Math.abs(diferencia))}%</strong>`;

    } else {

        texto =
            `<strong>No ha habido cambios.</strong>`;

    }


    mostrarResultado(resultado, texto);

}


function formatear(numero) {

    return numero.toLocaleString(
        "es-ES",
        {
            maximumFractionDigits: 2
        }
    );

}


function mostrarResultado(elemento, texto) {

    elemento.style.display = "block";

    elemento.innerHTML = texto;

}


function mostrarError(elemento) {

    elemento.style.display = "block";

    elemento.innerHTML =
        "⚠️ Introduce valores válidos.";

}
