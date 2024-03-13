import { renderFilteredCharacters } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('renderFilteredCharacters', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  it("filtra los datos en base al signo seleccionado", () => {
    const selectedSign = 'Escorpio';
    
    renderFilteredCharacters(selectedSign, container, data);

    const renderedItems = container.querySelectorAll('.character');
    
    expect(renderedItems.length).toBe(1);
    
    expect(renderedItems[0].textContent).toContain('Hello Kitty');
  });
});

describe("renderFilteredCHaracters", () => {
  const filter1 = [data[1], data[4]];
  it("retorna el filtro para capricornio", () => {
    const expectCapricornio = filterGenders(data, "zodiacSign", "Capricornio");
    expect(expectCapricornio).toEqual(filter1);
  });
  
  const filter2 = [data[0]];
  it("retorna el filtro para escorpio", () => {
    const expectEscorpio = filterGenders(data, "zodiacSign", "Escorpio");
    expect(expectEscorpio).toEqual(filter2);
  });
});