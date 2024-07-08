let errores = [];

const contenedorFormulario = document.querySelector(".alertas");

document.querySelector(".contactame-formulario").addEventListener('submit', function (e) {
    e.preventDefault();

    errores = [];

    const fromData = new FormData(this);

    for (const [name, value] of fromData.entries()) {
        console.log(`${name}: ${value}`);

        if (value.trim().length === 0 || value === "0") {
            errores.push(`El campo ${name} es obligatorio`);
        }
    }
    if (errores.length > 0) {
        errores.forEach(error => {
            const alerta = document.createElement("p");
            alerta.classList.add("alerta-error");
            alerta.textContent = error;
            contenedorFormulario.appendChild(alerta);
        });
    } else {
        const alerta = document.createElement("p");
        alerta.classList.add("alerta-exito");
        alerta.textContent = "Enviado Correctamente";
        contenedorFormulario.appendChild(alerta);
    }
    setTimeout(() => {
        contenedorFormulario.innerHTML = '';
    }, 3000);
});



