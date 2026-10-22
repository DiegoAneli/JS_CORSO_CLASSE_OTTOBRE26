//ENDPOINT (FONTE DI DATI) 

const endpoint = 'https://api.sampleapis.com/coffee/hot';


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


    //SVUOTO INIZIALMENTE LA LISTA, CHE VERRà POPOLATA CON IL FOREACH
    userList.innerHTML = "";



    data.forEach(user =>{

        
        // Creo la colonna Bootstrap
        const col = document.createElement('div');
        col.className = 'col-6 col-md-6 col-lg-4';

        // Creo la card 
        const card = document.createElement('div');
        card.className = 'card shadow-sm';

        // Creo il body della card
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        // Creo il titolo della card
        const userName = document.createElement('h3');
        userName.className = 'card-title';
        userName.textContent = user.title;

        // Creo il paragrafo con l email
        const userEmail = document.createElement('p');
        userEmail.className = 'card-text';
        userEmail.textContent = user.description;

        // Creo il paragrafo con l id
        const userId = document.createElement('div');
        userId.className = 'card h-100';
        
        const img = document.createElement('img');

        img.src = user.image;

        img.className ='card-img-top';

        img.style.width = '200px';
        img.style.height = '200px';
        img.style.objectFit = 'cover';




        //Inserisco i dati nel body della card
        cardBody.appendChild(userName);
        cardBody.appendChild(userEmail);
        cardBody.appendChild(userId);

        //Inserisco cardbody dentro alla card
        card.appendChild(cardBody);
        card.appendChild(img);

        //Inserisco card dentro a col
        col.appendChild(card);

        //inserisco col dentro a userlist
        userList.appendChild(col);



    })
}




//richiamo funzione per essere esguita
fetchUsers();