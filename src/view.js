export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const list = document.createElement("ul");
  data.forEach(film => {
    const card = document.createElement("li");
    card.innerHTML+=`
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
    <ul itemscope itemtype="nausicaa-del-valle-del-viento">
    <li itemtype="name">Nombre: ${film.name}</li>
    <li itemtype"shortDescription">Sinopsis: ${film.shortDescription}</li>
    <li itemtype="description">Descripción: ${film.description}</li>
    <li itemtype="duration">Duración: ${film.facts["duration"]}</li>
    <li itemtype="releaseYear">Estreno: ${film.facts["releaseYear"]}</li>
    <li itemtype"genres">Género: ${film.facts["genders"]}</li>
    <li itemtype="boxOfficeRevenue">Recaudación: ${film.facts["boxOfficeRevenue"]}</li>
    </ul>
    `
    list.appendChild(card);
  });
  return list;
};