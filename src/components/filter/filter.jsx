import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  const {filmGenre, activeClass, onFilterButtonClick} = props;
  return (
    <li className={activeClass}
      onClick={(evt) => {
        evt.preventDefault();
        onFilterButtonClick(filmGenre);
      }}
    >
      <a href="#" className="catalog__genres-link">{filmGenre}</a>
    </li>
  );
};

Filter.propTypes = {
  filmGenre: PropTypes.string.isRequired,
  activeClass: PropTypes.string.isRequired,
  onFilterButtonClick: PropTypes.func.isRequired,
};

export default Filter;
