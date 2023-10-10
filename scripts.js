const oper = document.getElementById("oper");

oper.addEventListener("click", () => {
        const longitud = parseFloat(document.getElementById("longitud").value);
        const ancho = parseFloat(document.getElementById("ancho").value);

        let area = document.getElementById("area");
        let perimetro = document.getElementById("perimetro");

        area.innerHTML = "El area es : " + longitud * ancho;

        const resultPerimetro = (2 * longitud) + (2 * ancho);
        perimetro.innerHTML = `Perímetro del rectángulo: ${resultPerimetro}`;
    })