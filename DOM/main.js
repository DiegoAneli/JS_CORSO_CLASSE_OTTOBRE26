function saluta(){

    alert("ciao!");
}


function parla(){

    alert("sto parlando");
}


function mostraMes(){

    document.getElementById("testo").innerHTML = "Hai cliccato il bottone!";
}


function salutaUtente(){

    let nome = document.getElementById("nome").value;

    document.getElementById("nomeInserito").innerHTML = "Ciao " + nome + " !";

}