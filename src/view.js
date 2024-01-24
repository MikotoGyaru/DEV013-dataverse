export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const list = document.createElement("ul");
  data.forEach(film => {
    const card = document.createElement("li");
    card.innerHTML+=`
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
    <dt>Nombre: </dt><dd itemprop="name">${film.name}</dd>
    `
    list.appendChild(card);
  });
  return list;
};