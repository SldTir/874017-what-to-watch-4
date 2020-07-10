import React from 'react';
import renderer from 'react-test-renderer';
import Filter from './filter.jsx';

const genre = `All genres`;
const activeClass = `catalog__genres-item catalog__genres-item--active`;

const onFilterButtonClick = () => {};

describe(`ChecksTheCreationOfAFilter`, () => {
  it(`CreatesAFilter`, () => {
    const tree = renderer
      .create(<Filter
        filmGenre={genre}
        activeClass={activeClass}
        onFilterButtonClick={onFilterButtonClick}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
