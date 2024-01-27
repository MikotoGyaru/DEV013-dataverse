import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const movieCards = document.querySelector("#root");
movieCards.appendChild(renderItems(data));


console.log(example, renderItems(data), data);
renderItems(data)