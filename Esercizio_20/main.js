const titolo = document.getElementById("titolo");

function cambiaColore(){

    titolo.style.color = "red";
}


document.getElementById("btnColore").addEventListener("click", cambiaColore);