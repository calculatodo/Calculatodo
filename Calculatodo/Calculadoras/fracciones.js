function calcularFraccion() {

    const numerador1 = parseInt(
        document.getElementById("numerador1").value
    );

    const denominador1 = parseInt(
        document.getElementById("denominador1").value
    );

    const numerador2 = parseInt(
        document.getElementById("numerador2").value
    );

    const denominador2 = parseInt(
        document.getElementById("denominador2").value
    );

    const operacion =
        document.getElementById("operacion").value;

    const resultado =
        document.getElementById("resultado");


    // Comprobar datos

    if (
        isNaN(numerador1) ||
        isNaN(denominador1) ||
        isNaN(numerador2) ||
        isNaN(denominador2)
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce todos los valores.";

        return;
    }


    // Comprobar denominadores

    if (
        denominador1 === 0 ||
        denominador2 === 0
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ El denominador no puede ser cero.";

        return;
    }


    let numeradorResultado;
    let denominadorResultado;


    // Operaciones

    if (operacion === "suma") {

        numeradorResultado =
            numerador1 * denominador2 +
            numerador2 * denominador1;

        denominadorResultado =
            denominador1 * denominador2;

    }


    else if (operacion === "resta") {

        numeradorResultado =
            numerador1 * denominador2 -
            numerador2 * denominador1;

        denominadorResultado =
            denominador1 * denominador2;

    }


    else if (operacion === "multiplicacion") {

        numeradorResultado =
            numerador1 * numerador2;

        denominadorResultado =
            denominador1 * denominador2;

    }


    else if (operacion === "division") {

        if (numerador2 === 0) {

            resultado.style.display = "block";

            resultado.innerHTML =
                "⚠️ No se puede dividir entre cero.";

            return;
        }

        numeradorResultado =
            numerador1 * denominador2;

        denominadorResultado =
            denominador1 * numerador2;

    }


    // Si el denominador queda negativo,
    // pasamos el signo al numerador.

    if (denominadorResultado < 0) {

        numeradorResultado *= -1;

        denominadorResultado *= -1;

    }


    // Simplificar

    const divisor =
        maximoComunDivisor(
            Math.abs(numeradorResultado),
            Math.abs(denominadorResultado)
        );


    numeradorResultado /= divisor;
    denominadorResultado /= divisor;


    // Resultado decimal

    const decimal =
        numeradorResultado / denominadorResultado;


    resultado.style.display = "block";


    // Fracción simplificada

    let fraccionTexto;


    if (denominadorResultado === 1) {

        fraccionTexto =
            `${numeradorResultado}`;

    } else {

        fraccionTexto =
            `${numeradorResultado} / ${denominadorResultado}`;

    }


    resultado.innerHTML = `

        <strong>Resultado</strong>

        <div class="edad-grande">
            ${fraccionTexto}
        </div>

        <hr>

        <strong>Resultado decimal</strong>

        <div class="edad-grande">
            ${decimal.toLocaleString("es-ES", {
                maximumFractionDigits: 10
            })}
        </div>

    `;
}



// Máximo común divisor

function maximoComunDivisor(a, b) {

    while (b !== 0) {

        const temporal = b;

        b = a % b;

        a = temporal;

    }

    return a || 1;
}