import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import CardImg from "../card-img/card-img.jsx";

const MovieCard = (props) => {
  const {imagePath, nameFilm, onHeaderClick, handleCardHover, handleCardMouseLeave, display} = props;
  return (
    <article onMouseEnter={(evt) => {
      evt.preventDefault();
      if (display === `img`) {
        handleCardHover(nameFilm, `video`);
      } else {
        handleCardHover(nameFilm, `img`);
      }
    }}

    onMouseLeave={(evt) => {
      evt.preventDefault();
      handleCardMouseLeave();
    }}
    className="small-movie-card catalog__movies-card">
      {display === `img` && <CardImg imagePath={imagePath} nameFilm={nameFilm}/> || display === `video` && <VideoPlayer />}
      <h3 className="small-movie-card__title" onClick={onHeaderClick}>
        <a className="small-movie-card__link" href="movie-page.html">{nameFilm}</a>
      </h3>
    </article>
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
