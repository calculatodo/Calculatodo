function calcularPrestamo() {

    const capital =
        parseFloat(
            document.getElementById("importePrestamo").value
        );

    const interesAnual =
        parseFloat(
            document.getElementById("interesPrestamo").value
        );

    const años =
        parseInt(
            document.getElementById("añosPrestamo").value
        );

    const resultado =
        document.getElementById("resultadoPrestamo");

    const tabla =
        document.getElementById("tablaAmortizacion");

    const cuerpo =
        document.getElementById("tablaCuerpo");


    if (
        isNaN(capital) ||
        isNaN(interesAnual) ||
        isNaN(años) ||
        capital <= 0 ||
        interesAnual < 0 ||
        años <= 0
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce valores válidos.";

        tabla.style.display = "none";

        return;

    }


    const numeroPagos =
        años * 12;


    const interesMensual =
        interesAnual / 100 / 12;


    let cuota;


    if (interesMensual === 0) {

        cuota =
            capital / numeroPagos;

    } else {

        cuota =
            capital *
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


    const interesesTotales =
        totalPagado - capital;


    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Cuota mensual</strong>

        <div class="edad-grande">
            ${dinero(cuota)} €
        </div>

        <hr>

        Importe del préstamo:
        <strong>${dinero(capital)} €</strong>

        <br><br>

        Total pagado:
        <strong>${dinero(totalPagado)} €</strong>

        <br><br>

        Intereses totales:
        <strong>${dinero(interesesTotales)} €</strong>

        <br><br>

        Número de cuotas:
        <strong>${numeroPagos}</strong>

    `;


    generarTabla(
        capital,
        interesMensual,
        cuota,
        numeroPagos
    );

}


function generarTabla(
    capitalInicial,
    interesMensual,
    cuota,
    numeroPagos
) {

    const tabla =
        document.getElementById("tablaAmortizacion");

    const cuerpo =
        document.getElementById("tablaCuerpo");


    cuerpo.innerHTML = "";


    let pendiente =
        capitalInicial;


    for (
        let mes = 1;
        mes <= numeroPagos;
        mes++
    ) {

        const intereses =
            pendiente * interesMensual;


        let capitalAmortizado =
            cuota - intereses;


        let cuotaReal =
            cuota;


        if (mes === numeroPagos) {

            capitalAmortizado =
                pendiente;

            cuotaReal =
                capitalAmortizado + intereses;

        }


        pendiente -= capitalAmortizado;


        if (pendiente < 0.01) {

            pendiente = 0;

        }


        const fila =
            document.createElement("tr");


        fila.innerHTML = `

            <td>${mes}</td>

            <td>${dinero(cuotaReal)} €</td>

            <td>${dinero(capitalAmortizado)} €</td>

            <td>${dinero(intereses)} €</td>

            <td>${dinero(pendiente)} €</td>

        `;


        cuerpo.appendChild(fila);

    }


    tabla.style.display = "block";

}


function dinero(numero) {

    return numero.toLocaleString(
        "es-ES",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );

}
