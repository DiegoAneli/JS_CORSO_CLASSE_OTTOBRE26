const titolo = document.getElementById("titolo");

function cambiaColore(){

    titolo.style.color = "red";
}


document.getElementById("btnColore").addEventListener("click", cambiaColore);





const testo = document.getElementById("testo");

function nascondiTesto(){

    testo.style.display = "none";
}


document.getElementById("btnTesto").addEventListener("click", nascondiTesto);