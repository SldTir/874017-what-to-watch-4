import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const mock = {
  src: `img/bohemian-rhapsody.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`VideoPlayer is rendered correctly`, () => {
  const tree = renderer.create(<VideoPlayer
    preview={mock.preview}
    imagePath={mock.src}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
