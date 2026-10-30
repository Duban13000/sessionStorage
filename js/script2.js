function mostrarNombre(){
    const nombre = sessionStorage.getItem("nombre");
    const ciudad = sessionStorage.getItem("ciudad");

    if(nombre === null && ciudad === null){
        document.getElementById("saludo").textContent = "No hay ningún nombre y ciudad guardada.";
    } else{
        document.getElementById("saludo").textContent = `Hola, ${nombre}, de ${ciudad}`;
    }
}
function borrar(){
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("ciudad");
    mostrarNombre();
}
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);