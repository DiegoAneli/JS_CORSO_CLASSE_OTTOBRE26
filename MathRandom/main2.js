//------------------LIBRERIA MATH-----------------------

//Math.random() -> numero randomico casuale

//Math.floor() -> arrontonda per difetto

//Math.ceil()  -> arrotonda per eccesso


let numero = Math.floor(Math.random() * 6) + 1 ; //esempio dado

let numero2 = Math.floor(Math.random() * 10); // da 0 a 10

let numero3 = Math.floor(Math.random() * 10) + 1 ; // da 1 a 10

let numero4 = Math.random() * 1; // numeri randomici compresi tra 0 e 1 ( es.: 0.345) 

console.log(numero);
console.log(numero2);
console.log(numero3);
console.log(numero4);


/*
//esercizio indovina numero
//chiedo all utente un numero tramite prompt (tipizzate!)
//(dovrà cercare di indovinare il numero generato dal sistema(tramite math random))
//se indovina messaggio : "hai indovinato" if === 
//altrimenti -> messaggio "riprova" (else)

//il sistema genera un numero casuale    
let numeroCasuale = Math.floor(Math.random() * 5) + 1 ;

console.log(numeroCasuale);

//chiedo all utente un numero
let input = prompt("Inserisci un numero da indovinare tra 1 e 5");

//trasformo in Number
let numeroUtente = Number(input);
console.log(numeroUtente);

//confronto dei valori
if(numeroCasuale === numeroUtente){

    console.log("indovinato");
}else{

    console.log("Riprova");
}

*/

//esercizio: del lancio della moneta (dire se esce testa o croce)

let moneta = Math.floor(Math.random() * 2);

console.log(moneta);

if(moneta === 0 ){

    console.log("testa!")
}else{

    console.log("croce");
}