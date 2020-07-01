import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {imagePath, nameFilm} = props;
  return (
    <div className="small-movie-card__image">
      <img src={imagePath} alt={nameFilm} width="280" height="175" />
    </div>
  );
};

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  nameFilm: PropTypes.string.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  handleCardHover: PropTypes.func.isRequired,
  handleCardMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;