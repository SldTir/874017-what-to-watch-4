import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {getId} from "../../mocks/films.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

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

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Сhecks the header click`, () => {
    const store = mockStore({
      genre: `All genres`,
    });
    const onHeaderClick = jest.fn();

    const mainElement = mount(
        <Provider store={store}>
          <Main
            Description={Description}
            filmsInfo={filmsInfo}
            onHeaderClick={onHeaderClick}
          />
        </Provider>
    );

    const headersElement = mainElement.find(`h3.small-movie-card__title`);

    headersElement.forEach((element) => {
      element.simulate(`click`, {preventDefault() {}});
    });

    expect(onHeaderClick.mock.calls.length).toBe(8);
  });
});
