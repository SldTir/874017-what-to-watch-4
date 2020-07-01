import React, { PureComponent } from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from "prop-types";

let timeoutID;

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: `Bohemian Rhapsody`,
      display: `img`,
    };

    this.handleCardHover = this.handleCardHover.bind(this);

    this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
  }

  handleCardHover(name, display) {
    this.setState({
      name,
      display,
    });
  }

  handleCardMouseLeave() {
    this.setState({display: `video`});
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
