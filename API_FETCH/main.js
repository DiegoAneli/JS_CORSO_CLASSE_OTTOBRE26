//ENDPOINT (FONTE DI DATI) 

const endpoint = 'https://jsonplaceholder.typicode.com/users';


function fetchUsers(){

    fetch(endpoint)

        .then(response => {

            /*
            if(!response.ok){

                throw new Error(`Errore HTTP : ${response.status}`);
            }
            */

            return response.json();
        })

        .then(data => {

            renderUsers(data);

        })
}


function renderUsers(data){

    data.forEach(user =>{

        //PER OGNI UTENTE DOBBIAMO CREARE UN ELEMENTO NELL HTML
        //quindi voglio aggiungere un tag <li> dentro alla <ul>

        const divId = document.createElement('div');
        const divName = document.createElement('div');

        //imposto il contenuto dell li con nome ed email

        //template literals
        divId.textContent = `${user.id}`;
        divName.textContent = `${user.name}`;

        //appendere il <li> alla lista HTML (<ul> con id="user-list")
        userList.appendChild(divId);
        userName.appendChild(divName);

    })
}




//richiamo funzione per essere esguita
fetchUsers();