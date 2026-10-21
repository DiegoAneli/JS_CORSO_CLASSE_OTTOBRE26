const titolo = document.getElementById("titolo");

function cambiaColore(){

    titolo.style.color = "red";
}


document.getElementById("btnColore").addEventListener("click", cambiaColore);


//////////////////////////////////////////////////////////////////////////////


const testo = document.getElementById("testo");

function nascondiTesto(){

    testo.style.display = "none";
}


document.getElementById("btnTesto").addEventListener("click", nascondiTesto);



///////////////////////////////////////////////////////////

let contatore = 0;

//incremento

function incrementa(){

    contatore++;
    document.getElementById("numero").textContent = contatore;

}

document.getElementById("btn_aumenta").addEventListener("click", incrementa);


//decremento

function decrementa(){

    contatore--;
    document.getElementById("numero").textContent = contatore;

}

document.getElementById("btn_diminuisci").addEventListener("click", decrementa);