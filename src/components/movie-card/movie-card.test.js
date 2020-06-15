import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const Titles = [`Fantastic Beasts`];
const headerClick = () => {};

describe(`ChecksComponentsMovieCard`, () => {
  it(`RenderComponentsMovieCard`, () => {
    const tree = renderer
      .create(<MovieCard
        nameFilm={Titles[0]}
        onHeaderClick={headerClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
