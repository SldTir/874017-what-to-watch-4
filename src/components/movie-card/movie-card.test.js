import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';
import {getId} from "../../mocks/films.js";

const filmsInfo = [
  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: getId(),
    genre: `All genres`,
  }
];

const headerClick = () => {};
const cardHover = () => {};
const cardLeave = () => {};

describe(`ChecksComponentsMovieCard`, () => {
  it(`RenderComponentsMovieCard`, () => {
    const tree = renderer
      .create(filmsInfo.map((film) =>
        <MovieCard
          activePlayer={`-1`}
          cardNumber={film.id}
          key={film.id}
          imagePath={film.src}
          preview={film.preview}
          nameFilm={film.name}
          onHeaderClick={headerClick}
          handleCardHover={cardHover}
          handleCardMouseLeave={cardLeave}/>), {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
