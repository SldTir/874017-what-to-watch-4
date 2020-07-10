import React from "react";
import Filter from "../filter/filter.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const activeClass = (filter, activeFilter) => {
  if (filter === activeFilter) {
    return `catalog__genres-item catalog__genres-item--active`;
  } else {
    return `catalog__genres-item`;
  }
};

const FilterList = (props) => {
  const {filmsInfo, genre, onFilterButtonClick} = props;
  const filmsGenreUp = filmsInfo.map((film) => film.genre);
  filmsGenreUp.unshift(`All genres`);
  const filmsUppdate = [...new Set(filmsGenreUp)];
  return (
    <ul className="catalog__genres-list">
      {filmsUppdate.map((film, it) =>
        <Filter key={it} filmGenre={film} activeClass={activeClass(film, genre)} onFilterButtonClick={onFilterButtonClick}/>
      )}
    </ul>
  );
};

FilterList.propTypes = {
  filmsInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
  genre: PropTypes.string.isRequired,
  onFilterButtonClick: PropTypes.func.isRequired,
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
