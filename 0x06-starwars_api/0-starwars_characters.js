#!/usr/bin/node

const axios = require("axios");

if (process.argv.length !== 3) {
  console.log("Usage: ./0-starwars_characters.js <film_id>");
  process.exit(1);
}

const movieID = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieID}/`;

axios
  .get(url)
  .then((response) => {
    const film = response.data;
    const characters = film.characters;
    exactOrder(characters, 0);
  })
  .catch((error) => {
    console.error("Failed to get movie:", error.message);
  });

const exactOrder = (characters, index) => {
  if (index === characters.length) return;
  axios
    .get(characters[index])
    .then((response) => {
      const character = response.data;
      console.log(character.name);
      exactOrder(characters, index + 1);
    })
    .catch((error) => {
      console.error("Failed to get character:", error.message);
    });
};
