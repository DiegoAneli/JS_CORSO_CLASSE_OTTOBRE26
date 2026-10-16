// commenti inline

/* 
commenti multi linea
qualcosa di js
*/

/** */

//-------------------TIPI DI VARIABILE-------------

//dichiarazione di una variabile

//var nome = "Pippo"; // Stringa cioè "parola/insiemi di caratteri"

//per stampare in console la variabile
//console.log(nome);


//variabile di tipo numero
//var nome = 5;
//console.log(nome);

//variabile di tipo double -> numeri con la virgola decimali e anche negativi
//var numeroNegativo = -10.99;
//console.log(numeroNegativo);

//constanti -> a differenza delle variabili non posso cambiare il valore al suo interno
//const pigreco = 3.14;


//tipo booleano  vero/falso -> true/false ->  zero e uno (0/1)
/*
var lampadinaAccesa = true;  
var lampadinaSpenta = false;
var numero = 4;

console.log(lampadinaAccesa);
console.log(lampadinaSpenta);

//console log con stringa o messaggio informativo e valore della variabile
console.log("Questa è la lampadina spenta : ", lampadinaSpenta);
console.log("Questa è la lampadina accesa : ", lampadinaAccesa);
console.log("Questo è il valore del numero : ", numero);

*/


//----------------------------OPERATORI ARITMETICI---------------------------


// + - * /  anche il resto (di una divisione) %(modulo)

//somma di due numeri
/*
var numeroSomma1 = 10;
var numeroSomma2 = 20;

//instanziare una variabile che verrà stampata in console.log che sarà la somma del valore delle due variabili
var somma = numeroSomma1 + numeroSomma2;

console.log("Questa è la somma dei due numeri : ", somma);

*/

//sottrazione di due numeri
/*
var numeroSottrazione1 = 20;
var numeroSottrazione2 = 10;

//instanziare una variabile che verrà stampata in console.log che sarà la sottrazione del valore delle due variabili
var sottrazione = numeroSottrazione1 - numeroSottrazione2;

console.log("Questa è la sottrazione dei due numeri : ", sottrazione);


//Moltiplicazione di due numeri

var numeroMoltiplicazione1 = 20;
var numeroMoltiplicazione2 = 10;

//instanziare una variabile che verrà stampata in console.log che sarà la moltiplicazione del valore delle due variabili
var moltiplicazione = numeroMoltiplicazione1 * numeroMoltiplicazione2;

console.log("Questa è la moltiplicazione dei due numeri : ", moltiplicazione);



//Moltiplicazione di due numeri  

var numeroDivisione1 = 20;
var numeroDivisione2 = 10;

//instanziare una variabile che verrà stampata in console.log che sarà la divisione del valore delle due variabili
var divisione = numeroDivisione1 / numeroDivisione2;

console.log("Questa è la divisione dei due numeri : ", divisione);


//Modulo - Resto

var numero1 = 9;
var numero2 = 2;

var modulo = numero1 % numero2;

console.log("Ecco il resto della divisione dei due numeri : ", modulo);

*/

//----------------------------COME CHIEDERE DATI ALL UTENTE TRAMITE PROMPT()-----------------

//var (versione es5) -> let (vers es8)

//chiedo qualcosa a schermo


//PROMPT();
//let nomeInserito = prompt("Inserisci un nome :");

//console.log(nomeInserito);


//CONFIRM();
//let qualcosaInserito= confirm("ACCETTI L INFORMATIVA PER LA PRIVACY ?");

//console.log(qualcosaInserito);

/*
let n = 5;
let n2 = 4;

let sommaN = n + n2;

console.log(sommaN);
*/

/*
let n1 = parseInt(prompt("Inserisci il primo numero"));

let n2 = parseInt(prompt("Inserisci il secondo numero"));

let n3 = parseFloat(prompt("Inserisci il primo numero decimale"));

let n4 = parseFloat(prompt("Inserisci il secondo numero decimale"));

let risultato = n1 + n2;
let risultato2 = n3 + n4;

console.log(risultato);
console.log(risultato2);

*/

//---------------------------Mostrare in pagina tramite ALERT()---------------------

//alert("attenzione!");

//chiedo qualcosa all utente gazie alla funct prompt(), tipizzo il intero, e salvo in let n
//let n = parseInt(prompt("Inserisci il numero : "));

//mando a schermo un Alert funct con il valore della variabile n concatenandolo con + 
//alert("Il numero inserito è: " + n);



//---------------------------------------esercizio--------------------------

//chiedo all utente 3 numeri 2 interi e un decimale e faccio la somma e mando il risultato 
//della somma a pagina 


//3 prompt x i 3 num e salvare in variabile
//somma 
//alert della somma
/*

let n1 = parseInt(prompt("inserisci il primo numero : "));
let n2 = parseInt(prompt("inserisci il secondo numero : "));
let n3 = parseFloat(prompt("inserisci il terzo numero : "));

let somma = n1 + n2 + n3;

//mando a schermo
alert("La somma dei numeri è : " + somma);
*/

//--------------------------------OPERATORI DI CONFRONTO------------------


// = UGUALE
// != DIVERSO
// === STRETTAMENTE UGUALE
// > MAGGIORE
// >= MAGGIORE UGUALE
// < MINORE
// <= MINORE UGUALE
// !== STRETTAMENTE DIVERSO



//--------------------------------OPERATORI LOGICI--------------------------------------



// && "AND" logico confronto "entrmabi/e"
// || "OR"  logico confronto "OPPURE"
// !  "NOT" logic confronto "NEGAZIONE / NON ESISTE"



//---------------------------------CONDIZIONI/COSTRUTTI-------------------------------------



//-----------IF ELSE---------------------

// !parola -> non esiste
/*
if(condizione){

    //se è vera entro qui dentro

}else{

    //entro qui dentro
}


if (!bici){

    //vado a piedi
}else {

    //vado in bici
}


*/

/*

let password1 = prompt("Inserisci la prima password");

let password2 = prompt("Inserisci la seconda password");



if (password1 === password2){

    alert("ok sei dentro");

}else {

    alert("stai fuori");

}
*/

//semaforo
/*
let semaforo = prompt("Che colore è il semaforo? Verde o Rosso?");

let semaforoMinuscolo = semaforo.toLowerCase();

if (semaforoMinuscolo === "rosso" ){

    console.log("Devi fermarti!");

}else if (semaforoMinuscolo === "verde"){

    console.log("passa...");

}else {

    console.log("fai quello che credi");

}
*/




//--------------------------------OPERATORI LOGICI--------------------------------------



// && "AND" logico confronto "entrmabi/e"
// || "OR"  logico confronto "OPPURE"
// !  "NOT" logic confronto "NEGAZIONE / NON ESISTE"



//chiedo tramite prompt l età all utente e la converto in numero Intero
let eta = parseInt(prompt("Inserisci la tua età : "));

//voglio consentire l accesso al cinema solo tra i 18 e i 65 anni

if (eta >= 18 && eta <= 65){

    alert("accesso consentito");

}else{

    alert("accesso negato");
}




//chiedo all utente il giorno della settimana e il programma dovrà dirmi se è weekend oppure no.