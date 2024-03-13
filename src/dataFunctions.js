// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

import { renderItems } from "./view.js";
import data from './data/dataset.js';


export const renderFilteredCharacters = (selectedSign, container) => {
  const characters = data.filter(character => {
      return character.facts.zodiacSign === selectedSign;
  });
  container.innerHTML = "";
  container.appendChild(renderItems(characters));
};




// export const sortOrder = (data, sortOrder) => {
//   const sortedData = [...data];
//   if (sortOrder === "asc") {
//     sortedData.sort((a,b) => a.name.localeCompare(b.name));
//   } else if (sortOrder === "desc") {
//     sortedData.sort((a,b) => b.name.localeCompare(a.name));
//   }
//   container.innerHTML = "";
//   container.appendChild(renderItems(sortedData));
//   return sortedData;
// };