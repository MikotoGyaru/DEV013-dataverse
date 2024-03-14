// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const renderFilteredCharacters = (selectedSign, data) => {
  const characters = data.filter(character => {
    return character.facts.zodiacSign === selectedSign;
  });
  // container.innerHTML = "";
  // container.appendChild(renderItems(characters));
  return characters;

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