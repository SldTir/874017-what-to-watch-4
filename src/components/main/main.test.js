import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

describe(`ChecksComponentsMain`, () => {
  it(`RenderComponentsMain`, () => {
    const tree = renderer
      .create(<Main
        Description={Description}
        filmsInfo={filmsInfo}
        onHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
