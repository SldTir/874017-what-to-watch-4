import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';

const filmsInfo = [
  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
  }, {
    src: `img/dardjeeling-limited.jpg`,
    name: `Dardjeeling Limited`,
  }, {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`,
  }, {
    src: `img/johnny-english.jpg`,
    name: `Johnny English`,
  }, {
    src: `img/macbeth.jpg`,
    name: `Macbeth`,
  }, {
    src: `img/midnight-special.jpg`,
    name: `Midnight Special`,
  }, {
    src: `img/mindhunter.jpg`,
    name: `Mindhunter`,
  }, {
    src: `img/moonrise-kingdom.jpg`,
    name: `Moonrise Kingdom`,
  }
];

const onHeaderClick = () => {};

describe(`ChecksTheCreationOfAListOfMovies`, () => {
  it(`CreatesAListOfMovies`, () => {
    const tree = renderer
      .create(<MovieList
        filmsInfo={filmsInfo}
        onHeaderClick={onHeaderClick}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
