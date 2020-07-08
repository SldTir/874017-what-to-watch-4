import React, {PureComponent} from "react";
import Filter from "../filter/filter.jsx";
import PropTypes from "prop-types";
import {render} from "enzyme";

const activeClass = (it) => {
  if (it === 0) {
    return `catalog__genres-item catalog__genres-item--active`;
  } else {
    return `catalog__genres-item`;
  }
};

const FilterList = (props) => {
  const {filmsInfo} = props;
  const filmsGenre = filmsInfo.slice().map((film) => film.genre);
  filmsGenre.unshift(`All genres`);
  const filmsUppdate = [...new Set(filmsGenre)];
  return (
    <ul className="catalog__genres-list">
      {filmsUppdate.map((film, it) =>
        <Filter key={it} filmGenre={film} activeClass={activeClass(it)}/>
      )}
    </ul>
  );
};

export default FilterList;
