import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

const Titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Сhecks the header click`, () => {
    const onHeaderClick = jest.fn();

    const mainElement = mount(
        <Main
          Description={Description}
          Titles={Titles}
          onHeaderClick={onHeaderClick}
        />
    );

    const headersElement = mainElement.find(`h3.small-movie-card__title`);

    headersElement.forEach((element) => {
      element.simulate(`click`, {preventDefault() {}});
    });

    expect(onHeaderClick.mock.calls.length).toBe(3);
  });
});
