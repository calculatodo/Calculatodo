function calcularCosteViaje() {

    const distancia = parseFloat(
        document.getElementById("distancia").value
    );

    const consumo = parseFloat(
        document.getElementById("consumo").value
    );

    const precio = parseFloat(
        document.getElementById("precio").value
    );

    const pasajeros = parseInt(
        document.getElementById("pasajeros").value
    );

    const idaVuelta =
        document.getElementById("idaVuelta").value;

    const resultado =
        document.getElementById("resultado");


    if (
        isNaN(distancia) ||
        isNaN(consumo) ||
        isNaN(precio) ||
        isNaN(pasajeros)
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce todos los datos.";

        return;
    }


    if (
        distancia <= 0 ||
        consumo <= 0 ||
        precio <= 0 ||
        pasajeros <= 0
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce valores mayores que cero.";

        return;
    }


    let distanciaTotal = distancia;


    if (idaVuelta === "si") {

        distanciaTotal = distancia * 2;

    }


    const litros =
        (distanciaTotal * consumo) / 100;


    const costeTotal =
        litros * precio;


    const costePersona =
        costeTotal / pasajeros;


    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Resultado del viaje</strong>

        <div class="edad-grande">
            ${distanciaTotal.toLocaleString("es-ES", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            })} km
        </div>

        <p>Distancia total</p>

        <hr>

        <strong>Combustible necesario</strong>

        <div class="edad-grande">
            ${litros.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} litros
        </div>

        <hr>

        <strong>Coste total</strong>

        <div class="edad-grande">
            ${costeTotal.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} €
        </div>

        <hr>

        <strong>Coste por pasajero</strong>

        <div class="edad-grande">
            ${costePersona.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} €
        </div>

    `;

}

