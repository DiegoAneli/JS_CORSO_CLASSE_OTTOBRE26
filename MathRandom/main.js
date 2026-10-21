//due giocatori lanciano 2 dadi
//vince chi ottiene la somma più alta



function sfidaGiocatori(){

    //lancio dei dadi 1 giocatore
    const dado1G1 = Math.floor(Math.random() * 6) + 1;
    const dado2G1 = Math.floor(Math.random() * 6) + 1;

    //lancio dei dadi 2 giocatore
    const dado1G2 = Math.floor(Math.random() * 6) + 1;
    const dado2G2 = Math.floor(Math.random() * 6) + 1;

    //calcolo dei punteggi 
    const totaleG1 = dado1G1 + dado2G1;
    const totaleG2 = dado1G2 + dado2G2;

    let vincitore = "";

    //Confronto dei risultati
    if(totaleG1 > totaleG2){

        vincitore = "Vince il giocatore 1 !";

    }else if(totaleG1 < totaleG2){

        vincitore = "Vince il giocatore 2 !";
    }else{

        vincitore = "Pareggio!";
    }

    //visualizzazione del risultato
    document.getElementById("risultatoDadi").textContent = 
    
    "Giocatore 1 :" + dado1G1 + " + " + dado2G1 + " = " + totaleG1 +
    " | Giocatore 2: " + dado1G2 + " + " + dado2G2 + " = " + totaleG2 + 
    " | Vincitore : " + vincitore;



}

document.getElementById("btnSfida").addEventListener("click", sfidaGiocatori);