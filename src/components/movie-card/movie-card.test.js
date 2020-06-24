import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const filmsInfo = [
  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
  }
];

const headerClick = () => {};
const cardHover = () => {};

describe(`ChecksComponentsMovieCard`, () => {
  it(`RenderComponentsMovieCard`, () => {
    const tree = renderer
      .create(filmsInfo.map((film) => <MovieCard key={film} imagePath={film.src} nameFilm={film.name} onHeaderClick={headerClick} cardHover={cardHover}/>))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
