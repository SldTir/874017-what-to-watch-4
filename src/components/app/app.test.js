import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Description = {
  GENRE: `Drama`,
  DATE: 2014,
};

const Titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe(`ChecksComponentsApp`, () => {
  it(`RenderComponentsApp`, () => {
    const tree = renderer
    .create(<App
      Description={Description}
      Titles={Titles}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
