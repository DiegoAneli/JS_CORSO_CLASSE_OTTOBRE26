// commenti inline

/* 
commenti multi linea
qualcosa di js
*/

/** */

//-------------------TIPI DI VARIABILE-------------

//dichiarazione di una variabile

var nome = "Pippo"; // Stringa cioè "parola/insiemi di caratteri"

//per stampare in console la variabile
console.log(nome);


//variabile di tipo numero
var nome = 5;
console.log(nome);

//variabile di tipo double -> numeri con la virgola decimali e anche negativi
var numeroNegativo = -10.99;
console.log(numeroNegativo);

//constanti -> a differenza delle variabili non posso cambiare il valore al suo interno
const pigreco = 3.14;


//tipo booleano  vero/falso -> true/false ->  zero e uno (0/1)

var lampadinaAccesa = true;  
var lampadinaSpenta = false;
var numero = 4;

console.log(lampadinaAccesa);
console.log(lampadinaSpenta);

//console log con stringa o messaggio informativo e valore della variabile
console.log("Questa è la lampadina spenta : ", lampadinaSpenta);
console.log("Questa è la lampadina accesa : ", lampadinaAccesa);
console.log("Questo è il valore del numero : ", numero);




//----------------------------OPERATORI ARITMETICI---------------------------


// + - * /  anche il resto (di una divisione) %(modulo)

//somma di due numeri

var numeroSomma1 = 10;
var numeroSomma2 = 20;

//instanziare una variabile che verrà stampata in console.log che sarà la somma del valore delle due variabili
var somma = numeroSomma1 + numeroSomma2;

console.log("Questa è la somma dei due numeri : ", somma);



//sottrazione di due numeri

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