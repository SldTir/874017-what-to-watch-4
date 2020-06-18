import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";

const MovieList = (props) => {
  const {filmsInfo, onHeaderClick} = props;
  return (
    <div className="catalog__movies-list">
      {filmsInfo.map((film) => <MovieCard key={film} imagePath={film.src} nameFilm={film.name} onHeaderClick={onHeaderClick} />)}
    </div>
  );
};

MovieList.propTypes = {
  filmsInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default MovieList;
