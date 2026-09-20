const buscador = document.getElementById("buscador");

const calculadoras =
    document.querySelectorAll(".calculator-card");


buscador.addEventListener("input", function () {

    const texto =
        buscador.value
        .toLowerCase()
        .trim();


    calculadoras.forEach(function (calculadora) {

        const contenido =
            calculadora.dataset.search
            .toLowerCase();


        if (contenido.includes(texto)) {

            calculadora.style.display = "";

        } else {

            calculadora.style.display = "none";

        }

    });

});

