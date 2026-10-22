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

            console.log(data);

        })
}
fetchUsers();