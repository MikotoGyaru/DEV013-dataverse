import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

document.addEventListener("DOMContentLoaded", function () {
    const movieCards = document.querySelector("#root");
    movieCards.appendChild(renderItems(data));
  
    const cleanerButton = document.querySelector(".cleanerButton");
    cleanerButton.addEventListener("click", function() {
   
      const filteredAndSortedData = dataFunction.sortBy(data, 'name', 'asc');
      movieCards.innerHTML = '';
      movieCards.appendChild(renderItems(filteredAndSortedData));
    });
  
    const filter = document.getElementById("filter");
    const order = document.getElementById("order");

  });