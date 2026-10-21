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


//------------------clonare un obj-------------------------------

const originale = {a:1,b:2,c:3};

const clone = {};

for ( let i in originale ){

    clone[i] = originale[i]
}

console.log("Ecco il clone : ", clone);
console.log("Ecco originale : ", originale);



//-------------------------------funzioni degli obj----------------------


const cane = {

    nome: "Tito",
    razza: "bastardino",
    eta: 7,


    abbaia: function(){

        console.log("Bau bau!");

    },

    mangia: function(){

        console.log("gnam gnam!");

    }

}


cane.mangia();
cane.abbaia();
console.log(cane);



//-------------------------------------FOR EACH-------------------------------------

let listaP = [

                    {
                        eta: 44,
                        sesso: "M",
                        peso: 85,
                        voto: 5,
                        altezza: 1.87,
                        nome: "Diego",
                        cognome: "Aneli",
                        sport: ["basket", "pallavolo"]
                    },
                    {
                        eta: 68,
                        sesso: "M",
                        peso: 65,
                        voto: 5,
                        altezza: 1.60,
                        nome: "Papà",
                        cognome: "pippo"
                    },
                    {
                        eta: 68,
                        sesso: "F",
                        peso: 65,
                        voto: 8,
                        altezza: 1.60,
                        nome: "Mamma",
                        cognome: "paperino"
                    }
                    
]

listaP.forEach(function(persona){

    console.log("Persona :", persona.nome, "Peso : ", persona.peso);

});



//media voti

let somma = 0;

listaP.forEach(function(persona){

    somma += persona.voto;

});

console.log(somma);

let media = somma / listaP.length;

console.log(media);



let arraybidimensione = [[],[],[],[]] //matrice