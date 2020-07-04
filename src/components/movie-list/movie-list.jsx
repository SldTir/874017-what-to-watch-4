import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: `-1`,
      name: `Bohemian Rhapsody`,
    };

    this.timerId = null;

    this.handleCardHover = this.handleCardHover.bind(this);

    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
  }

  handleCardHover(name, it) {
    this.timerId = setTimeout(() => {
      this.setState({
        activePlayer: it,
        name,
      });
    }, 1000);
  }

  handleCardMouseLeave() {
    clearTimeout(this.timerId);
    this.setState({activePlayer: `-1`});
  }

  render() {
    const {filmsInfo, onHeaderClick} = this.props;
    const {activePlayer} = this.state;
    return (
      <div className="catalog__movies-list" >
        {
          filmsInfo.map((film) =>
            <MovieCard
              play={false}
              activePlayer={activePlayer}
              cardNumber={film.id}
              key={film.id}
              imagePath={film.src}
              nameFilm={film.name}
              preview={film.preview}
              onHeaderClick={onHeaderClick}
              handleCardHover={this.handleCardHover}
              handleCardMouseLeave={this.handleCardMouseLeave}
            />
          )}
      </div>
    );
  }
}

MovieList.propTypes = {
  filmsInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default MovieList;
