// import React from 'react';
import rickapi from 'https://rickandmortyapi.com/graphql/';

console.log('entro');

var charac = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    }
}

function saludar(character) {
    var name = character.name;
    let gender = character.gender;
    console.log('Hi, this is: ' + `${name}`);
    console.log('my gender is: ' + `${gender}`);
    //    console.log(estatura);
}

saludar(charac);