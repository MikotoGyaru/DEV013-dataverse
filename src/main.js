//import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const movieCards = document.querySelector("#root");
const cleanerButton = document.querySelector(".cleanerButton");
const movieSearch = document.querySelector(".movie-search");
movieCards.appendChild(renderItems(data));

movieSearch.addEventListener("input", function () {
  const results = [];
  const textSearch = movieSearch.value.toLowerCase();
  const search = data.filter((elemento) => {
    return elemento.name.toLowerCase().includes(textSearch)
  });
  
  if (search) {
    movieCards.innerHTML = "";
    results.push(...search);
    movieCards.appendChild(renderItems(results))
  }
  else {
    console.log("no funciono");
  }
});

cleanerButton.addEventListener("click", function () {});

//console.log(example, renderItems(data), data);
//renderItems(data);
