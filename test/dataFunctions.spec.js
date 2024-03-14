import { renderFilteredCharacters } from '../src/dataFunctions.js';

describe("", () => {
  // 1. funcion existe
  // 2. comportamiento deseado de la funcion
  // 3. estresar a la funcion
  it("renderFilteredCharacters es una funcion (1)", () => {
    // .toBe matcher jest (.not, tobefalsy)
    expect(typeof renderFilteredCharacters).toBe('function')
    expect(typeof renderFilteredCharacters).not.toBe('string')
  })
  it("renderFilteredCharacters retorna correctamente cuando filtramos Escorpio (2)", () => {
    const result = [{
      "id": "hello-kitty",
      "name": "Hello Kitty",
      "shortDescription": "Ícono de la cultura kawaii.",
      "description": "Hello Kitty es una gatita blanca con un lazo rojo en su oreja izquierda. Es amigable, curiosa y optimista.",
      "imageUrl": "https://raw.githubusercontent.com/MikotoGyaru/DEV013-dataverse/cata/src/Imagenes/hello-kitty.png",
      "facts": {
        "birthday": "1 de noviembre",
        "zodiacSign": "Escorpio",
        "personality": "Amigable, curiosa y optimista",
        "releaseYear": 1974
      }
    }, {
      "id": "charmmy-kitty",
      "name": "Charmmy Kitty",
      "shortDescription": "Gatita blanca con un lazo rosa.",
      "description": "Charmmy Kitty es una gatita blanca con un lazo rosa en su cuello. Es elegante, dulce y le encanta la moda.",
      "imageUrl": "https://raw.githubusercontent.com/MikotoGyaru/DEV013-dataverse/cata/src/Imagenes/charmmy-kitty.png",
      "facts": {
        "birthday": "6 de noviembre",
        "zodiacSign": "Escorpio",
        "personality": "Elegante, dulce y amante de la moda",
        "releaseYear": 2004
      }
    }
    ]
    expect(renderFilteredCharacters('Escorpio')).toStrictEqual(result)
    expect(renderFilteredCharacters('Escorpio')).not.toHaveLength(5);
  })
  it("renderFilteredCharacters retorna [] cuando no recibe signo zodiacal (3)", () =>{
    expect(renderFilteredCharacters(5)).toEqual([])
    expect(renderFilteredCharacters(5)).not.toHaveLength(1)
  })
})