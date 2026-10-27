
function agregaImagen() {
    const entradaURL = document.getElementById("imagen URL");
    const entradaPie = document.getElementById("pieFoto");
    const galeria = document.getElementById("galeriaImagenes");

    const url = entradaURL.value.trim();
    const pieFoto = entradaPie.value.trim();

    if (url === "" || pieFoto === "") {
        alert("Escribe la URL y el pie de foto.");
        return;
    }

    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const imagen = document.createElement("img");
    imagen.src = url;
    imagen.alt = pieFoto;
    imagen.style.width = "200px";
    imagen.style.maxWidth = "100%";
    imagen.style.height = "auto";

    imagen.onerror = function () {
        alert("No se pudo cargar la imagen. Revisa la URL.");
        tarjeta.remove();
    };

    const descripcion = document.createElement("p");
    descripcion.textContent = pieFoto;

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(descripcion);
    galeria.appendChild(tarjeta);

    entradaURL.value = "";
    entradaPie.value = "";
}
