import { renderItems } from './view.js';
import { renderFilteredCharacters } from './dataFunctions.js';
import data from './data/dataset.js';

const container = document.querySelector("#charactersList");
const deleteButton = document.querySelector(".cleanerButton")
const filterSign = document.querySelector("#filter")
const sortBy = document.querySelector("#order")


document.addEventListener("DOMContentLoaded", function () {
  container.appendChild(renderItems(data));
});

deleteButton.addEventListener("click", function () {
  const newData = [...data];
  container.innerHTML = "";
  filterSign.value = "signs";
  container.appendChild(renderItems(newData));
});

filterSign.addEventListener("change", (event) => {
  const selectedSign = event.target.value;
  const resultFiltered = renderFilteredCharacters(selectedSign, data);
  console.log(resultFiltered);
  container.innerHTML = '';
  if (selectedSign == "signs") {
    container.appendChild(renderItems(data))
  } else {
    container.appendChild(renderItems(resultFiltered))
  }

  // container.appendChild(renderItems(renderFilteredCharacters(selectedSign)))
});

sortBy.addEventListener("change", (event) => {
  const selectedOrder = event.target.value;
  container.innerHTML = "";
  container.appendChild(renderItems(data, selectedOrder));
});