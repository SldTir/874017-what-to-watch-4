import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Filter from "./filter.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = `Comedies`;

const activeClass = `catalog__genres-item catalog__genres-item--active`;


describe(`FilterComponent`, () => {
  it(`ChecksTheFilterClick`, () => {
    const onFilterButtonClick = jest.fn();
    const FilterComponentElement = shallow(
        <Filter
          filmGenre={film}
          activeClass={activeClass}
          onFilterButtonClick={onFilterButtonClick}
        />
    );

    FilterComponentElement.simulate(`click`, {preventDefault() {}});
    expect(onFilterButtonClick).toHaveBeenCalledTimes(1);
  });
});
