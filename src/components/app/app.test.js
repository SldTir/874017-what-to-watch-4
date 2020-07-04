import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {getId} from "../../mocks/films.js";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

const headerClick = () => {};

const filmsInfo = [{
  src: `img/bohemian-rhapsody.jpg`,
  name: `Bohemian Rhapsody`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: getId(),
}, {
  src: `img/dardjeeling-limited.jpg`,
  name: `Dardjeeling Limited`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  id: getId(),
}, {
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  name: `Fantastic Beasts`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: getId(),
}, {
  src: `img/johnny-english.jpg`,
  name: `Johnny English`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  id: getId(),
}, {
  src: `img/macbeth.jpg`,
  name: `Macbeth`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: getId(),
}, {
  src: `img/midnight-special.jpg`,
  name: `Midnight Special`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  id: getId(),
}, {
  src: `img/mindhunter.jpg`,
  name: `Mindhunter`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: getId(),
}, {
  src: `img/moonrise-kingdom.jpg`,
  name: `Moonrise Kingdom`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  id: getId(),
}];

describe(`ChecksComponentsApp`, () => {
  it(`RenderComponentsApp`, () => {
    const tree = renderer
    .create(<App
      Description={Description}
      filmsInfo={filmsInfo}
      onHeaderClick={headerClick}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
