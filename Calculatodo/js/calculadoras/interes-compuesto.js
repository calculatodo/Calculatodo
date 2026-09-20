function calcularInteresCompuesto() {

    const capitalInicial = parseFloat(
        document.getElementById("capitalInicial").value
    );

    const aportacion = parseFloat(
        document.getElementById("aportacion").value
    );

    const interesAnual = parseFloat(
        document.getElementById("interes").value
    );

    const años = parseInt(
        document.getElementById("años").value
    );

    const frecuencia = parseInt(
        document.getElementById("frecuencia").value
    );

    const resultado =
        document.getElementById("resultadoInteres");


    if (
        isNaN(capitalInicial) ||
        isNaN(aportacion) ||
        isNaN(interesAnual) ||
        isNaN(años) ||
        isNaN(frecuencia) ||

        capitalInicial < 0 ||
        aportacion < 0 ||
        interesAnual < 0 ||
        años <= 0
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce valores válidos.";

        return;

    }


    const periodos =
        años * frecuencia;


    const tasa =
        (interesAnual / 100) / frecuencia;


    let capital =
        capitalInicial;


    for (
        let i = 0;
        i < periodos;
        i++
    ) {

        capital =
            capital * (1 + tasa);

        capital += aportacion;

    }


    const totalAportado =
        capitalInicial +
        (aportacion * periodos);


    const intereses =
        capital - totalAportado;


    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Resultado estimado</strong>

        <div class="edad-grande">

            ${formatearDinero(capital)} €

        </div>

        <hr>

        Total aportado:
        <strong>
            ${formatearDinero(totalAportado)} €
        </strong>

        <br><br>

        Intereses generados:
        <strong>
            ${formatearDinero(intereses)} €
        </strong>

        <br><br>

        Periodos:
        <strong>
            ${periodos}
        </strong>

    `;

}


function formatearDinero(numero) {

    return numero.toLocaleString(
        "es-ES",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );

}
