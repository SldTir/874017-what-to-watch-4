import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

const Titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe(`ChecksComponentsMain`, () => {
  it(`RenderComponentsMain`, () => {
    const tree = renderer
      .create(<Main
        Description={Description}
        Titles={Titles}
        onHeaderClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
