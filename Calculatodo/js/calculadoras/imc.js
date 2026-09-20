function calcularIMC() {

    const peso =
        parseFloat(
            document.getElementById("peso").value
        );

    const alturaCm =
        parseFloat(
            document.getElementById("altura").value
        );

    const resultado =
        document.getElementById("resultadoIMC");


    if (
        isNaN(peso) ||
        isNaN(alturaCm) ||
        peso <= 0 ||
        alturaCm <= 0
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce un peso y una altura válidos.";

        return;

    }


    const alturaMetros =
        alturaCm / 100;


    const imc =
        peso /
        Math.pow(alturaMetros, 2);


    let interpretacion;


    if (imc < 18.5) {

        interpretacion =
            "Por debajo del rango de referencia";

    } else if (imc < 25) {

        interpretacion =
            "Dentro del rango de referencia";

    } else if (imc < 30) {

        interpretacion =
            "Por encima del rango de referencia";

    } else {

        interpretacion =
            "30 o más";

    }


    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Tu IMC</strong>

        <div class="edad-grande">

            ${imc.toLocaleString(
                "es-ES",
                {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                }
            )}

        </div>

        <hr>

        Referencia general:

        <strong>
            ${interpretacion}
        </strong>

        <br><br>

        <small>
            El resultado es orientativo y no constituye
            un diagnóstico médico.
        </small>

    `;

}
