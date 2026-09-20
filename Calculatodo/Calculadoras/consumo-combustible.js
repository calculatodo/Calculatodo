function calcularConsumo() {

    const distancia = parseFloat(
        document.getElementById("distancia").value
    );

    const litros = parseFloat(
        document.getElementById("litros").value
    );

    const precio = parseFloat(
        document.getElementById("precio").value
    );

    const resultado = document.getElementById("resultado");


    if (
        isNaN(distancia) ||
        isNaN(litros) ||
        isNaN(precio)
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce todos los datos.";

        return;
    }


    if (
        distancia <= 0 ||
        litros < 0 ||
        precio < 0
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce valores válidos.";

        return;
    }


    const consumo =
        (litros / distancia) * 100;

    const coste =
        litros * precio;


    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Consumo medio</strong>

        <div class="edad-grande">

            ${consumo.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}

            L/100 km

        </div>

        <hr>

        <strong>Combustible utilizado</strong>

        <div class="edad-grande">

            ${litros.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}

            litros

        </div>

        <hr>

        <strong>Coste del combustible</strong>

        <div class="edad-grande">

            ${coste.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}

            €

        </div>

    `;
}