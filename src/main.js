import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const movieCards = document.querySelector("#root");
movieCards.appendChild(renderItems(data));

const cleanerButton = document.querySelector(".cleanerButton");
cleanerButton.addEventListener("click", function() { 
    
})

console.log(example, renderItems(data), data);
renderItems(data)