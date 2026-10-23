//Array di immagini


const immagini = [

    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",

];

function cambiaImmagine(){

    //genero un indice casuale tra 0 e 9
    const random = Math.floor(Math.random() * immagini.length);
    //console.log(random);
    //prendo l immagine casuale dell array
    const immagineRandom = immagini[random];
    //console.log(immagineRandom);
    document.getElementById("immagine").src = immagineRandom;

}; 


