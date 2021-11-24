const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.getTitles = function () {
  const result = this.films.map(film => film.title);
  return result;
}

Cinema.prototype.filmTitle = function (title) {
  const result = this.films.find(film => film.title == title);
  return result;
}

Cinema.prototype.filmsByGenre = function (genre) {
  const result = this.films.filter(film => film.genre == genre);
  return result;
}

Cinema.prototype.areFilmsFromYear = function (year) {
  return this.films.some(film => film.year == year);
}

Cinema.prototype.arentFilmsFromYear = function (year) {
  return this.films.some(film => film.year !== year);
}

Cinema.prototype.aretFilmslongerThan = function (length) {
  return this.films.every(film => film.length > length);
}
Cinema.prototype.totalRunningTime = function () {
  let filmLengths = this.films.map(film => film.length);
  return filmLengths.reduce((acc, current) => acc + current);
}

Cinema.prototype.filmsByProperty = function (property, value) {
  
  const result = this.films.filter(film => film[property] == value);
  return result;
}

module.exports = Cinema;