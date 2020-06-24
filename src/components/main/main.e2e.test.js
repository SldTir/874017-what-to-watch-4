import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

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
