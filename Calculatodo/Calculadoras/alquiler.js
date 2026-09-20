function calcularAlquiler() {

    const alquiler =
        parseFloat(document.getElementById("alquiler").value);

    const gastos =
        parseFloat(document.getElementById("gastos").value);

    const suministros =
        parseFloat(document.getElementById("suministros").value);

    const meses =
        parseInt(document.getElementById("meses").value);


    const resultado =
        document.getElementById("resultado");


    // Comprobar datos

    if (
        isNaN(alquiler) ||
        isNaN(gastos) ||
        isNaN(suministros) ||
        isNaN(meses)
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce todos los datos.";

        return;
    }


    // Comprobar valores

    if (
        alquiler < 0 ||
        gastos < 0 ||
        suministros < 0 ||
        meses <= 0
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce valores válidos.";

        return;
    }


    // Cálculos

    const costeMensual =
        alquiler + gastos + suministros;

    const costeAnual =
        costeMensual * 12;

    const costeTotal =
        costeMensual * meses;


    // Mostrar resultado

    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Resultado</strong>

        <div class="edad-grande">
            ${formatearEuro(costeMensual)}
            €/mes
        </div>

        <hr>

        <strong>Coste anual</strong>

        <div class="edad-grande">
            ${formatearEuro(costeAnual)}
        </div>

        <hr>

        <strong>Coste durante ${meses} meses</strong>

        <div class="edad-grande">
            ${formatearEuro(costeTotal)}
        </div>

    `;
}


function formatearEuro(valor) {

    return valor.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " €";

}