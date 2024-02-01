// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//export const filterGenres = () => {
//};

export const sortFilms = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    const movieA = a[sortBy].toLowerCase();
    const movieB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return movieA.localeCompare(movieB);
    } else if (sortOrder === "desc") {
      return movieB.localeCompare(movieA);
    }
  });
  return data;
};
