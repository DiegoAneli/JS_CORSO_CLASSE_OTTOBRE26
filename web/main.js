function originale(){

    box_red.style.width = "100px";
    box_red.style.height = "100px";
    box_red.style.backgroundColor = "red";
    posizione = 0;
    box_red.style.left = posizione + "px";
    
}


function ingrandisci(){

    box_red.style.width = "150px";
    box_red.style.height = "150px";
    box_green.style.width = "150px";
    box_green.style.height = "150px";
}


function riduci(){

    box_red.style.width = "50px";
    box_red.style.height = "50px";
}


function cambiaColore(){

    box_red.style.backgroundColor = "#2b1919";
    box_red.style.color = "#ffff";
}


//spostamenti

//stato iniziale
let posizione = 0;

function spostaDestra(){

    posizione += 20;
    box_red.style.left = posizione + "px";
}

function spostaSinistra(){

    posizione -= 20;
    box_red.style.left = posizione + "px";

}



function saluta(){

    alert("ciao!");

}

//funzione che fa lo scale di 1.5 e con una scritta all interno centrata
//ruota di 180°

function scalaRuota(){

    
    box_red.style.transform = "rotate(180deg) scale(1.5)";
    box_red.style.transition = "transform 5s ease"


}