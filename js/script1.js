function guardar(){
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;

    if (nombre === "" || ciudad === "") {
        alert("Por favor, completa todos los campos obligatorios antes de continuar.");
        return;
    }
    sessionStorage.setItem("nombre" , nombre);
    sessionStorage.setItem("ciudad" , ciudad)
    window.location.href = "pagina2.html";
}
document.getElementById("btn-guardar").addEventListener("click", guardar);