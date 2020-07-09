import React, {PureComponent} from "react";
import Filter from "../filter/filter.jsx";
import PropTypes from "prop-types";
import {render} from "enzyme";
import { connect } from "react-redux";
import { ActionCreator } from "../../reducer.js";

const activeClass = (filter, activeFilter) => {
  debugger;
  if (filter === activeFilter) {
    return `catalog__genres-item catalog__genres-item--active`;
  } else {
    return `catalog__genres-item`;
  }
};

const FilterList = (props) => {
  const {filmsInfo, genre, onFilterButtonClick} = props;
  const filmsGenre = filmsInfo.slice().map((film) => film.genre);
  filmsGenre.unshift(`All genres`);
  const filmsUppdate = [...new Set(filmsGenre)];
  return (
    <ul className="catalog__genres-list">
      {filmsUppdate.map((film, it) =>
        <Filter key={it} filmGenre={film} activeClass={activeClass(film, genre)} onFilterButtonClick={onFilterButtonClick}/>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterButtonClick(filter) {
    dispatch(ActionCreator.selectsFilter(filter));
  },
});

export {FilterList};
export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
