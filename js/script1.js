function guardar(){
    const nombre = document.getElementById("nombre").value;
    sessionStorage.setItem("nombre" , nombre);
    window.location.href = "pagina2.html";
}
document.getElementById=("btn-guardar").addEnventListener("click",guardar);