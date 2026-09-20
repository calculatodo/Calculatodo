function calcularCalorias() {

    const sexo = document.getElementById("sexo").value;
    const edad = parseFloat(document.getElementById("edad").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const actividad = parseFloat(document.getElementById("actividad").value);

    const resultado = document.getElementById("resultadoCalorias");

    if (
        isNaN(edad) ||
        isNaN(peso) ||
        isNaN(altura) ||
        edad <= 0 ||
        peso <= 0 ||
        altura <= 0
    ) {
        resultado.innerHTML = `
            <p>Introduce valores válidos en todos los campos.</p>
        `;
        return;
    }

    let metabolismoBasal;

    if (sexo === "hombre") {

        metabolismoBasal =
            (10 * peso) +
            (6.25 * altura) -
            (5 * edad) +
            5;

    } else {

        metabolismoBasal =
            (10 * peso) +
            (6.25 * altura) -
            (5 * edad) -
            161;

    }

    const caloriasDiarias = metabolismoBasal * actividad;

    resultado.innerHTML = `

        <p>Tu metabolismo basal aproximado es:</p>

        <div class="edad-grande">
            ${Math.round(metabolismoBasal).toLocaleString("es-ES")} kcal/día
        </div>

        <p>Tus necesidades calóricas diarias aproximadas son:</p>

        <div class="edad-grande">
            ${Math.round(caloriasDiarias).toLocaleString("es-ES")} kcal/día
        </div>

    `;
}