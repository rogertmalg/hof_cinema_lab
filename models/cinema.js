const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.getTitles = function (films) {
  const result = films.map(film => film.title);
  return result;
}

Cinema.prototype.filmTitle = function (films, title) {
  const result = films.find(film => film.title == title);
  return result;
}

Cinema.prototype.filmsByGenre = function (films, genre) {
  const result = films.filter(film => film.genre == genre);
  return result;
}

Cinema.prototype.areFilmsFromYear = function (films, year) {
  return films.some(film => film.year == year);
}

Cinema.prototype.arentFilmsFromYear = function (films, year) {
  return films.some(film => film.year !== year);
}

Cinema.prototype.aretFilmslongerThan = function (films, length) {
  return films.every(film => film.length > length);
}
Cinema.prototype.totalRunningTime = function (films) {
  let filmLengths = films.map(film => film.length);
  return filmLengths.reduce((acc, current) => acc + current);
}

module.exports = Cinema;