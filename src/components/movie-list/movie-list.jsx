import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";

const cardHover = () => { };

const MovieList = (props) => {
  const {filmsInfo, onHeaderClick} = props;
  return (
    <div className="catalog__movies-list">
      {filmsInfo.map((film, it) =>
        <MovieCard
          key={film + it}
          imagePath={film.src}
          nameFilm={film.name}
          onHeaderClick={onHeaderClick}
          cardHover={cardHover} />)}
    </div>
  );
};

MovieList.propTypes = {
  filmsInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default MovieList;
