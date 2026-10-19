//dare un nome parlante all funzione

//funzioni anonime
function saluta(){

    //questo è cio' che fa la funzione, ovvero stampare in console.log la stringa
    console.log("ciao ecco la mia funzione");

}

//per utilizzare una function devo richiamarla
saluta();




//FUNCTION CON PARAMETRI O ARGOMENTI

function nomeFunzione(parametri){

    //istruzioni da eseguire
    return qualcosa; // domanda da farvi sempre: cosa ritorna questa funzione? scrivere sempre return!

}



//funzione con parametri con nome utente

function salutaUtente(nome){

    console.log("ciao " + nome + "! Benvenuto nella Home!");
}

//invocare la funzione con parametro hardcoded

salutaUtente("Diego");
salutaUtente("Alice");
salutaUtente("Giorgio");
salutaUtente("Gennaro");

salutaUtente(15);
salutaUtente("diegoaneli@gmail.com");




//funzione di somma
function somma(x,y){

    return x + y ;
    
}

//devo salvare il risultato della somma in una variabile
let risultato = somma(20,20);

//per poi stampare il valore
console.log(risultato);



//funzione che calcola la potenza di un numero

function potenza(x){

    return x **2;
}

let pot = potenza(3);

console.log("Ecco la potenza del numero : " , pot);



//creo una funzione che se richiamata fa sempre la stessa verifica dell età


let etaUt = prompt("Inserisci l età : ");

let etaUtente = Number(etaUt);


function verificaEta(x){

    if(x >= 18){

        return "Sei maggiorenne";
    }else{

        return "Sei minorenne!";
    }
}


//richiamare la funzione (invocare)
let messaggio = verificaEta(etaUtente);

console.log(messaggio);
alert(messaggio);





//esercizio

//creare una funzione che calcola il prezzo di un prodotto
// - in base alla percentuale di sconto inserita dall utente
//Chiedi all utente il prezzo del prodotto e la % di sconto
// i prezzi sono decimali -> parsefloat()
// - al risultato applicate risultato.toFixed(2)

function calcolaPrezzo(prezzo, sconto){

    //calcolo sconto
    

}







