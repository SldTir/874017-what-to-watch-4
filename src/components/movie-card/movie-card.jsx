import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import CardImg from "../card-img/card-img.jsx";

const MovieCard = (props) => {
  const {activePlayer, cardNumber, imagePath, nameFilm, preview, onHeaderClick, handleCardHover, handleCardMouseLeave} = props;
  return (
    <article onMouseEnter={(evt) => {
      evt.preventDefault();
      handleCardHover(nameFilm, cardNumber);
    }}

    onMouseLeave={(evt) => {
      evt.preventDefault();
      handleCardMouseLeave();
    }}
    className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {activePlayer === cardNumber
          ? <VideoPlayer
            preview={preview}
            imagePath={imagePath}
            play={false}
          />
          : <CardImg
            imagePath={imagePath}
            nameFilm={nameFilm}
          />}
      </div>
      <h3 className="small-movie-card__title" onClick={onHeaderClick}>
        <a className="small-movie-card__link" href="movie-page.html">{nameFilm}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  activePlayer: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  nameFilm: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  handleCardHover: PropTypes.func.isRequired,
  handleCardMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
