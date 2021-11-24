const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.getTitles = function (films) {
  const result = films.map(film => film.title);
  return result;
}

module.exports = Cinema;