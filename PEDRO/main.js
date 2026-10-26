//elenco degli id da recuperare

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const immagine = document.getElementById('immagine');
const musica = document.getElementById('musica');
const spinner = document.getElementById('spinner');


//start dello spinner + musica

startBtn.addEventListener('click', () => {

    //mostrare lo spinner
    spinner.classList.remove('d-none');

    //disabilitare il bottone di start dopo che è stato premuto
    startBtn.disabled = true;

    setTimeout( () => {


        //avviare la rotazione dell immagine
        immagine.classList.add('rotation');


        //avviare la musica
        musica.play();

        //tolgo lo spinner
        spinner.classList.add('d-none');

        //cambio testo da start a playin
        startBtn.innerHTML = '<span id="spinner" role="status" class="spinner-border spinner-border-sm text-dark d-none"></span>Playing'
                
        stopBtn.disabled = false;
               


    }, 2000);

})



stopBtn.addEventListener('click', () => {


    //mostrare lo spinner
    spinner.classList.add('d-none');

    //disabilitare il bottone di start dopo che è stato premuto
    stopBtn.disabled = true;
    startBtn.disabled = false;

    //avviare la rotazione dell immagine
    immagine.classList.remove('rotation');


    //stoppare la musica
    musica.pause();
    musica.currentTime = 0;
    //abilitare il btn di stop

    //cambiare il testo da playing a start
    startBtn.innerHTML = '<span id="spinner" role="status" class="spinner-border spinner-border-sm text-dark d-none"></span>Start'



})
