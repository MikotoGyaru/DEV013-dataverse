export const renderItems = (data) => {
  const list = document.createElement("ul");
  data.forEach((film) => {
    const card = document.createElement("li");
    card.innerHTML += `
    <div class="card"> 
    <div class="visual"> 
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
    <ul itemscope itemtype="nausicaa-del-valle-del-viento">
    <li itemtype="name">${film.name}</li>
    <li itemtype="genders">Género: ${film.facts["genders"]}</li>
    </div>
    <div class="noVisual"> 
    <li itemtype="releaseYear">Estreno: ${film.facts["releaseYear"]}</li>
    <li itemtype="duration">Duración: ${film.facts["duration"]}</li>
    <li itemtype="boxOfficeRevenue">Recaudación: ${film.facts["boxOfficeRevenue"]}</li>
    <li itemtype"shortDescription">Sinopsis: ${film.shortDescription}</li>
    <li itemtype="description">Descripción: ${film.description}</li>
    </div>
    </ul>
    </div>
    `;
    list.appendChild(card);
  });
  return list;
};
