function calcularSueldo() {

    const salarioAnual =
        parseFloat(document.getElementById("salario").value);

    const pagas =
        parseInt(document.getElementById("pagas").value);

    const porcentajeSS =
        parseFloat(document.getElementById("seguridadSocial").value);

    const porcentajeIRPF =
        parseFloat(document.getElementById("irpf").value);

    const resultado =
        document.getElementById("resultado");


    if (isNaN(salarioAnual)) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce el salario bruto anual.";

        return;
    }


    if (
        salarioAnual < 0 ||
        isNaN(porcentajeSS) ||
        isNaN(porcentajeIRPF) ||
        porcentajeSS < 0 ||
        porcentajeIRPF < 0 ||
        porcentajeSS > 100 ||
        porcentajeIRPF > 100
    ) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Introduce valores válidos.";

        return;
    }


    const seguridadSocial =
        salarioAnual * porcentajeSS / 100;

    const irpf =
        salarioAnual * porcentajeIRPF / 100;

    const salarioNetoAnual =
        salarioAnual -
        seguridadSocial -
        irpf;

    const brutoMensual =
        salarioAnual / pagas;

    const netoMensual =
        salarioNetoAnual / pagas;


    resultado.style.display = "block";


    resultado.innerHTML = `

        <strong>Resultado estimado</strong>

        <div class="edad-grande">
            ${formatearEuro(brutoMensual)}
            <br>
            <small>bruto por paga</small>
        </div>

        <hr>

        <strong>Salario neto estimado por paga</strong>

        <div class="edad-grande">
            ${formatearEuro(netoMensual)}
        </div>

        <hr>

        <strong>Salario bruto anual</strong>

        <div class="edad-grande">
            ${formatearEuro(salarioAnual)}
        </div>

        <hr>

        <strong>Salario neto anual estimado</strong>

        <div class="edad-grande">
            ${formatearEuro(salarioNetoAnual)}
        </div>

        <hr>

        <strong>Deducciones estimadas</strong>

        <p>
            Seguridad Social:
            ${formatearEuro(seguridadSocial)}
        </p>

        <p>
            IRPF:
            ${formatearEuro(irpf)}
        </p>

    `;
}


function formatearEuro(valor) {

    return valor.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " €";

}