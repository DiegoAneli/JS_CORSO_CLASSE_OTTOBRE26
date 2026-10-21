//Oggetti

let unAuto = {};

let tanteAuto = [
                    {},
                    {},
                    {}
                ];

let auto = {

     //chiave   valore
        ruote : 4,   //tutta la riga si definisce proprietà
        colore : "rosso", 
        alimentazione : "diesel",

}

console.log(auto);


let listaPersone = [

                    {
                        eta: 44,
                        sesso: "M",
                        peso: 85,
                        altezza: 1.87,
                        nome: "Diego",
                        cognome: "Aneli",
                        sport: ["basket", "pallavolo"]
                    },
                    {
                        eta: 68,
                        sesso: "F",
                        peso: 65,
                        altezza: 1.60,
                        nome: "Mamma",
                        cognome: "pippo"
                    },
                    {
                        eta: 68,
                        sesso: "F",
                        peso: 65,
                        altezza: 1.60,
                        nome: "Mamma",
                        cognome: "pippo"
                    }
                    
]

console.log(listaPersone);


let persona = {

        nome : "Mario",
        cognome: "Rossi",
        eta: 45
}

console.log(persona);

//aggiungere / modificare una proprietà di un obj

//aggiungi professione
persona.professione = "Cuoco";
console.log(persona);

//modifica professione
persona.professione ="Developer";
console.log(persona);

//modifica età
persona.eta = 34;
console.log(persona);

//cancellare
delete persona.cognome;
console.log(persona);


//-------------------------Metodi degli obj-----------------------

let chiavi = Object.keys(persona);
console.log("Array con tutte le chiavi della persona" , chiavi);


let valori = Object.values(persona);
console.log("Array con tutti i valori della persona" , valori);

let chiaveValore = Object.entries(persona);
console.log("Array con tutte le chiavi e i valori della persona" , chiaveValore);


