//---------------------------------ARRAY-------------------------------------------

//un insieme di dati strutturati con posizione e valore
/*
//questo è un array vuoto
let colori = [];

//posizione   0        1       2       3
let nomi = ["diego", "luca", "mario", "giorgio"];
let numeri = [7, 8, 9, 3, 4, 5, 3, 7, 10];
let arrayMisto = ["diego", 2, 38,"giorgio", 42];

// il metodo .length mi da la lunghezza dell array

//valore delle posizioni è il nome stesso

//stampo tutto l array di nomi
console.log(nomi);

//stampo tutto l array di numeri
console.log(numeri);

//stampo qualcosa dell array misto
console.log(arrayMisto[3]);

//stampare solamente diego
console.log(nomi[0]);
//stampare solemante mario
console.log(nomi[2]);


//-----------------modificare un dato nell array-------

let arrayColori = ["giallo", "verde", "rosso"];

console.log(arrayColori);

arrayColori[0] = "viola";

console.log(arrayColori);

//come aggiungere un elemento alla fine
arrayColori.push(50);

console.log(arrayColori);

//come aggiungere elemento all inizio

arrayColori.unshift("pippo");

console.log(arrayColori);


//come eliminare l ultimo elemento

arrayColori.pop();
console.log("Ho rimosso l ultimo elemento", arrayColori);

//come eliminare il primo elemento

arrayColori.shift();
console.log("Ho rimosso il primo elemento", arrayColori);


//come trovare posizione di un elemento conoscendo l elemento da cercare
let auto = ["bmw", "audi", "subaru", "panigale"];

let posizione = auto.indexOf("subaru");

console.log(posizione);



//come verificare se un elemento è presente nell array
let ricercaAuto = auto.includes("toyota");
//il metodo includes() restituisce un valore booleano(true o false)
console.log(ricercaAuto);


//unire due array
let a = ["uno", "due"];
let b = ["tre", "quattro"];

let arrayUnito = a.concat(b);
let arrayUnitoReverse = b.concat(a);

//console.log(typeof arrayUnito);

console.log(arrayUnito);
console.log(arrayUnitoReverse);

//trasformare un array in stringa

let animali = ["gatto", "cane","procione"];

let frase = animali.join(", ");

console.log(frase);
console.log(animali);


//conversione di un dato da Numero a Stringa

let num = 8; //numero
let num2 = num.toString(); // converto numero che diventa una stringa

//let datoInNumero = Number(num); 
//console.log(typeof datoInNumero);

console.log(typeof num2);
console.log(typeof num);

*/


////////////////////////////////// METODO MAP() 

const num = [2, 5, 7, 8, 10];

//map scorre tutti gli elementi dell array
//restituisce un nuovo array con lo stesso numero di elementi
const numeriRaddoppiati = num.map((num) => {

    return num * 2;

});

//console.log(numeriRaddoppiati);
//console.log(num);
//console.log(Array.isArray(numeriRaddoppiati));

// es. : array di nomi -> in maiuscolo

const studenti = ["DIEGO", "SARA", "ZIGGY", "FILIPPO"];

const nomiMaiuscolo = studenti.map((nome) => {

    return nome.toLowerCase();
})


//console.log(nomiMaiuscolo);

const nomi = ["Luca", "Diego", "Max", "Sara",];

const nomiInMaiuscolo = nomi.map(

    nome => nome.toUpperCase()
);

//console.log(nomiInMaiuscolo);






/////////////////////////////////////// METODO FILTER()

const numeri = [34, 56, 7, 100, 37, 3];

//Controlla ogni elemento dell array se restituisce true, 
//l elemento viene mantenuto se restituisce false viene escluso

const maggioreDiCinquanta = numeri.filter((n) => {

    return n > 50;
});

//console.log(maggioreDiCinquanta);
//console.log(Array.isArray(maggioreDiCinquanta));


//es.: applicate i metodo filter su un array per restituire 
//il numero di caratteri di una stringa >= 5;

const parole = ["diego", "paperino", "qui", "quo", "qua", "pluto", "paperone"];

const paroleLunghe = parole.filter((p) => {

    return p.length >= 5;

});

//console.log(paroleLunghe);






//////////////////////////////////////////// METODO SOME()

//Verifica se ALMENO UN ELEMENTO soddisfa la condizione
//restituisce un booleano -> true false

const eta = [87, 5, 7, 17, 12, 69, 100, 34];

const minorenni = eta.some((anni) => {

    return anni < 18;

})

//console.log(minorenni);





/////////////////////////////////////////////METODO REDUCE()


const carrello = [

        {
            nome : "Pane", 
            prezzo: 3.504324, 
            quantita: 3
        },
        {nome : "Latte", prezzo: 1.50439, quantita: 5},
        {nome : "Pasta", prezzo: 2.20423, quantita: 8}
]


//reduce() attraversa tutti gli elementi
//acc -> accumulatore parte da 0
//args -> rappresenta l oggetto corrente

const totaleCarello = carrello.reduce((accumulatore, i) => {

    //calcolo del subtotale del singolo prodotto
    const subtotale = i.prezzo * i.quantita;

    //aggiungiamo il prodotto all accumulatore
    return accumulatore + subtotale;


}, 0); //parte da zero 

//console.log(totaleCarello.toFixed(3));
//console.log(typeof totaleCarello.toFixed(2));





//////////////////////////////Esercizi combinati


//abbiamo un array di prodotti informatici voglio selezionare i prodotti con prezzo inferiore a 100 euro
//successivamente voglio estrarne il nome
//1 console.log -> prodottiEconomici



