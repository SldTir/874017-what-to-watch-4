import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const Titles = [`Fantastic Beasts`];

describe(`ChecksComponentsMovieCard`, () => {
  it(`RenderComponentsMovieCard`, () => {
    const tree = renderer
      .create(<MovieCard
        nameFilm={Titles[0]}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
