function calcularHipoteca() {

    const precio =
        parseFloat(
            document.getElementById("precioVivienda").value
        );

    const entrada =
        parseFloat(
            document.getElementById("entrada").value
        );

    const interesAnual =
        parseFloat(
            document.getElementById("interesHipoteca").value
        );

    const años =
        parseInt(
            document.getElementById("añosHipoteca").value
        );

    const resultado =
        document.getElementById("resultadoHipoteca");


    if (
        isNaN(precio) ||
        isNaN(entrada) ||
        isNaN(interesAnual) ||
        isNaN(años) ||

        precio <= 0 ||
        entrada < 0 ||
        entrada >= precio ||
        interesAnual < 0 ||
        años <= 0
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce valores válidos. La entrada debe ser inferior al precio de la vivienda.";

        return;

    }


    const importeFinanciado =
        precio - entrada;


    const numeroPagos =
        años * 12;


    const interesMensual =
        interesAnual / 100 / 12;


    let cuota;


    if (interesMensual === 0) {

        cuota =
            importeFinanciado / numeroPagos;

    } else {

        cuota =
            importeFinanciado *
            (
                interesMensual *
                Math.pow(
                    1 + interesMensual,
                    numeroPagos
                )
            ) /
            (
                Math.pow(
                    1 + interesMensual,
                    numeroPagos
                ) - 1
            );

    }


    const totalPagado =
        cuota * numeroPagos;


    const intereses =
        totalPagado - importeFinanciado;


    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Cuota mensual estimada</strong>

        <div class="edad-grande">

            ${dineroHipoteca(cuota)} €

        </div>

        <hr>

        Precio de la vivienda:
        <strong>
            ${dineroHipoteca(precio)} €
        </strong>

        <br><br>

        Entrada:
        <strong>
            ${dineroHipoteca(entrada)} €
        </strong>

        <br><br>

        Importe financiado:
        <strong>
            ${dineroHipoteca(importeFinanciado)} €
        </strong>

        <br><br>

        Intereses totales:
        <strong>
            ${dineroHipoteca(intereses)} €
        </strong>

        <br><br>

        Total pagado al banco:
        <strong>
            ${dineroHipoteca(totalPagado)} €
        </strong>

        <br><br>

        Número de cuotas:
        <strong>
            ${numeroPagos}
        </strong>

    `;

}


function dineroHipoteca(numero) {

    return numero.toLocaleString(
        "es-ES",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );

}
