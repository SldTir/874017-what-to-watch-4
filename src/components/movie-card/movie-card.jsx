import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answer: ``,
    };
  }

  render() {
    const {imagePath, nameFilm, onHeaderClick, cardHover} = this.props;

    return (
      <article onMouseEnter={(evt) => {
        evt.preventDefault();
        this.setState({
          answer: nameFilm,
        });
        cardHover(this.state.answer);
      }}
      className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={imagePath} alt={nameFilm} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title" onClick={onHeaderClick}>
          <a className="small-movie-card__link" href="movie-page.html">{nameFilm}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  nameFilm: PropTypes.string.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  cardHover: PropTypes.func.isRequired,
};

export default MovieCard;
