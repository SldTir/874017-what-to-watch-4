import React, { PureComponent } from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: -1,
      name: `Bohemian Rhapsody`,
    };

    this.handleCardHover = this.handleCardHover.bind(this);

    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
  }

  handleCardHover(name, it) {
    this.setState({
      activePlayer: it,
      name,
    });
  }

  handleCardMouseLeave() {
    this.setState({activePlayer: -1});
  }

  render() {
    const {filmsInfo, onHeaderClick} = this.props;
    const {activePlayer} = this.state;
    return (
      <div className="catalog__movies-list" >
        {
          filmsInfo.map((film, it, filmsArray) =>
            <MovieCard
              activePlayer={activePlayer}
              cardNumber={it}
              key={film + it}
              imagePath={film.src}
              nameFilm={film.name}
              preview={film.preview}
              onHeaderClick={onHeaderClick}
              handleCardHover={this.handleCardHover}
              handleCardMouseLeave={this.handleCardMouseLeave}
              filmsArray={filmsArray}
              display={this.state.display}
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
