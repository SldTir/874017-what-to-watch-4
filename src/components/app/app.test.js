import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";
import {getId} from "../../mocks/films.js";

const mockStore = configureStore([]);

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

const headerClick = () => { };

const filmsInfo = [
  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: getId(),
    genre: `Comedies`,
  }, {
    src: `img/dardjeeling-limited.jpg`,
    name: `Dardjeeling Limited`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: getId(),
    genre: `Crime`,
  }, {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    name: `Fantastic Beasts`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: getId(),
    genre: `Documentary`,
  }, {
    src: `img/johnny-english.jpg`,
    name: `Johnny English`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: getId(),
    genre: `Dramas`,
  }, {
    src: `img/macbeth.jpg`,
    name: `Macbeth`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: getId(),
    genre: `Horror`,
  }, {
    src: `img/midnight-special.jpg`,
    name: `Midnight Special`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: getId(),
    genre: `Kids & Family`,
  }, {
    src: `img/mindhunter.jpg`,
    name: `Mindhunter`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: getId(),
    genre: `Romance`,
  }, {
    src: `img/moonrise-kingdom.jpg`,
    name: `Moonrise Kingdom`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: getId(),
    genre: `Romance`,
  }
];

describe(`ChecksComponentsApp`, () => {
  it(`RenderComponentsApp`, () => {
    const store = mockStore({
      genre: `All genres`,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              Description={Description}
              filmsInfo={filmsInfo}
              onHeaderClick={headerClick}
            />
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
