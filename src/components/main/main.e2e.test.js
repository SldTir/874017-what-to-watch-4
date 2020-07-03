import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {getId} from "../../mocks/films.js";

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
  }
];


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Сhecks the header click`, () => {
    const onHeaderClick = jest.fn();

    const mainElement = mount(
        <Main
          Description={Description}
          filmsInfo={filmsInfo}
          onHeaderClick={onHeaderClick}
        />
    );

    const headersElement = mainElement.find(`h3.small-movie-card__title`);

    headersElement.forEach((element) => {
      element.simulate(`click`, {preventDefault() {}});
    });

    expect(onHeaderClick.mock.calls.length).toBe(8);
  });
});
