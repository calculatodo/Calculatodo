function añadirIVA() {

    const precio = parseFloat(
        document.getElementById("precioAñadir").value
    );

    const tipo = parseFloat(
        document.getElementById("tipoAñadir").value
    );

    const resultado = document.getElementById("resultadoAñadir");

    if (isNaN(precio) || isNaN(tipo) || precio < 0) {
        resultado.style.display = "block";
        resultado.innerHTML = "⚠️ Introduce valores válidos.";
        return;
    }

    const iva = precio * tipo / 100;
    const total = precio + iva;

    resultado.style.display = "block";

    resultado.innerHTML = `
        Base imponible:
        <strong>${formatearIVA(precio)} €</strong>
        <br>

        IVA (${tipo}%):
        <strong>${formatearIVA(iva)} €</strong>
        <br>

        Total:
        <strong>${formatearIVA(total)} €</strong>
    `;
}


function quitarIVA() {

    const total = parseFloat(
        document.getElementById("precioQuitar").value
    );

    const tipo = parseFloat(
        document.getElementById("tipoQuitar").value
    );

    const resultado = document.getElementById("resultadoQuitar");

    if (isNaN(total) || isNaN(tipo) || total < 0) {
        resultado.style.display = "block";
        resultado.innerHTML = "⚠️ Introduce valores válidos.";
        return;
    }

    const base = total / (1 + tipo / 100);
    const iva = total - base;

    resultado.style.display = "block";

    resultado.innerHTML = `
        Precio con IVA:
        <strong>${formatearIVA(total)} €</strong>
        <br>

        Base imponible:
        <strong>${formatearIVA(base)} €</strong>
        <br>

        IVA (${tipo}%):
        <strong>${formatearIVA(iva)} €</strong>
    `;
}


function ivaPersonalizado() {

    const precio = parseFloat(
        document.getElementById("precioPersonalizado").value
    );

    const tipo = parseFloat(
        document.getElementById("tipoPersonalizado").value
    );

    const resultado = document.getElementById("resultadoPersonalizado");

    if (
        isNaN(precio) ||
        isNaN(tipo) ||
        precio < 0 ||
        tipo < 0
    ) {
        resultado.style.display = "block";
        resultado.innerHTML = "⚠️ Introduce valores válidos.";
        return;
    }

    const iva = precio * tipo / 100;
    const total = precio + iva;

    resultado.style.display = "block";

    resultado.innerHTML = `
        Base imponible:
        <strong>${formatearIVA(precio)} €</strong>
        <br>

        IVA (${tipo}%):
        <strong>${formatearIVA(iva)} €</strong>
        <br>

        Total:
        <strong>${formatearIVA(total)} €</strong>
    `;
}


function formatearIVA(numero) {

    return numero.toLocaleString(
        "es-ES",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );
}

