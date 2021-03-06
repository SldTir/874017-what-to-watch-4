import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {imagePath, nameFilm} = props;
  return (
    <img src={imagePath} alt={nameFilm} width="280" height="175" />
  );
};

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  nameFilm: PropTypes.string.isRequired,
};

export default MovieCard;
