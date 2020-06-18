import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {imagePath, nameFilm, onHeaderClick} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={imagePath} alt={nameFilm} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onHeaderClick}>
        <a className="small-movie-card__link" href="movie-page.html">{nameFilm}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  imagePath: PropTypes.string.isReguired,
  nameFilm: PropTypes.string.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default MovieCard;
