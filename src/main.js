import { renderItems } from './view.js';
import { renderFilteredCharacters } from './dataFunctions.js';
import data from './data/dataset.js';

const container = document.querySelector("#charactersList");
const deleteButton = document.querySelector("#cleanerButton")
const filterSign = document.querySelector("#filter")
const sortBy = document.querySelector("#order")


document.addEventListener("DOMContentLoaded", function() {
container.appendChild(renderItems(data));
});

deleteButton.addEventListener("click", reloadPage);
document.addEventListener("DOMContentLoaded", function() {
    container.appendChild(renderItems(data));
});

filterSign.addEventListener("change", (event) => {
    const selectedSign = event.target.value;
    renderFilteredCharacters(selectedSign, container);
  });

sortBy.addEventListener("change", (event) => {
  const selectedOrder = event.target.value;
  container.innerHTML = "";
  container.appendChild(renderItems(data, selectedOrder));
});