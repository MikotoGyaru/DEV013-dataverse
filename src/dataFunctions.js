// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//export const filterGenres = () => {
//};

export const sortFilms = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    const movieA = a[sortBy].toLowerCase();
    const movieB = b[sortBy].toLowerCase();
    const prueba = movieA.localeCompare(movieB);
    const prueba2 = movieB.localeCompare(movieA);

    if (sortOrder === "asc") {
      console.log(prueba)
      return prueba;
    } else if (sortOrder === "desc") {
      return prueba2;
    }
  });
  return data;
};
