import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";
import {getId} from "../../mocks/films.js";

const filmsInfo = [
  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: getId(),
    genre: `All genres`,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieCardComponent`, () => {
  it(`Checks the card hover`, () => {
    const onCardHover = jest.fn();
    const onHeaderClick = jest.fn();
    const onCardLeave = jest.fn();
    const MovieCardElement = mount(
        <MovieCard
          activePlayer={`-1`}
          cardNumber={filmsInfo[0].id}
          key={filmsInfo[0].id}
          imagePath={filmsInfo[0].src}
          preview={filmsInfo[0].preview}
          nameFilm={filmsInfo[0].name}
          onHeaderClick={onHeaderClick}
          handleCardHover={onCardHover}
          handleCardMouseLeave={onCardLeave}
        />
    );

    const cardsElements = MovieCardElement.find(`article.small-movie-card`);
    cardsElements.simulate(`mouseenter`, {preventDefault() { }});


    expect(onCardHover).toHaveBeenCalledTimes(1);
  });

  it(`Checking the user's response`, () => {
    const onCardHover = jest.fn((...args) => [...args]);
    const onHeaderClick = jest.fn();
    const onCardLeave = jest.fn();
    const MovieCardElement = mount(
        <MovieCard
          activePlayer={`-1`}
          cardNumber={filmsInfo[0].id}
          key={filmsInfo[0].id}
          imagePath={filmsInfo[0].src}
          preview={filmsInfo[0].preview}
          nameFilm={filmsInfo[0].name}
          onHeaderClick={onHeaderClick}
          handleCardHover={onCardHover}
          handleCardMouseLeave={onCardLeave} />
    );
    const cardsElements = MovieCardElement.find(`article.small-movie-card`);
    cardsElements.simulate(`mouseenter`, {preventDefault() { }});
    cardsElements.simulate(`mouseleave`, {preventDefault() { }});

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover).toHaveBeenCalledWith(filmsInfo[0].name, filmsInfo[0].id);
    expect(onCardLeave).toHaveBeenCalledTimes(1);
  });
});
