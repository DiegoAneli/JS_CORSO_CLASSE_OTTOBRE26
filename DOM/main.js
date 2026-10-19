function saluta(){

    alert("ciao!");
}


function parla(){

    alert("sto parlando");
}
////////////////////////////////////////////////////////////////////


function mostraMes(){

    document.getElementById("testo").innerHTML = "Hai cliccato il bottone!";
}


function salutaUtente(){

    let nome = document.getElementById("nome").value;

    document.getElementById("nomeInserito").innerHTML = "Ciao " + nome + " !";

}

////////////////////////////////////////////////////////////////////


function somma(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let risultato = num1 + num2; //somma

    document.getElementById("risultato").innerHTML = "Risultato : " + risultato;

}

