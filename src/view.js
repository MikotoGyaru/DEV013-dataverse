export const renderItems = (data) => {
  const list = document.createElement("ul");
  data.forEach(character => {
    const card = document.createElement("li");
    card.innerHTML = `
      <div class="visual">
        <h2>${character.name}</h2>
        <img src="${character.imageUrl}" alt="Personaje de Sanrio ${character.name}">
        <ul>
          <li itemprop="shortDescription">${character.shortDescription}</li>
          <li>Cumpleaños: <span itemprop="birthday">${character.facts.birthday}</span></li>
          <li>Signo del Zodiaco: <span itemprop="zodiacSign">${character.facts.zodiacSign}</span></li>
        </ul>
        <button class="cardsBtn">Más Información</button>
      </div>
      <section class="windowModal hiden">
      <div class="backgroundContainer">
        <div class="noVisual">
        <h1>${character.name}</h1>
          <img src="${character.imageUrl}" alt="Personaje de Sanrio ${character.name}">
          <ul>
            <li itemprop="description">${character.description}</li><br>
            <li>Personalidad: <span itemprop="personality">${character.facts.personality}</span></li><br>
            <li>Debut: <span itemprop="releaseYear">${character.facts.releaseYear}</span></li>
          </ul>
        </div>
        <button class="closeWindow">Cerrar</button>
        </div>
      </section>
      <div class="modalFondo hiden"></div>
    `;
    list.appendChild(card);
    const popUpWindow = card.querySelector(".windowModal");
    const buttonWindow = card.querySelector(".cardsBtn");
    const fondoModal = card.querySelector(".modalFondo");
    const closeWindow = card.querySelector(".closeWindow")

    buttonWindow.addEventListener("click", function () {
      popUpWindow.classList.remove("hiden");
      fondoModal.classList.remove("hiden");
    });
    closeWindow.addEventListener("click", function () {
      popUpWindow.classList.add("hiden");
      fondoModal.classList.add("hiden");
    });
    fondoModal.addEventListener("click", () => {
      popUpWindow.classList.add("hiden");
      fondoModal.classList.add("hiden");
    });
  });
  return list;
};
