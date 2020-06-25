import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const filmsInfo = [
  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieCardComponent`, () => {
  it(`Checks the card hover`, () => {
    const onCardHover = jest.fn();
    const onHeaderClick = jest.fn();
    const MovieCardElement = mount(
        <MovieCard
          imagePath={filmsInfo[0].src}
          nameFilm={filmsInfo[0].name}
          onHeaderClick={onHeaderClick}
          cardHover={onCardHover} />
    );

    const cardsElements = MovieCardElement.find(`article.small-movie-card`);
    cardsElements.forEach((element) => {
      element.props().onMouseEnter();
    });

    expect(onCardHover.mock.calls.length).toBe(1);
  });
});
