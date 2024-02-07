// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterGenders = (data, filterBy, value) => {
  console.log(data.filter(movie => movie.facts[filterBy] === value));
  
  // return data.filter((movie) => {
  //   const movieGenders = movie.facts[filterBy];
  //   return movieGenders === value;
  //   // console.log(movie.facts[filterBy] === value);
  //   // console.log(value)
  //   console.log(movieGenders);
  // });
  
};

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
