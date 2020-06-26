import React, {PureComponent} from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";


class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: `Bohemian Rhapsody`,
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(name) {
    this.setState = {
      name,
    };
  }

  render() {
    const {filmsInfo, onHeaderClick} = this.props;

    return (
      <div className="catalog__movies-list" >
        {
          filmsInfo.map((film, it, filmsArray) =>
            <MovieCard
              key={film + it}
              imagePath={film.src}
              nameFilm={film.name}
              onHeaderClick={onHeaderClick}
              handleCardHover={this.handleCardHover}
              filmsArray={filmsArray}
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
