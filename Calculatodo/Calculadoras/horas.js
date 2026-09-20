function calcularHoras() {

    const entrada =
        document.getElementById("entrada").value;

    const salida =
        document.getElementById("salida").value;

    const descanso =
        parseInt(document.getElementById("descanso").value) || 0;

    const resultado =
        document.getElementById("resultado");


    if (!entrada || !salida) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce la hora de entrada y la hora de salida.";

        return;
    }


    if (descanso < 0) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ El descanso no puede ser negativo.";

        return;
    }


    const [horaEntrada, minutoEntrada] =
        entrada.split(":").map(Number);

    const [horaSalida, minutoSalida] =
        salida.split(":").map(Number);


    let minutosEntrada =
        horaEntrada * 60 + minutoEntrada;

    let minutosSalida =
        horaSalida * 60 + minutoSalida;


    // Si la salida es anterior a la entrada,
    // entendemos que la jornada termina al día siguiente.

    if (minutosSalida <= minutosEntrada) {
        minutosSalida += 24 * 60;
    }


    const minutosTotales =
        minutosSalida - minutosEntrada;


    if (descanso >= minutosTotales) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ El descanso debe ser inferior al tiempo total de la jornada.";

        return;
    }


    const minutosTrabajados =
        minutosTotales - descanso;


    const horas =
        Math.floor(minutosTrabajados / 60);

    const minutos =
        minutosTrabajados % 60;


    const horasDecimales =
        minutosTrabajados / 60;


    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Tiempo trabajado</strong>

        <div class="edad-grande">
            ${horas} h ${minutos} min
        </div>

        <hr>

        <strong>En horas decimales</strong>

        <div class="edad-grande">
            ${horasDecimales.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })} horas
        </div>

        <hr>

        <p>
            Tiempo de descanso descontado:
            <strong>${descanso} minutos</strong>
        </p>

    `;
}