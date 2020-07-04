import React from 'react';
import renderer from 'react-test-renderer';

import CardImg from './card-img.jsx';

const mock = {
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  name: `Fantastic Beasts`,
};

it(`CardImg is rendered correctly`, () => {
  const tree = renderer.create(<CardImg
    imagePath={mock.src}
    nameFilm={mock.name}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
