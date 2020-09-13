//QUERYS al DOM
const cards = document.getElementById('cards');
//URL de API
const apiUrl = 'https://rickandmortyapi.com/api/character';

fetch(apiUrl)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(respJson) {
        //para traer sin hardcode la info
        const personajes = respJson.results
            //    for (let character of personajes) {
            //    console.log(respJson.results[0].name);
        imprimirPersonajes(personajes);
    })
    .catch(function(error) {
        console.log(error);
    })

function imprimirPersonajes(personajes) {
    for (let character of personajes) {
        cards.innerHTML += `
        <p>${character.name}</p>
        <img src="${character.image}">
      `
        console.log(character.name)
    }
}